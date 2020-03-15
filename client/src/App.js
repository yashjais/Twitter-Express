import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import TweetsPage from './components/TweetsPage'
import TweetsShow from './components/TweetsShow'

function App(props) {
  return (
    <BrowserRouter>
    <div style={{textAlign: 'center'}} className="container">
      <br />
      <h1><span className="text-reset">Twitter App</span></h1>
      <br />
      
      <Route path="/" component={TweetsPage} exact={true}/>
      <Route path="/newTweets" component={TweetsShow} />
    </div>
    </BrowserRouter>
  )
}

export default App;
