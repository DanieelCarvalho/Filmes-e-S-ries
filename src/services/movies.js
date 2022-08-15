import React, {Component} from 'react'
import axios from 'axios'


const MovieApi = axios.create({
    baseURL:'https://api.themoviedb.org/3/movie/popular?api_key=747dae66169b6dcd009bc6d9b5c5da8e&language=en-US&page=1'
})
console.log(MovieApi)

export default class Movies extends Component{
    render(){
      return(
        <>
         
        </>
      )
    }
}