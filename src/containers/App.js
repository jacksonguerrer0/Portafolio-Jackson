import React from 'react';
import '../styles/index.css';
import Header from "../components/Header";
import Nav from "../components/Nav";
import Main from '../components/Main';
import Presentacion from '../components/Presentacion';
import Proyecto from '../components/Proyecto';
import Certificado from '../components/Certificado';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';


const App = ()=> (
    <>
    <Header>
        <Nav/>
    </Header>
    <Main>
        <Presentacion/>
        <Proyecto/>
        <Certificado/>
        <Contacto/>
    </Main>
    <Footer/>
    </>
)

export default App;
