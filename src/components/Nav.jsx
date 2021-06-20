import React from 'react'

const Nav = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <i className="navbar-brand">Jackson</i>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link " aria-current="page"  href="#probando">Hola</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" aria-current="page"  href="#probando">Proyectos</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" aria-current="page"  href="#probando">Certificados</a>
                </li>
                <li className="nav-item">
                <a className="nav-link " aria-current="page"  href="#probando">Contacto</a>
                </li>
            </ul>
            <button type="button" className="btn btn-outline-warning">Descargar Currículum</button>
            </div>
        </div>
    </nav>
    )
}

export default Nav
