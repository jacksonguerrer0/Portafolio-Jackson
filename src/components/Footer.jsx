import React from 'react'
import Styled from 'styled-components'

const FooterContainer = Styled.footer`
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    text-align: center;
    height: 100px;
    align-items: center;
    margin-top: 50px;
`
const FooterEsquinas= Styled.div`
    width: 20%;
`
const FooterMedio= Styled.div`
    width: 60%;
`
const Footer = () => {
    return (
        <FooterContainer>
            <FooterEsquinas><i>Jackson</i></FooterEsquinas>
            <FooterMedio>Hecho por Jackson, CopyRight 2021 - Todos los derechos reservados.</FooterMedio>
            <FooterEsquinas>
                <i className="fab fa-github"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-twitter"></i>
            </FooterEsquinas>
        </FooterContainer>
    )
}

export default Footer
