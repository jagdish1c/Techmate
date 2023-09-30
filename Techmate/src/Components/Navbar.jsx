import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (

        <div className='container-fluid nav-bg '>
            <div className='row'>
                <div className='col-10 mx-auto '>
                    <nav className="navbar navbar-expand-lg navbar-light bg-tr">
                        <div className="container-fluid ">
                            <Link className="navbar-brand" to="/"><h1 className='logo'> Techmate</h1>
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className='navv'>
                                <div className="collapse  navbar-collapse " id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                        </li>
                                        
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/services">Services</Link>
                                        </li>
                                        
                                        
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/about">About</Link>
                                        </li>
                                        
                                        
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/contact">Contact</Link>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}
