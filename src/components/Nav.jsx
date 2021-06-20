import React from 'react';
import Styled from 'styled-components'

const NavDiv = Styled.div`
    background: #0F0E17;
    top: 0;
    position: absolute;
    padding: 15px;
}
`
const NavText = {color: `white`}
const Nav = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavDiv className="container-fluid">
            <i className="navbar-brand " style={NavText}>Jackson</i>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{backgroundColor: `#FF8906`}}>
            <span className="navbar-toggler-icon" style={{backgroundColor: `#FF8906`}}></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link " aria-current="page"  href="#hola" style={NavText}>Hola</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" aria-current="page"  href="#proyectos" style={NavText}>Proyectos</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" aria-current="page"  href="#certificados" style={NavText}>Certificados</a>
                </li>
                <li className="nav-item">
                <a className="nav-link " aria-current="page"  href="#contacto" style={NavText}>Contacto</a>
                </li>
            </ul>
            <button type="button" className="btn btn-outline-warning">Descargar Currículum</button>
            </div>
        </NavDiv>
    </nav>
    )
}

export default Nav
