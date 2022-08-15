import React, {Component} from 'react';
import Movie from './services/movies.js'
class App extends Component{
  render(){
    return(
      <div>
        <Movie/>
      </div>
    )
  }
}

export default App