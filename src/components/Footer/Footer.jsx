import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <section className='Footer_header pb-5'>
            <img src='./images/splitter.png' className='w-100' />
            <div>
                <a href='https://discord.gg/xygKycSf' target='_blank' rel="noreferrer"><i class="fa-brands fa-discord fa-3x"></i></a>
                <span className='mx-4' />
                <a href='https://twitter.com/ReaverEmpireNFT' target='_blank' rel="noreferrer"><i class="fa-brands fa-twitter fa-3x"></i></a>
            </div> <br />
            <h1>Join the Empire.</h1>
        </section>
    )
}
