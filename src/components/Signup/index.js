import React, { Component } from 'react';
import './style.scss';
import FormInput from '../forms/Forminput';
import Button from '../forms/Button';
import FormWrapper from './../FormWrapper';

import {auth, handleUserProfile} from './../../firebase/utils'

const initialState = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
    error: []
}


class Signup extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             ...initialState
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const {name, value} = e.target;

        this.setState({
            [name]: value
        })
    }
    
    handleFormSubmit = async event => { //async function that takes event
        event.preventDefault(); //prevents from posting it on the same page and re-loading

        const {displayName, email, password, confirmPassword} = this.state;

        //check both passwords entered correct or not
        if(password !== confirmPassword){
            const err = ['Passwords dont match'];
            this.setState({
                error: err
            })

            return;
        }

        //if password matches then we'll add the data to our firebase db
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password)

            handleUserProfile(user, {displayName}) //look at the function definition. passing the userAuth and additional data

            //after this step - all the data gets registered in our firebase db
            //now we can go back to the initial stage

            this.setState({
                ...initialState
            })

        }catch(err){
            //console.log('err')
        }
    }

    render() {
        const {displayName, email, password, confirmPassword, error} = this.state;

        const config = {
            headline : 'SIGN UP'
        }

        return (
            <FormWrapper {...config}>

                {error.length > 0 && (
                    <ul>
                        {error.map((err, index) => {
                            return(
                                <li key= {index}>
                                    {err}
                                </li>
                            );
                        })}
                    </ul>
                )}

                <div className='formWrap'>
                    <form onSubmit = {this.handleFormSubmit}>
                        <FormInput
                            type='text' 
                            name='displayName'
                            value={displayName}
                            placeholder= "Full name" 
                            onChange = {this.handleChange}/>

                        <FormInput
                            type='email' 
                            name='email'
                            value={email}
                            placeholder= "Email" 
                            onChange = {this.handleChange}/>

                        <FormInput
                            type='password' 
                            name='password'
                            value={password}
                            placeholder= "Password" 
                            onChange = {this.handleChange}/>
                        
                        
                        <FormInput
                            type='password' 
                            name='confirmPassword'
                            value={confirmPassword}
                            placeholder= "Confirm Password" 
                            onChange = {this.handleChange}/>
                        
                        
                        
                        <Button type='submit'>
                            REGISTER
                        </Button>
                    </form>
                </div>
            </FormWrapper>
        )
    }
}

export default Signup
