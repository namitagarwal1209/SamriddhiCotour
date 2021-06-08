import React, {Component} from 'react';
import './style.scss';
import FormWrapper from './../FormWrapper';
import Button from './../forms/Button';
import FormInput from './../forms/Forminput';
import { auth } from '../../firebase/utils';

import {withRouter} from 'react-router-dom'; //will help to access of the history of the previous pages

const initialState={
    email:'',
    error: []
}

class EmailPassword extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             ...initialState
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }
    
    handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const {email , error} = this.state

            const config = { //after password is reset - we want to redirect to this page
                url: 'http://localhost:3000/login'
            };

            //this function asks for 2 params - emailid and the site to redirect to
            await auth.sendPasswordResetEmail(email, config)
                .then(() => {
                   this.props.history.push('./login') // we could do this because we had 'withRouter'
                
                })
                .catch(() => {
                    const err = ['Email id not found']
                    this.setState({
                        error: err
                    })
                })

        } catch(e){
            //console.log(e);
        }
    }
    

    render() {

        const {email, error} = this.state

        const config = {
            headline : 'Reset Password'
        }

        return (
            <div className='formWrap'>
                <form onSubmit = {this.handleSubmit}>
                    <FormWrapper {...config}> 

                        {error.length>0 && (
                            <ul>
                                {error.map((e, index) => {
                                    return(
                                        <li key = {index}>
                                            {e}
                                        </li>
                                    );
                                })}
                            </ul>
                        )}

                        <FormInput
                            type='email'
                            name='email'
                            value = {email}
                            placeholder = 'Enter email'
                            handleChange = {this.handleChange}
                        />

                        <Button type='submit'>
                            Reset Password
                        </Button>
                    </FormWrapper> 
                    
                </form>
            </div>
            
        )
    }
}

export default withRouter(EmailPassword)