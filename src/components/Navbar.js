import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>

      {/* <Header /> */}
      <nav className="navbar navbar-expand-sm bg-dark">

        <div className="container">
          <NavLink className="navbar-brand" to='/'>
            <img src="/images/n.png" alt="" width="100" height="50" className="d-inline-block align-text-top" />
          </NavLink>
          <button className="navbar-toggler btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon btn-primary"></span>
          </button>

          {/* Links  */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <NavLink to='/'><a className="nav-link"><span style={{color:'white'}}>Home</span></a></NavLink>
              </li>

              <li className="nav-item">
                <NavLink to='/Action'><a className="nav-link"><span style={{color:'white'}}>Action</span></a></NavLink>
              </li>

              <li className="nav-item">
                <NavLink to='/Adventure'><a className="nav-link"><span style={{color:'white'}}>Adventure</span></a></NavLink>
              </li>

              <li className="nav-item">
                <NavLink to='/Comedy'><a className="nav-link"><span style={{color:'white'}}>Comedy</span></a></NavLink>
              </li>

              <li className="nav-item">
                <NavLink to='/Mystery'><a className="nav-link"><span style={{color:'white'}}>Mystery</span></a></NavLink>
              </li>

            </ul>
          </div>
        </div>

      </nav>
    </div>
  )
}
