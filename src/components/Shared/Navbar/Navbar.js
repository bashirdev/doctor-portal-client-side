import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto ">
            <li className="nav-item active">
              <Link className="nav-link mr-5" to=''>Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mr-5" to='/patient/appointments'>Patient</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mr-5" to='/dashboard'>Deshboard</Link>
            </li><li className="nav-item">
              <Link className="nav-link mr-5 text-white" to='/deshboard'>Admin</Link>
            </li><li className="nav-item">
              <Link className="nav-link mr-5 text-white" to=''>Blog</Link>
            </li><li className="nav-item">
              <Link className="nav-link mr-5 text-white" to=''>Contact Us</Link>
            </li>
         </ul>
         
        </div>
      </nav>
    );
};

export default Navbar;