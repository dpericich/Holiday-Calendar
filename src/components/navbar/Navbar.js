import React from 'react';
import HomeButton from '../home-button/HomeButton';

const Navbar = () => {
    return (
        <div className="navbar">
            <h1 className="navbar__title">2020 Holiday Calendar</h1>
            <HomeButton />
        </div>
    )
}

export default Navbar;