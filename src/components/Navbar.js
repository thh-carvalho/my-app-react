import { useState } from "react";

import '../styles/main.css'

import AppRoutes from "../Routes";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <>
            <header id="main-header__content">
                <nav id="main-header__content">
                    <div id="profile-info__div">
                        <Link to='/'>Thiago Carvalho</Link>
                        <div className="main-photo__profile"></div>
                        <p>Olá meu nome é Thiago Carvalho e eu sou um desenvolvedor Front-end.</p>
                    </div>

                    <hr></hr>

                    <div className="social-media__itens">
                        <Link to='#'>LinkedIn</Link>
                        <Link to='#'>GitHub</Link>
                    </div>

                    <hr></hr>

                    <div className="itens-link__nav">
                        <Link to='/'>HOME</Link>
                        <Link to='/about'>ABOUT</Link>
                        <Link to='/'>CONTACT</Link>
                    </div>
                    <hr></hr>
                </nav>
            </header>
        </>
    )
}