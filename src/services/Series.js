import React, {Component} from 'react'
import axios from 'axios'
import { TitleMovie, Sinopse, Note, Input, Container, Box, Container1, Poster } from '../services/Style'
import { Link } from 'react-router-dom'


const FilmesApi = axios.create({
    baseURL:'https://api.themoviedb.org/3/tv/popular?api_key=747dae66169b6dcd009bc6d9b5c5da8e&language=pt-BR&page=1'
})


export default class Series extends Component {
    state = {
        movies: [],
        FilterMovies:[]
    }
  
    componentDidMount() {
        this.getMovies()
    }
  
    getMovies = async () => {
        const resposta = await FilmesApi.get()
        console.log(resposta);
  
        
  
        const allFilmes = resposta.data.results.map((item ) => {
            return {
                ...item, 
                image: `https://image.tmdb.org/t/p/w300${item.poster_path}`
            }
  
        })
        this.setState({
            movies: allFilmes,
            FilterMovies: allFilmes
        })
        
    }
    handleChange = (event) =>{
    
      const ListaFiltrada = this.state.movies.filter((item) => {
          if(item.overview.toLowerCase().includes(event.target.value.toLowerCase())){
              return  true
          }else{
              return ""
          }
      })
      this.setState({
          FilterMovies:ListaFiltrada
      })
      console.log(this.state.FilterMovies)
  }
  
    render() {
        return (
            <>
           
        <Container1>
            <Input type="search" onChange={this.handleChange} />
            {this.state.FilterMovies.map((item, index) => (
                <Container key={index}>
                    <Poster src={item.image} alt='posters' />
                    <Box>
                                <TitleMovie>{item.name}</TitleMovie>
                                <Sinopse> 
                                    <h3>Sinopse:</h3> 
                                    <p>{item.overview}</p>
                                </Sinopse>
                                <Note>
                                    <h4>Avaliação dos usuários</h4>
                                    <p>{item.vote_average}% </p>
                                </Note>
                            </Box>
                </Container>
            ))}
    
         </Container1>
        </>
        )
    }
  }