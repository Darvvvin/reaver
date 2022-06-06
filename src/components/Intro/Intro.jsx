import React from 'react'
import './Intro.css';

export default function Intro() {
    return (
        <div>
            <nav class="shadow navbar navbar-expand-lg navbar-dark justify-content-center">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section className='Intro_header'>
                <img src='./images/logo-planet.png' className='Intro_planet' alt='' />
                <img src='./images/logo-primary.png' className='Intro_logo' alt='' />
            </section>
        </div>
    )
}