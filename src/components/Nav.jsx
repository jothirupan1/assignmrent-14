import React from 'react'
import { Link } from 'react-router-dom';
function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">

        <div className="container">

          <a href="" className="navbar-brand fw-bold text-uppercase ">
            Legacy Mart
          </a>

          <div className="collapse navbar-collapse justify-content-end ">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="" className="nav-link fw-bold ms-2">HOME</a>
              </li>
              <li className="nav-item">
                <Link to="/New" className="nav-link fw-bold ms-2">PRODUCT</Link>
              </li>
              <li className="nav-item">
                <a href="#Contact" className="nav-link fw-bold ms-2">CONTACT</a>
              </li>
            </ul>
          </div>

        </div>
   
      </nav>
    </div>
  )
}

export default Nav
      