import React from 'react';
import logo from '../assets/img/logo.png'
import {
  Link
} from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <Link to="/">
                    <img src={logo} alt="My Logo" className="logo"/>           
                </Link>
            </div>
        );
    }
}

export default Header;