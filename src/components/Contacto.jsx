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
    async function handleSubmit (e){
        e.preventDefault();
        const form = new FormData(e.target);
        const response = await fetch(e.target.action, {
            method: e.target.method,
            body: form,
            headers: {
                'Accept' : 'application/json'
            }
        })
        if(response.ok){
            e.target.reset()
            alert("Gracias por enviar tu correo")
        }
    }


    return (
    <ContactoContainer  id="contacto" >
        <h1 style={{color:`white`}}>Contacto</h1>
        <p>Si estas interesado en trabajar conmigo, no dudes en contactarme</p>
        <form action="https://formspree.io/f/mqkwlzdg" method="POST" id="formulario" onSubmit={handleSubmit}>
                <label className="col-12 mb-2" htmlFor="email">
                    <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Correo Electronico" required/>
                </label>
                <label className="col-12 mb-2" htmlFor="nombre">
                    <input type="text" name="nombre" className="form-control" id="nombre" placeholder="Nombre Completo" required/>
                    </label>
                <label className="col-12 mb-2" htmlFor="comentario">
                    <textarea name="comentario" cols="30" rows="5" className="form-control" id="comentario" placeholder="Escribe un mensaje"></textarea>
                    </label>
            <Button type="submit">Enviar</Button>
        </form>
    </ContactoContainer>
    )

}

export default Contacto
