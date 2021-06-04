import React from 'react';
import './style.scss';
import logo from './../../assets/icon.png';
import {Link } from 'react-router-dom';

const Header = props => {
    return (
        <header className= 'header'>
            <div className = 'wrap'>
                <div className = 'logo'>
                    <Link to="/">
                        <img src = {logo} alt = 'LOGO' />
                    </Link>
                </div>
                
                <div className='register'>
                    <ul>
                        <li>
                            <Link to="/registration" >
                                Register
                            </Link>
                        </li>
                    </ul>  
                </div>
            </div>
        </header>
    )
}

export default Header