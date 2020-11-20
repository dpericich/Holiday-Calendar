import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return(
        <div className="footer" data-test="footer">
            <Link to="/about" className="footer__link">About</Link>
            <p className="footer__copyright">&copy; Daniel Pericich Educational Products 2020</p>
            <Link to="/qanda" className="footer__link">Q&A</Link>
        </div>
    )
};

export default Footer;