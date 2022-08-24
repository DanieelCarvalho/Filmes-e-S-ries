import styled from "styled-components";
import { Link } from "react-router-dom"

export const Title= styled.h2`
    color:#fdfefe;
    font-size:5vw;
    width: 100%;
    span{
        color: #a435f0;
    }
`
export const HomeP = styled.p`
    color: #fdfefe;

`
export const TitleMovie =styled.h2`
    color:#fdfefe;
    padding-left:5px;

   
  
`
export const Sinopse= styled.p`
    width: 19vw;
    height: 100%;
    font-size: 1vw;
    color:#fdfefe;
    text-align: justify;
    padding-left:5px;
   

`
export const Note= styled.p`
    color:#fdfefe;
    border: 2px solid #a435f0;
    border-radius: 50%;
    width:2.8vw;
    height: 6vh;
    font-size: 2vw;
    text-align:center;
    margin-left:5px;
`
export const Container1 = styled.div`
    display:flex;
    justify-content:space-evenly;
    flex-wrap: wrap;
    height: 100%;
    position:relative;

`
export const Input= styled.input`
    position: absolute;
    left:85%;
    bottom:100%;
    height: 3vh;
    width:13vw;
    border-radius:25px;
    border:none;

`
export const Container= styled.div`
    display: flex;  
    justify-content:center;
    padding-top:40px;
    /*background-color: ${props => props.Daniel ? "red" : "blue"}*/

    

`
export const Box = styled.div`
    display: flex;  
    flex-direction: column;
    width:20vw
    
`





