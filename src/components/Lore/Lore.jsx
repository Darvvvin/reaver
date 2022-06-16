import React from 'react'
import './Lore.css'

export default function Lore() {
  return (
    <div>
      <section className='Lore_header'>
        <div className='container text-center'>
          <h4>YOUR JOURNEY BEGINS HERE</h4>
          <h1>CHOOSE YOUR DESTINY</h1>
          <div className='row justify-content-center'>
            <div className='col-3 my-3'>
              <img src='/images/logo-marauder.png' className='img-fluid' alt='' />
            </div>
            <div className='col-3 my-3 Lore_spectre'>
              <img src='/images/logo-spectre.png' className='img-fluid' alt='' />
            </div>
            <div className='col-3 my-3'>
              <img src='/images/logo-vanguard.png' className='img-fluid' alt='' />
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </section>
      <section className='Lore_classes'>
        <div className='container text-center'>
          <div className='row justify-content-center'>
            <div className='col-lg-4 my-2'>
              <img src='/images/marauder-2222.png' className='img-fluid' alt='' />
            </div>
            <div className='col-lg-4 my-2'>
              <img src='/images/spectres-2222.png' className='img-fluid' alt='' />
            </div>
            <div className='col-lg-4 my-2'>
              <img src='/images/vanguard-2222.png' className='img-fluid' alt='' />
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
            <p className='Lore_description marauder_desc py-5'>
              <h1>Marauder</h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
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
            <p className='Lore_description spectre_desc py-5'>
              <h1>Spectre</h1>

              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
