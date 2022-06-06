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
        <div className='d-flex justify-content-center my-5'>
          <div className='mx-4'>
            <img src='/images/logo-marauder.png' width='150px' alt='' />
          </div>
          <div>
            <h1>Marauder</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>

        <div className='d-flex justify-content-center my-5'>
          <div className='mx-4'>
            <img src='/images/logo-spectre.png' width='150px' alt='' />
          </div>
          <div>
            <h1>Spectre</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>

        <div className='d-flex justify-content-center my-5'>
          <div className='mx-4'>
            <img src='/images/logo-vanguard.png' width='150px' alt='' />
          </div>
          <div>
            <h1>Vanguard</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
