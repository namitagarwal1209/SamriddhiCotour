import React, { Component } from 'react';
import './style.scss';
import Button from '../forms/Button';
//import {signInWithGoogle} from './../../firebase/utils'

class Signin extends Component {

    handleSubmit = async e => {
        e.preventDefault();
    }

    render(){
        return (
            <div className='signin'>
                <div className='wrap'>
                    <h3>LOGIN</h3>
    
                    <div className="formWrap">
                        <form onSubmit = {this.handleSubmit}>
                            <div className="socialSign">
                                <div className='row'>
                                    <Button >
                                        Sign In with Google
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Signin;
