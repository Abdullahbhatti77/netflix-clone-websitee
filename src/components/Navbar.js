import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>

      {/* <Header /> */}
      <nav class="navbar navbar-expand-sm bg-dark">

        <div class="container">
          <NavLink class="navbar-brand" to='/'>
            <img src="/images/n.png" alt="" width="100" height="50" class="d-inline-block align-text-top" />
          </NavLink>
          <button class="navbar-toggler btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon btn-primary"></span>
          </button>

          {/* Links  */}
          <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

              <li class="nav-item">
                <NavLink to='/'><a class="nav-link"><span style={{color:'white'}}>Home</span></a></NavLink>
              </li>

              <li class="nav-item">
                <NavLink to='/Action'><a class="nav-link"><span style={{color:'white'}}>Action</span></a></NavLink>
              </li>

              <li class="nav-item">
                <NavLink to='/Adventure'><a class="nav-link"><span style={{color:'white'}}>Adventure</span></a></NavLink>
              </li>

              <li class="nav-item">
                <NavLink to='/Comedy'><a class="nav-link"><span style={{color:'white'}}>Comedy</span></a></NavLink>
              </li>

              <li class="nav-item">
                <NavLink to='/Mystery'><a class="nav-link"><span style={{color:'white'}}>Mystery</span></a></NavLink>
              </li>

            </ul>
          </div>
        </div>

      </nav>
    </div>
  )
}
