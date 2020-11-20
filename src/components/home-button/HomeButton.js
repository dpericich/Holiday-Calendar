import React from 'react';
import snowman from '../../images/snowman.png';
import {Link} from 'react-router-dom';

const HomeButton = () => {
    return(
        <Link to="/">
            <div className="home-button">
                <img className="home-button__image" data-test="icon" src={snowman} alt="home button"/>
            </div>
        </Link>
    )
}

export default HomeButton;