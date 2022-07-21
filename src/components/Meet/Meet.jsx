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
                        <li>Crypto and NFT enthusiast with a background in Software Development. Oversees project operations and handles
                            external relations. DM him for business inquiries.</li>
                    </div>
                    <div className='col-lg-3 my-3'>
                        <img src='/images/mtt-cel.png' className='img-fluid' alt='' />
                        <li>Justin fix your copywriting</li>
                    </div>
                    <div className='col-lg-3 my-3'>
                        <img src='/images/mtt-int.png' className='img-fluid' alt='' />
                        <li>Game developer and designer, Web developer, 3D artist.</li>
                    </div>
                    <div className='col-lg-3 my-3'>
                        <img src='/images/mtt-zoisk.png' className='img-fluid' alt='' />
                        <i class="fa-brands fa-instagram"></i> <b><a href='https://www.instagram.com/zoisk_art/' target='_blank' rel='noreferrer'>Instagram @zoisk_art</a></b>
                        <li>Professional pixel artist and art lead with a background of Game Arts and Design.</li>
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
