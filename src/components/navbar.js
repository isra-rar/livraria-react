import React, { Component } from 'react';
import NavbarItem from '../components/navbarItem'

function Navbar() {

    return (
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary" style={{}}>
            <div className="container">
                <a href="https://bootswatch.com/" className="navbar-brand">Livraria Geeks</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarResponsive" aria-controls="navbarResponsive"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                        <NavbarItem href="#/home" label="Home"/>
                        <NavbarItem href="#/cadastro-usuario" label="Clientes"/>
                        <NavbarItem href="#/cadastro-livro" label="Livros"/>
                        <NavbarItem href="#" label="Aluguel"/>
                    </ul>
                </div>
            </div>
        </div>



    )
}

export default Navbar;
