import React from 'react';
import './style.scss';
import logo from './../../assets/icon.png'

const Header = props => {
    return (
        <header className= 'header'>
            <div className = 'wrap'>
                <div className = 'logo'>
                    <img src = {logo} alt = 'LOGO' />
                </div>
            </div>
        </header>
    )
}

export default Header