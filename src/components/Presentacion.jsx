import React from 'react'
import Flecha from  "../images/down-arrow.png"
import Persona from "../images/jackson.jpg"
const Presentacion = () => {
    return (
        <div>
            <div>
                <h1>Hola a todos! <br /> Soy Jackson Guerrero</h1>
                <p>Developer FrontEnd apasionado por la tecnologia con sentido de cambiar el mundo</p>
                <img src={Flecha} alt="" />
            </div>
            <img src={Persona} alt="" />
        </div>
    )
}

export default Presentacion