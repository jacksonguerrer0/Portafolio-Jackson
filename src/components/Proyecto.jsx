import React from 'react'
import styled from 'styled-components'
import dCocoa from '../images/dCocoa.png'
import pDocumentacion from '../images/pDocumentacion.png'
import pTributo from '../images/pTributo.png'
const ProyectoContainer = styled.div`
    display: flex;
    flex-flow: wrap column;
    width: 90%;
    margin: auto;
    align-items: center;
    margin-bottom: 50px;
    border-bottom: 1px solid black;
    border-right: 1px solid black;

`
const ProyectoHeader = styled.div`
    display: flex;
    margin: 50px 0;
    @media only screen and (max-width: 767px){
        display: flex;
        flex-flow: column wrap;


    }
`
const ProyectoH2 = styled.h2`
    width: 50%;
    @media only screen and (max-width: 767px){
        width: 100%;

    }
`
const ProyectoHeadP = styled.p`
    color: black;
    font-size: 20px;
`
const ProyectoFondo = styled.div`
    background-image:  url(${dCocoa});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 70vh;
    width: 100%;

`
const ProyectoFondo2 = styled.div`
    background-image:  url(${pDocumentacion});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 70vh;
    width: 48%;
    @media only screen and (max-width: 767px){
        bottom: 0;
        top: 300px;
        width: 100%;

    }
`
const ProyectoFondo3 = styled.div`
    background-image:  url(${pTributo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 70vh;
    width: 48%;
    @media only screen and (max-width: 767px){
        bottom: 0;
        top: 300px;
        width: 100%;

    }
`
const ProyectoCard = styled.div`
    position: relative;
    top: 100px;
    width: 50%;
    height: 50%;
    padding-top: 50px;
    padding-right: 30px;
    padding-left: 10px;
    padding-bottom: 10px;
    background-color: #0F0E17;
    @media only screen and (max-width: 767px){
        bottom: 0;
        top: 300px;
        width: 95%;

    }
`
const ProyectoButtonCard = styled.button`
    position: absolute;
    bottom: 20px;
`
const ProyectoCard2 = styled.div`
    position: relative;
    top: 100px;
    width: 80%;
    height: 50%;
    padding-top: 50px;
    padding-right: 30px;
    padding-left: 10px;
    padding-bottom: 10px;
    background-color: #0F0E17;
    @media only screen and (max-width: 767px){
        bottom: 0;
        top: 300px;
        width: 95%;

    }
`
const ProyectoPDCocoa = styled.p`
    margin-bottom: 0px;
`
const ProyectoContainerFondo = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    justify-content: space-between;
    margin: 30px 0;
    @media only screen and (max-width: 767px){
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        width: 100%;
    }
`
const ProyectoVMas = styled.a `
    margin-top: 50px;
`
const Proyecto = () => {
    return (
        <ProyectoContainer id="proyectos">
            <ProyectoHeader>
                <ProyectoH2>Parece magia, todo funciona con codigo</ProyectoH2>
                <ProyectoHeadP>Tiempo, dedicacion e inspiración. La experiencia habla por si sola</ProyectoHeadP>
            </ProyectoHeader>
            <ProyectoFondo>
                <ProyectoCard>
                    <h3>D-Cocoa</h3>
                    <ProyectoPDCocoa>D-Cocoa es un econmerce dedicada a la venta de productos 100%</ProyectoPDCocoa>
                    <a href="https://jacksonguerrer0.github.io/Sprint3/">                    
                    <ProyectoButtonCard type="button" className="btn btn-warning" >Ver</ProyectoButtonCard></a>
                </ProyectoCard>
            </ProyectoFondo>
            <ProyectoContainerFondo>
                <ProyectoFondo2>
                    <ProyectoCard2>
                        <h3>Página Documentación</h3>
                        <ProyectoPDCocoa>Es una página para la documentación tecnica, en este caso el uso de Let en js</ProyectoPDCocoa>
                        <a href="https://jacksonguerrer0.github.io/Pagina-Documentacion-T-Bootstrap/index.html">
                        <ProyectoButtonCard type="button" className="btn btn-warning">Ver</ProyectoButtonCard>
                        </a>
                    </ProyectoCard2>
                </ProyectoFondo2>
                <ProyectoFondo3>
                    <ProyectoCard2>
                        <h3>Pagina Tributo</h3>
                        <ProyectoPDCocoa>Página tributo a los campesino colombianos por su gran labor</ProyectoPDCocoa>
                        <a href="https://jacksonguerrer0.github.io/Pagina-Tributo-Bootstrap/">
                        <ProyectoButtonCard type="button" className="btn btn-warning">Ver</ProyectoButtonCard>
                        </a>
                    </ProyectoCard2>
                </ProyectoFondo3>
            </ProyectoContainerFondo>
            <ProyectoVMas href="https://github.com/jacksonguerrer0">
                <button type="button" className="btn btn-outline-warning">Ver más Proyectos<i className="fas fa-arrow-right"></i></button>
            </ProyectoVMas>
            <hr />
        </ProyectoContainer>
        
    )
}

export default Proyecto

