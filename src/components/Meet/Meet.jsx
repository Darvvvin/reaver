import React from 'react'
import './Meet.css'

export default function Meet() {
    return (
        <section className='Meet_header' id='mtt'>
            <div className='container my-5'>
                <h1 className='text-center'>THE TEAM</h1>
                <p className='text-center'>The Chosen Reavers.<br />
                    Tasked to lead the Reaver Empire into the stars and beyond.</p>
                <div className='row justify-content-center'>
                    <div className='col-lg-3 my-3'>
                        <img src='/images/mtt-faust.png' className='img-fluid' alt='' />
                        <li>Oversees project operations and handles external relations. </li>
                        <li>DM for professional inquiries. </li>
                        <li>Background in Software Development.</li>
                    </div>
                    <div className='col-lg-3 my-3'>
                        <img src='/images/mtt-cel.png' className='img-fluid' alt='' />
                        <li>Technical and Financial Lead of the Empire</li>
                        <li>CNFT/SOL enthusiast</li>
                        <li>Experienced in developing and using Solana Programs.</li>
                    </div>
                    <div className='col-lg-3 my-3'>
                        <img src='/images/mtt-int.png' className='img-fluid' alt='' />
                        <li>Marketing and Creatives head of the Reaver Empire. </li>
                        <li>Game developer and designer </li>
                        <li>Web developer and 3D artist. </li>
                    </div>
                    <div className='col-lg-3 my-3'>
                        <img src='/images/mtt-zoisk.png' className='img-fluid' alt='' />
                        <i class="fa-brands fa-instagram"></i> <b><a href='https://www.instagram.com/zoisk_art/' target='_blank' rel='noreferrer'>Instagram @zoisk_art</a></b>
                        <li>Lead artist of the Reaver Empire.</li>
                        <li>Professional pixel artist at a game studio. </li>
                        <li>Background in Game Arts and Design.</li>
                    </div>
                </div>

                <hr /> <br />

                <h4 className='text-center'>🎉 The Reaver Team is <b>100% Doxxed</b> by JPG Store's <b>
                    <a href='https://jpgstore.notion.site/jpgstore/JPG-Store-Launchpad-f51bcae9793647d38b0f5757726dc782' target='_blank' rel='noreferrer'>Cohort Program!</a> 🎉
                </b>
                </h4>
            </div>
        </section>
    )
}
