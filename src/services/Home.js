import React, { Component } from 'react';
import { Title, HomeP, Img, Div } from '../services/Style'
import axios from 'axios'





const FilmesApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/popular?api_key=747dae66169b6dcd009bc6d9b5c5da8e&language=en-US&page=',
    
})



class Home extends Component  {
    state = {
        movies: [],
        FilterMovies: []
    }

    componentDidMount() {
        this.getMovies()
    }



    getMovies = async () => {
        const resposta = await FilmesApi.get()
        console.log(resposta);



        const allFilmes = resposta.data.results.map((item) => {
            return {
                ...item,
                image: `https://image.tmdb.org/t/p/w300${item.poster_path}`,


            }

        })
        this.setState({
            movies: allFilmes
        })
        this.setState({
            FilterMovies: allFilmes
        })
    }
    handleChange = (event) => {

        const ListaFiltrada = this.state.movies.filter((item) => {
            if (item.original_title.toLowerCase().includes(event.target.value.toLowerCase())) {
                return true
            } else {
                return ""
            }
        })
        this.setState({
            FilterMovies: ListaFiltrada
        })
        console.log(this.state.FilterMovies)
    }



    render() {
        return (
            <div>
                <Title> Bem vindo(a) <span>MovieTop+</span></Title>
                <HomeP>Os Filmes e as Séries de TV mais populares do momento.</HomeP>
                <Div>
                {this.state.FilterMovies.map((item, index) => (
                        <div key={index}>
                            <Img src={item.image} alt='posters' />
                         
                        </div>


                    ))}
                    </Div>
            </div>
        );
    }
}

export default Home;