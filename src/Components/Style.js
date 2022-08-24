import styled from "styled-components";
import { Link } from "react-router-dom"



export const Titulo = styled.h1 `
    color:#a435f0;
    display:flex;
    align-items:center;
    height: 5vh;
    margin-bottom:0px;
    
`
export const Principal =styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:flex-end;
    height: 10vh;
    width:80vw;
    
}
ul{
    display:flex;
    justify-content:space-evenly;
    align-items:flex-end;
    width:50vw;
    height: 10vh;
    margin-bottom:0px;
    list-style: none;
 
  
    
   
    
}
li{

}
    


`

export const Menu = styled(Link)`
    color:#fdfefe;
    text-decoration:none

`