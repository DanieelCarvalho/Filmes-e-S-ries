import React, { Component } from 'react';
import Home from '../services/Home'
import Movies from '../services/movies';
import Series from '../services/Series';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import * as S from '../Components/Style'


class Header extends Component {
    render() {
        return (
            <BrowserRouter>
                <S.Principal>
                <S.Titulo>MovieTop+ </S.Titulo>
                    <ul>
                        <li>
                            <S.Menu  to='/' >Home </S.Menu>
                        </li>
                        <li>
                            <S.Menu to='/movies'>Filmes</S.Menu>
                        </li>
                        <li>
                            <S.Menu to='/series'>Series</S.Menu>
                        </li>
                    </ul>
            

                </S.Principal>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/movies/' element={<Movies />}/>
                    <Route path='/Series' element={<Series />}/>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default Header;