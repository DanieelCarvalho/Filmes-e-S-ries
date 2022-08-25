import styled from "styled-components";
import { Link } from "react-router-dom"

export const Title= styled.h2`
    color:#fdfefe;
    font-size:5vw;
    width: 100%;
    height: 30vh;
    display:flex;
    align-items: flex-end;
    padding-left: 70px;
    span{
        color: #a435f0;
    }
`
export const HomeP = styled.p`
    color: #fdfefe;
    height: 10vh;
    padding-left: 70px;

`
export const TitleMovie =styled.div`
    color:#fdfefe;
    padding-left:5px;
    font-size: 1.5vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 20vh;
   
  
`
export const Sinopse= styled.div`
    width: 19vw;
    height: 100%;
    font-size: 1vw;
    color:#fdfefe;
    text-align: justify;
    padding-left:5px;
    
    margin-left: 5px;
    h3{
        
        height: 3vh;
    }
    p{
    
    }
  

`
export const Note= styled.div`
    color:#fdfefe;
    width:100%;
    height: 60% ;
    display: flex;
    h4{
        width: 9vw;
        margin-left: 10px;
    }
    p{
    border: solid 2px #21D07A;
    width:40px;
    height: 40px;
    border-radius: 50%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1vw;
    background-color: #402397;
    }
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
    justify-content: flex-start;
    width:20vw;
    height: 100%;

    opacity: 0%;
    ${Container}:hover &{
        opacity: 100%;
        transition:  0.30s ease-in-out;
    }
 
  

  
  
    
`
export const Poster= styled.img`
    border: none;
    border-radius: 2%;
    width: 25vw;
    height: 80vh;
    &:hover .Box{
        opacity: 100%;
       
    }


`
export const Div= styled.div`
    display:flex;
    flex-direction: row-reverse;
    justify-content:center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
  


`
export const Img = styled.img`
   width: 20vw;
    height: 40vh;



`




