import React, { Component } from 'react';
import { Title, HomeP } from '../services/Style'


class Home extends Component {
    render() {
        return (
            <div>
                <Title> Bem vindo(a) <span>MovieTop+</span></Title>
                <HomeP>Os Filmes e Séries de TV mais populares do momento.</HomeP>
            </div>
        );
    }
}

export default Home;