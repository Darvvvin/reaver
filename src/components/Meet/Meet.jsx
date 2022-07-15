import React from 'react'
import './Meet.css'

export default function Meet() {
    return (
        <section className='Meet_header' id='mtt'>
            <div className='container text-center my-5'>
                <h1>THE TEAM</h1>
                <p>By the all-powerful Progenitors. <br />
                    Six Seekers have been tasked to initiate The Havoc</p>
                <div className='row justify-content-center'>
                    <div className='col-3 my-3'>
                        <img src='/images/mtt-faust.png' className='img-fluid' alt='' />
                    </div>
                    <div className='col-3 my-3'>
                        <img src='/images/mtt-faust.png' className='img-fluid' alt='' />
                    </div>
                    <div className='col-3 my-3'>
                        <img src='/images/mtt-faust.png' className='img-fluid' alt='' />
                    </div>
                    <div className='col-3 my-3'>
                        <img src='/images/mtt-faust.png' className='img-fluid' alt='' />
                    </div>
                </div>

                {/* <div className='row justify-content-center'>
                    <div className='col-3 my-3'>
                        <img src='/images/mtt-faust.png' className='img-fluid' alt='' />
                    </div>
                    <div className='col-3 my-3'>
                        <img src='/images/mtt-faust.png' className='img-fluid' alt='' />
                    </div>
                    <div className='col-3 my-3'>
                        <img src='/images/mtt-faust.png' className='img-fluid' alt='' />
                    </div>
                </div> */}
            </div>
        </section>
    )
}
