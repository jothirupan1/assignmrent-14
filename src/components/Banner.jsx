import React from 'react'
import { Link } from 'react-router-dom'
import './Banner.css'

function Banner() {
  return (
     
<section id="hero" className='hero-section text-white d-flex justify-content-center align-item-center mt-5 '>
           
     <div className="container  mt-5">
     <div className="container  mt-5">
      <h1 className=" fw-bold mt-5 pt-5 fs-1 ">Welcome to the Legacy</h1>
      <h3  className=" fw-bold mt-3  pt-3 fs-2">what you want?, we got all here</h3>
      <h2 className="fs-2 mt-3">what are you waiting for let's shop</h2>
      <div className="bo ms-5 ">
        <Link to ="/New" className="btn btn-outline-danger mt-5 ms-5 fs-1">Shop now</Link>
        </div>
     </div>
     </div>

    </section>
  )
}

export default Banner