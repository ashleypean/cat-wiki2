const express = require('express')
const axios = require('axios')
require('dotenv').config()
const path = require('path')

const app = express()

//Default AXIOS settings - Alllow cors and enable API key
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('x-api-key', process.env.API_KEY)
  next();
});


//TOP 10 PAGE
app.get('/top-10', async(req, res) => {
  try {
    const fetchString = 'https://api.thecatapi.com/v1/images/search?limit=1&breed_id='
    const ids = ['beng', 'sava', 'norw', 'srex', 'jbob', 'rblu', 'soma','amis', 'mcoo', 'snow']

    //Store the response in an iterable array 
    const response = []

    //Loop over all breeds and fetch from the Cat API
    for(let i = 0; i < ids.length; i++) {
      const r = await axios.get(fetchString + ids[i])

      //Store the name, description, and url in a variable 
      const name = r.data[0].breeds[0].name
      const description = r.data[0].breeds[0].description
      const url = r.data[0].url

      //Return only the name, description, and url as a single object
      response.push({name: name, description: description, url: url})
    }

    res.status(200).send(response)
  }catch(err){console.log(err)}
})




//BREED SEARCH RESULTS
//Get breed info for specific cat that was searched
app.get('/breeds/search/:name', async(req, res, next) => {
  try {   
    //Parse the url to get the breedname
    const breedName = req.params.name
    
    //Fetch breed info from CAT API and set as local variable 
    const r = await axios.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`)

    //Shorten the naming covention for getting data
    const obj = r.data[0]
    //Extract only the necessary data 
    const breedInfo = {
      photos: ['', ''], 
      name: obj.name,
      description: obj.description,
      temperament: obj.temperament,
      origin: obj.origin, 
      life_span: obj.life_span, 
      adaptability: obj.adaptability, 
      affection_level: obj.affection_level, 
      child_friendly: obj.child_friendly, 
      grooming: obj.grooming, 
      intelligence: obj.intelligence, 
      health_issues: obj.health_issues, 
      social_needs: obj.social_needs,
      stranger_friendly: obj.stranger_friendly,
      id: obj.id 
    }
    //Store breedInfo obj so it is available in the next middleware function
    res.locals.breedInfo = breedInfo

    next()
  }catch(err) {
    console.log(err)
  res.status(404).send(err.message)}
}, 
 async function(req, res) {
   //Store local breedInfo variable 
  const breedInfo = res.locals.breedInfo
  //Get breed ID in order to fetch photos
  const breedID = breedInfo.id

  try {
    //Send request to Cat API for 8 photos maximum (MAY SEND LESS)
    const photoObj = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=8&breed_id=${breedID}`)

    //Extract photos from object and store into breedInfo obj
    breedInfo.photos = photoObj.data.map(obj => obj.url)

    //Send entire breedInfo object back 
    res.status(200).send(breedInfo)
  }catch(err){console.log(err)}
})




//HOME PAGE
//Get list of all cat breeds 
app.get('/api', async function (req, res, next){
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds')
    
    const names = response.data.map(breed => breed.name)
    res.locals.names = names
    next()
  }catch(err) {console.log(err)}
}, 
async function(req, res) {
  const names = res.locals.names

  //Get image url and name for Bengal(beng), Savannah(sava), Norweigan Forest Cat(norw), Selkirk Rex(srex)
  const id = ['beng', 'sava', 'norw', 'srex']
  const fetchString = 'https://api.thecatapi.com/v1/images/search?limit=1&breed_id='

  const top4 = []

  for(let i = 0; i < id.length; i++) {
    const r = await axios.get(fetchString + id[i])

    const obj = {
      url: r.data[0].url, 
      name: r.data[0].breeds[0].name,
    }

    top4.push(obj)
  }

  //Send back the names and the top4 cats 
  res.status(200).send({top4, names})
})

if(process.env.NODE_ENV === 'production') {
  app.use(express.static())
}

app.use(express.static(path.join(__dirname, 'client/build')))

if(process.env.NODE_ENV === 'production') {  
  app.use(express.static(path.join(__dirname, 'client/build')));  
  app.get('*', (req, res) => {    
    res.sendFile(path.join(__dirname = 'client/build/index.html'));  
  })
}

app.get('*', (req, res) => {  
  res.sendFile(path.join(__dirname+'/client/public/index.html'))
})

app.listen(process.env.PORT || 3001, () => {
  console.log(`Listening on port ${PORT}`)
})
