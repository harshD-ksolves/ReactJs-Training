import React from 'react'
import { Link, useLocation } from "react-router-dom";



const LangFilter = ({ language, handleChange }) => {

    return (
        <li>
            <input className="form-check-input m-1" type="checkbox" value={language} id="flexCheckDefault" onChange={() => handleChange(language)} />
            <label className="form-check-label" htmlFor="flexCheckDefault">
                {language}
            </label>
        </li>
    );
}




const Navbar = (props) => {

    const location = useLocation();
    const path = location.pathname;

    return (
        <div>
            <nav className="navbar bg-dark p-2">
                <div className="container-fluid ">
                    <Link to="/" className="navbar-brand text-white">Home</Link>
                    <div className="d-flex p-3" role="search">
                        {path == "/" &&
                            <div className="dropdown me-4">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                    Select Book Language
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    {
                                        props.langs.map((lang) => <LangFilter language={lang} handleChange={props.onChange} key={lang} />)
                                    }
                                </ul>
                            </div>
                        }
                        <Link to="/add" className="btn btn-secondary me-2">Add New Book</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;