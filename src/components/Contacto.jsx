import React from 'react'
import Styled from 'styled-components'

const ContactoContainer = Styled.div`
    width: 450px;
    height: auto;
    margin: auto;
    margin-top: 120px;
    border: 2px solid black;
    border-radius: 10px;
    padding: 40px 25px;
    background-color: #0F0E17;
    @media only screen and (max-width: 767px){
        width: 90%;

    }
`
const Button = Styled.button`
    width: 100%;
    background-color: #FF8906;
   :hover{
    background-color: #ff9e2f
   } 
    
`
const Contacto = () => {
    return (
    <ContactoContainer id="contacto">
            <h1 style={{color:`white`}}>Contacto</h1>
            <p>Si estas interesado en trabajar conmigo, no dudes en contactarme</p>
            <form>
        <div className="mb-3">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correo Electronico"/>
        </div>
        <div className="mb-3">
            <input type="text" className="form-control" id="exampleInputNombre" placeholder="Nombre Completo"/>
        </div>
        <div className="mb-3">
            <textarea name="" cols="30" rows="5" className="form-control" id="exampleInputComentario" placeholder="Escribe un mensaje"></textarea>
        </div>
        <div className="mb-3">
        <Button type="submit" className="btn btn-primary">Enviar</Button>
        </div>
        
        </form>
    </ContactoContainer>
    )
}

export default Contacto
