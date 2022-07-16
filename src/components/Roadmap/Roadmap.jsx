import React from 'react'
import './Roadmap.css'

export default function Roadmap() {
    return (
        <section className='Roadmap_header' id='roadmap'>
            <div className='container text-center my-5'>
                <h1>THE ROADMAP</h1>
                <div class="container">
                    <div class="row Roadmap-container">
                        <div class="col">
                            <h1><b style={{ fontSize: '0.6em' }}>Chapter 1</b> <hr />Birth of <br /> an Empire</h1>
                        </div>
                        <div class="col Roadmap-container-item">
                            <ul>
                                <li>Build the Discord Server</li>
                                <li>Create the Twitter account</li>
                                <li>Dedicated Reaver Website</li>
                                <li>Write lore</li>
                                <li>Conceptualize NFT art</li>
                            </ul>
                        </div>

                        <div class="w-100 my-3"></div>

                        <div class="col Roadmap-container-item">
                            <ul>
                                <li>Collaborate with Different <br /> NFT Projects and Groups Pre-Mint</li>
                                <li>Produce 3333 Reaver NFTs, 1111 of each Class</li>
                                <li>Pre-mint AMA or Interviews</li>
                                <li>Engage with the Community</li>
                            </ul>
                        </div>
                        <div class="col">
                            <h1><b style={{ fontSize: '0.6em' }}>Chapter 2</b> <hr /> The Expansion</h1>
                        </div>

                        <div class="w-100 my-3"></div>

                        <div class="col ">
                            <h1><b style={{ fontSize: '0.6em' }}>Chapter 3</b> <hr />The Conquest</h1>
                        </div>
                        <div class="col Roadmap-container-item">
                            <ul>
                                <li>Finalize minting parameters</li>
                                <li>Sell out 3333 Reaver NFTs</li>
                                <li>Implement Genesis Collection</li>
                                <ul>
                                    <li>Access to Holder's Community</li>
                                    <li>Custom Reaver NFT Giveaway</li>
                                </ul>
                                <li>Develop a Strong Holder Community</li>
                            </ul>
                        </div>
                        <hr/>
                        <div class="w-100 my-3"></div>
                    </div>
                </div>
                {/* <div className='Roadmap-container'>
                    <div className='Roadmap-container-grid'>
                        <div className='Roadmap-container-item text-center'>
                            <h1><b style={{ fontSize: '0.6em' }}>Chapter 1</b> <hr />Birth of <br /> an Empire</h1>
                        </div>
                        <div className='Roadmap-container-item'>
                            <ul>
                                <li>Build the Discord Server</li>
                                <li>Create the Twitter account</li>
                                <li>Dedicated Reaver Website</li>
                                <li>Write lore</li>
                                <li>Conceptualize NFT art</li>
                            </ul>
                        </div>
                    </div>

                    <div className='Roadmap-container-grid'>
                        <div className='Roadmap-container-item'>
                            <ul>
                                <li>Collaborate with Different <br /> NFT Projects and Groups Pre-Mint</li>
                                <li>Produce 3333 Reaver NFTs, 1111 of each Class</li>
                                <li>Pre-mint AMA or Interviews</li>
                                <li>Engage with the Community</li>
                            </ul>
                        </div>
                        <div className='Roadmap-container-item text-center'>
                            <h1><b style={{ fontSize: '0.6em' }}>Chapter 2</b> <hr /> The Expansion</h1>
                        </div>
                    </div>

                    <div className='Roadmap-container-grid'>
                        <div className='Roadmap-container-item text-center'>
                            <h1><b style={{ fontSize: '0.6em' }}>Chapter 3</b> <hr />The Conquest</h1>
                        </div>
                        <div className='Roadmap-container-item'>
                            <ul>
                                <li>Finalize minting parameters</li>
                                <li>Sell out 3333 Reaver NFTs</li>
                                <li>Implement Genesis Collection</li>
                                <ul>
                                    <li>Access to Holder's Community</li>
                                    <li>Custom Reaver NFT Giveaway</li>
                                </ul>
                                <li>Develop a Strong Holder Community</li>
                            </ul>
                        </div>
                    </div>
                </div> */}
                <div className='card'>
                    <img src='./images/promethean_pub.png' alt='' style={{ width: '100%', border: '3px solid white', borderRadius: '25px' }} />
                </div>
            </div>
        </section>
    )
}
