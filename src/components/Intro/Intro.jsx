import React from 'react'
import './Intro.css';

export default function Intro() {
    return (
        <div id='home'>
            <nav class="shadow navbar navbar-expand-lg navbar-dark justify-content-center">
                <div class="row">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link " aria-current="page" href="#home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="#lore">Lore</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="#roadmap">Roadmap</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="#mtt">Meet The Team</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="#faq">FAQ</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section className='Intro_header'>
                 {/* <img src='./images/logo-planet.png' className='Intro_planet' alt='' /> */}
                <img src='./images/logo-primary.png' className='Intro_logo' alt='' />
            </section>
        </div>
    )
}