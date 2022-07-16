import React from 'react'
import './Roadmap.css'

export default function Roadmap() {
    return (
        <section className='Roadmap_header' id='roadmap'>
            <div className='container text-center my-5'>
                <h1>ROADMAP</h1>
                <h2> <b><i>Book 1 — GENESIS</i></b> </h2>
                <div class="container">
                    <div class="row Roadmap-container">
                        <div class="col">
                            <h1><b style={{ fontSize: '0.6em' }}>Chapter 1</b> <hr />Birth of <br /> an Empire</h1>
                        </div>
                        <div class="col Roadmap-container-item">
                            <ul>
                                <li>✅ Build the Discord Server</li>
                                <li>✅ Create the Twitter account</li>
                                <li>✅ Dedicated Reaver Website</li>
                                <li>✅ Write lore</li>
                                <li>✅ Conceptualize NFT art</li>
                            </ul>
                        </div>

                        <div class="w-100 my-3"></div>

                        <div class="col Roadmap-container-item">
                            <ul>
                                <li>✅ Collaborate with Different <br /> NFT Projects and Groups Pre-Mint</li>
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
                        <div>
                            <small><b><i>~ End of Chapter 1 ~</i></b></small> 
                        </div>
                        <div class="w-100 my-3"></div>
                        <hr />
                        <h2> <b><i>Book 2 — EXODUS</i></b> </h2>
                        <div class="row Roadmap-container">
                            <div class="col">
                                <h1><b style={{ fontSize: '0.6em' }}>Chapter 1</b> <hr />Promethean Trials</h1>
                            </div>
                            <div class="col Roadmap-container-item">
                                <ul>
                                    <li>Reveal Utilities and Features of Promethean Reaver NFT</li>
                                    <ul>
                                        <li>✅  50% Royalties of Major Collections airdropped to Promethean Holder Wallets (ADA Airdrop)</li>
                                        <li>✅  Fully Animated High-res Pixel NFT Collection</li>
                                        <li>✅  Access to Holder's Community in Reaver Server</li>
                                        <li>✅  Special Class Role based on NFT on Wallet</li>
                                    </ul>
                                    <br />
                                    <li>Minting Details for Promethean Collection</li>
                                    <ul>
                                        <li>✅  Mint Price:  Burn three Reavers; one of each class to mint.</li>
                                        <li>Mint Date:  <b>TBA</b></li>
                                    </ul>
                                </ul>
                            </div>

                            <div class="w-100 my-3"></div>

                            <div className='Roadmap-fade row'>
                                <div class="col Roadmap-container-item">
                                    <ul>
                                        <li>More to come...</li>
                                    </ul>
                                </div>
                                <div class="col">
                                    <h1><b style={{ fontSize: '0.6em' }}>Chapter X</b> <hr />More to Come...</h1>
                                </div>
                            </div>

                        </div>
                        <div class="w-100 my-4"></div>
                        <hr />
                        <div class="w-100 my-4"></div>
                    </div>
                </div>

                <div className='card'>
                    <img src='./images/promethean_pub.png' alt='' style={{ width: '100%', border: '3px solid white', borderRadius: '25px' }} />
                </div>
            </div>
        </section>
    )
}
