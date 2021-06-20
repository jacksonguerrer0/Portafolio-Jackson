import React from 'react';
import styled from 'styled-components';
import Persona from "../images/jackson.png";

const PresentacionContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    background-color:#0F0E17;
    width: 100%;
    height: 95vh;
    padding-left: 20px;
    margin-top: 50px;
    align-items: center;
    @media only screen and (max-width: 767px){
        justify-content: center;
        padding: 0;
        height: 130vh;
        padding-bottom: 50px;
    }
`
const Description = styled.div`
    width: 50%;
    @media only screen and (max-width: 767px){
        width: 90%;
    }
`
const Foto = styled.div`
    background-image: url(${Persona});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 360px;
    height: 50%;
    position: absolute;
    right: 0;
    @media only screen and (max-width: 767px){
        display: flex;
        width: 300px;
        height: 40%;
        background-position: top;
        position: static;
        z-index: 2;
    }
`
const PresentacionH1 = styled.h1`
    color: white;
    font-size: 50px;
    letter-spacing: 5px;

`
const Picono= styled.i`
    font-size: 50px;
    color: #FF8906;
    position: absolute;
    bottom: 10px;
    @media only screen and (max-width: 767px){
        bottom: -250px;

    }
`
const Presentacion = () => {
    return (
        <PresentacionContainer id="hola">
            <Foto alt="Jackson" />
            <Description>
                <PresentacionH1>¡Hola a todos! <br /> Soy Jackson Guerrero</PresentacionH1>
                <p style={{color: `#A7A9BE`, fontSize: `20px` }}>Estudiante Geek FrontEnd apasionado por la tecnologia <br /> con sentido de cambiar el mundo</p>
                <Picono className="fas fa-arrow-down"></Picono>
            </Description>
            
            
        </PresentacionContainer>
    )
}

export default Presentacion