import { useState } from "react";

import '../styles/main.css'

export default function Home(){
    return(
        <>
            <div id="main-description__home">
                <h1>Thiago Carvalho</h1>
                <spam>Front End Developer</spam>
                <p>I'm a Front End Developer, I develop web applications and A/B tests.
                </p>
            </div>

            <div className="skill-main__content">
                <div>
                    <h2>My skills</h2>

                    <p>I work with web development for a year using techs like Javascript, HTML5 and CSS3, recently I'm using React.js and Flask, a python
                        framework, for web development.
                    </p>
                </div>
            </div>
        </>
    )
}