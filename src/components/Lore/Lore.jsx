import React from 'react'
import './Lore.css'

export default function Lore() {
  return (
    <div>
      <section className='Lore_header' id='lore'>
        <div className='container text-center'>
          <h4>YOUR JOURNEY BEGINS HERE</h4>
          <h1>CHOOSE YOUR DESTINY</h1>
          <div className='row justify-content-center'>
            <div className='col-3 my-3'>
              <img src='/images/logo-vanguard.png' className='img-fluid' alt='' />
            </div>
            <div className='col-3 my-3 Lore_spectre'>
              <img src='/images/logo-spectre.png' className='img-fluid' alt='' />
            </div>
            <div className='col-3 my-3'>
              <img src='/images/logo-marauder.png' className='img-fluid' alt='' />
            </div>
          </div>
          <p>
            The Reaver Empire is the first quality high-res pixel, and art-&-community-based NFT project on the Cardano blockchain. <br />
            Join us as we commence the creation of a new generation of augmented soldiers <br /> ready to conquer the Cardano Ecosystem, one NFT project at a time.
          </p>
        </div>
      </section>
      <section className='Lore_classes'>
        <div className='container text-center'>
          <div className='row justify-content-center'>
            <div className='col-lg-4 mb-4'>
              <img src='/images/vanguard-2222.png' className='img-fluid' alt='' />
            </div>
            <div className='col-lg-4 mb-4'>
              <img src='/images/spectres-2222.png' className='img-fluid' alt='' />
            </div>
            <div className='col-lg-4 mb-4'>
              <img src='/images/marauder-2222.png' className='img-fluid' alt='' />
            </div>
          </div>

          <div className='row justify-content-center'>
            <div className='col-lg-2 my-3'>
              <img src='/images/previews/vanguard-1.png' className='img-fluid' alt='' />
            </div>
            <div className='col-lg-2 my-3'>
              <img src='/images/previews/vanguard-2.png' className='img-fluid' alt='' />
            </div>
            <div className='col-lg-2 my-3'>
              <img src='/images/previews/vanguard-3.png' className='img-fluid' alt='' />
            </div>
            <div className='col-lg-2 my-3'>
              <img src='/images/previews/vanguard-4.png' className='img-fluid' alt='' />
            </div>
            <div className='col-lg-2 my-3'>
              <img src='/images/previews/vanguard-5.png' className='img-fluid' alt='' />
            </div>
          </div>
          <div className='row'>
            <p className='Lore_description vanguard_desc py-5'>
              <h1>Vanguard</h1>
              <h4>Strength. Discipline. Honor.</h4>
              Vanguards are a class of Reavers specializing in heavy armor and weaponry,
              and overpowers any opposition with their sheer firepower.
              They are a walking artillery with a profound sense of military discipline.
              An unmovable object and unstoppable force all in one.
            </p>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-2 my-3'>
              <img src='/images/previews/spectre-1.png' className='img-fluid' alt='' />
            </div>
            <div className='col-lg-2 my-3'>
              <img src='/images/previews/spectre-2.png' className='img-fluid' alt='' />
            </div>
            <div className='col-lg-2 my-3'>
              <img src='/images/previews/spectre-3.png' className='img-fluid' alt='' />
            </div>
            <div className='col-lg-2 my-3'>
              <img src='/images/previews/spectre-4.png' className='img-fluid' alt='' />
            </div>
            <div className='col-lg-2 my-3'>
              <img src='/images/previews/spectre-5.png' className='img-fluid' alt='' />
            </div>
          </div>

          <div className='row'>
            <p className='Lore_description spectre_desc py-5'>
              <h1>Spectre</h1>
              <h5>Stealth. Cunning. Precision.</h5>
              Spectres are the intelligence units of the Reaver Empire.
              Secretive and sophisticated, their knowledge of espionage is only equaled by their combat prowess.
              A silent force to be reckoned with.
            </p>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-2 my-3'>
              <img src='/images/previews/marauder-1.png' className='img-fluid' alt='' />
            </div>
            <div className='col-lg-2 my-3'>
              <img src='/images/previews/marauder-2.png' className='img-fluid' alt='' />
            </div>
            <div className='col-lg-2 my-3'>
              <img src='/images/previews/marauder-3.png' className='img-fluid' alt='' />
            </div>
            <div className='col-lg-2 my-3'>
              <img src='/images/previews/marauder-4.png' className='img-fluid' alt='' />
            </div>
            <div className='col-lg-2 my-3'>
              <img src='/images/previews/marauder-5.png' className='img-fluid' alt='' />
            </div>
          </div>
          <div className='row'>
            <p className='Lore_description marauder_desc py-5'>
              <h1>Marauder</h1>
              <h5>FUCK. SHIT. UP.</h5>
              The Marauders are the shock troopers of the Empire with an unsurpassed thirst to pillage and conquer.
              Whenever there is external conflict, the Marauders are present, and often times the perpetrators.
              Death-defying lunatics, as their reputation would infamously name them.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
