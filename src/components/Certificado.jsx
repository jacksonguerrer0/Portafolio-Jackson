import React from 'react';
import Styled from 'styled-components';
import Javascript from '../images/javascript.png';
import ResponsiveWebDesign from '../images/resonsiveWebDesign.png';
import Libreria from '../images/libreria.png';

const CertificadoContainer = Styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    width: 100%;
    height: 120vh;
    text-align: center;
    margin: auto;
    padding: 50px;
    background: linear-gradient(to bottom right, #FEB692, #EA5455);
    @media only screen and (max-width:1000px){
        height: 80%;

    }

`
const CertificadoImage = Styled.div`
    width: 65%;
    margin: auto;
    @media only screen and (max-width: 767px){
        width: 100%;

    }
`
const CertificadoText = Styled.div`
    background-color: #0f0e17ed;
    border-radius: 20px;
`
const Certificado = () => {
    return (
        <CertificadoContainer id="certificados">
            <h1>Certificados en FreeCodeCamp</h1>
            <CertificadoImage id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                <img src={Javascript} className="d-block w-100" alt="..."/>
                <CertificadoText className="carousel-caption d-none d-md-block">
                    <h5>Algoritmos y estructuras de datos de JavaScript</h5>
                    <p>Completado</p>
                </CertificadoText>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                <img src={ResponsiveWebDesign} className="d-block w-100" alt="..."/>
                <CertificadoText className="carousel-caption d-none d-md-block">
                    <h5>Responsive Web Design</h5>
                    <p>Completado</p>
                </CertificadoText>
                </div>
                <div className="carousel-item">
                <img src={Libreria} className="d-block w-100" alt="..."/>
                <CertificadoText className="carousel-caption d-none d-md-block">
                    <h5>Bibliotecas de desarrollo front-end</h5>
                    <p>En desarrollo</p>
                </CertificadoText>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </CertificadoImage>
        </CertificadoContainer>
    )
}

export default Certificado
