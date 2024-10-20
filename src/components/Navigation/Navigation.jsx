import React from 'react';
import { Link } from 'react-router-dom';
import "./Navigation.css";

const Navigation = () => {
    return (
        <div className='navigation-wrap'>
            <div className="logo-section">
                <Link to="/">
                    <h2 className="logo">Book App</h2>
                </Link>

            </div>
            <ul className="navigation-list">
                <li className="navigation-item">
                    <Link className='navigation-link' to="/">Home</Link>
                </li>
                <li className="navigation-item">
                    <Link className='navigation-link' to="/reading-list">My List</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navigation