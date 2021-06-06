import React from 'react';
import './style.scss';
import logo from './../../assets/icon.png';
import {Link } from 'react-router-dom';
import {auth} from './../../firebase/utils'

const Header = props => {
    const {currentUser} = props;

    return (
        <header className= 'header'>
            <div className = 'wrap'>
                <div className = 'logo'>
                    <Link to="/">
                        <img src = {logo} alt = 'LOGO' />
                    </Link>
                </div>
                
                <div className='register'>
                    {currentUser && (
                        <ul>
                            <li>
                                <span onClick = {() => auth.signOut()}>
                                    LOGOUT
                                </span>
                            </li>
                        </ul>
                    )}

                    {!currentUser && (
                        <ul>
                            <li>
                                <Link to="/registration" >
                                    Register
                                </Link>
                            </li>
                            <li>
                                <Link to="/login" >
                                    Login
                                </Link>
                            </li>
                        </ul>
                    )}

                      
                </div>
            </div>
        </header>
    )
}

Header.defaultProps = {
    currentUser: null
};

export default Header