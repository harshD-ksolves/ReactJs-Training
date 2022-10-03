import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
    
    return (
        <div>
            <nav className="navbar bg-dark p-2">
                <div className="container-fluid ">
                    <Link to="/" className="navbar-brand text-white">Home</Link>
                    <div className="d-flex p-3" role="search">
                        <Link to="/" className="text-white me-2">Harshvardhan</Link>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Navbar;