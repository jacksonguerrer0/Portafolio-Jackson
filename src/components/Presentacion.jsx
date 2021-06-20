import React from 'react';
import styled from 'styled-components';
import Persona from "../images/jackson.jpg";

const PresentacionContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    background-color: antiquewhite;
    width: 100%;
    height: 95vh;
    padding-left: 50px;
    align-items: center;
    @media only screen and (max-width: 767px){
        justify-content: center;
        padding: 0;
        height: 100vh;
        padding-bottom: 50px;
    }
`
const Description = styled.div`
    width: 50%;
    @media only screen and (max-width: 767px){
        width: 90%;
    }
`
const Foto = styled.img`
    width: 45%;
    height: auto;
    position: absolute;
    right: 0;
    @media only screen and (max-width: 767px){
        display: block;
        position: static;
        width: 100%;
	    height: auto;
    }
`
const Presentacion = () => {
    return (
        <PresentacionContainer id="hola">
            <Foto src={Persona} alt="Jackson" />
            <Description>
                <h1>Hola a todos! <br /> Soy Jackson Guerrero</h1>
                <p>Estudiante Geek FrontEnd apasionado por la tecnologia con sentido de cambiar el mundo</p>
                <i className="fas fa-arrow-down"></i>
            </Description>
            
        </PresentacionContainer>
    )
}

export default Presentacion