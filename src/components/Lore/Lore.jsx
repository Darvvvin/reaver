import React from 'react'
import './Lore.css'

export default function Lore() {
  return (
    <div>
      <section className='Lore_header'>
        <h4>YOUR JOURNEY BEGINS HERE</h4>
        <h1>CHOOSE YOUR DESTINY</h1>
        <div className='d-flex'>
          <img src='/images/logo-marauder.png' className='Lore_logos' alt='' />
          <img src='/images/logo-spectre.png' className='Lore_logos Lore_spectre' alt='' />
          <img src='/images/logo-vanguard.png' className='Lore_logos' alt='' />
        </div>
        <p className='container text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
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

          <div className='row justify-content-center my-4'>
            <div className='col-lg-2'>
              <img src='/images/previews/vanguard-1.png' className='img-fluid' alt='' />
            </div>
            <div className='col-lg-2'>
              <img src='/images/previews/vanguard-2.png' className='img-fluid' alt='' />
            </div>
            <div className='col-lg-2'>
              <img src='/images/previews/vanguard-3.png' className='img-fluid' alt='' />
            </div>
            <div className='col-lg-2'>
              <img src='/images/previews/vanguard-4.png' className='img-fluid' alt='' />
            </div>
            <div className='col-lg-2'>
              <img src='/images/previews/vanguard-5.png' className='img-fluid' alt='' />
            </div>
          </div>
          <div className='row'>
            <h1>Marauder</h1>
            <p className='Lore_description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>

          <div className='row justify-content-center my-4'>
            <div className='col-lg-2'>
              <img src='/images/previews/vanguard-1.png' className='img-fluid' alt='' />
            </div>
            <div className='col-lg-2'>
              <img src='/images/previews/vanguard-2.png' className='img-fluid' alt='' />
            </div>
            <div className='col-lg-2'>
              <img src='/images/previews/vanguard-3.png' className='img-fluid' alt='' />
            </div>
            <div className='col-lg-2'>
              <img src='/images/previews/vanguard-4.png' className='img-fluid' alt='' />
            </div>
            <div className='col-lg-2'>
              <img src='/images/previews/vanguard-5.png' className='img-fluid' alt='' />
            </div>
          </div>
          <div className='row'>
            <h1>Spectre</h1>
            <p className='Lore_description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>

          <div className='row justify-content-center my-4'>
            <div className='col-lg-2'>
              <img src='/images/previews/vanguard-1.png' className='img-fluid' alt='' />
            </div>
            <div className='col-lg-2'>
              <img src='/images/previews/vanguard-2.png' className='img-fluid' alt='' />
            </div>
            <div className='col-lg-2'>
              <img src='/images/previews/vanguard-3.png' className='img-fluid' alt='' />
            </div>
            <div className='col-lg-2'>
              <img src='/images/previews/vanguard-4.png' className='img-fluid' alt='' />
            </div>
            <div className='col-lg-2'>
              <img src='/images/previews/vanguard-5.png' className='img-fluid' alt='' />
            </div>
          </div>
          <div className='row'>
            <h1>Vanguard</h1>
            <p className='Lore_description'>
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
