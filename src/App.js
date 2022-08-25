import React, {Component} from 'react';
import Header from './Components/Header'
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&family=Montserrat:ital,wght@0,100;0,500;0,600;1,100;1,500&family=Mukta:wght@200;400;800&family=Open+Sans:wght@300&family=Playfair+Display:wght@700&display=swap');

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: "Fira-Sans", Arial, sans-serif;
}
html, body{
  background-image: linear-gradient(to left, #17171b,  #16052a);
  height: 100%;
}
`;


class App extends Component{
  render(){
    return(
      <div>
        <GlobalStyle/>
        <Header />
      </div>
    )
  }
}

export default App