import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage/HomePage.js'
import Top10 from './components/Top10Page/Top10.js'
import SearchResults from './components/BreedSearchResults/SearchResults.js'
import NotFound from './components/404/404'
import Footer from './components/Footer/Footer.jsx'

export default function App() {

  return (
    <div className="App">
      <Router>
        <Switch>      
          {/* HOME PAGE */}
          <Route exact path="/" component={HomePage} />
          {/* MOST SEARCHED BREEDS*/}
          <Route exact path="/top-10" component={Top10}/>
          {/* SEARCH SPECIFIC BREED */ }
          <Route path="/breeds/search/:breedName" component={SearchResults} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

