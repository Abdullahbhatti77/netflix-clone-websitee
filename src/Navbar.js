import React from 'react'
import Header from './Header'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>

    <Header />
        <nav class="navbar navbar-expand-sm bg-light">

            <div class="container-fluid">

            {/* Links  */}

            <ul class="navbar-nav">

                <li class="nav-item">
                <NavLink to='/'><a class="nav-link" href="#">Home</a></NavLink>
                </li>

                <li class="nav-item">
                <NavLink to='/Action'><a class="nav-link" href="#">Action</a></NavLink>
                </li>

                <li class="nav-item">
                <NavLink to='/Adventure'><a class="nav-link" href="#">Adventure</a></NavLink>
                </li>

                <li class="nav-item">
                <NavLink to='/Comedy'><a class="nav-link" href="#">Comedy</a></NavLink>
                </li>

                <li class="nav-item">
                <NavLink to='/Mystery'><a class="nav-link" href="#">Mystery</a></NavLink>
                </li>

            </ul>
            </div>

</nav>
    </div>
  )
}
