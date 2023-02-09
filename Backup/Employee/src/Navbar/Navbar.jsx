import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <a className="navbar-brand" href="/">Clothing Mart</a>
        <div className="ml-auto">
            <ul className="navbar-nav">
                <li className="nav-list"><a className="nav-link" href="/home">Home</a></li>
                <li className="nav-list"><a className="nav-link" href="/about">About Us</a></li>
                <li className="nav-list"><a className="nav-link" href="/contact">Contact Us</a></li>
                <li className="nav-list"><a className="nav-link" href="/services">Services</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar