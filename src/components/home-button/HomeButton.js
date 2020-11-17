import React from 'react';
import snowman from '../../images/snowman.png';

const HomeButton = () => {
    return(
        <div className="home-button">
            <img src={snowman} className="home-button__image" alt="home button"/>
        </div>
    )
}

export default HomeButton;