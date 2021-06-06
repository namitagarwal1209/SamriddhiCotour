import React, { Component } from 'react';
import './style.scss';
import Button from '../forms/Button';
import {signInWithGoogle, auth} from './../../firebase/utils'
import FormInput from '../forms/Forminput';


const initialState = {
    email:'',
    password:''
}

class Signin extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             ...initialState
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit = async e => {
        e.preventDefault();

        const {email, password} = this.state
        try{
            auth.signInWithEmailAndPassword(email,password)
            
        }catch(err){
            //console.log(err)
        }
        
    }

    handleChange(e){
        const {name, value} = e.target;
        this.setState({
            [name]:value
        })
     }

    

    render(){
        const {email, password} = this.state
        return (
            <div className='signin'>
                <div className='wrap'>
                    <h3>LOGIN</h3>
    
                    <div className="formWrap">
                        <form onSubmit = {this.handleSubmit}>

                            <FormInput 
                                type='email'
                                name='email'
                                value={email}
                                placeholder = 'Enter email'
                                handleChange = {this.handleChange}/>

                            <FormInput 
                                type='password'
                                name='password'
                                value={password}
                                placeholder = 'Enter password'
                                handleChange={this.handleChange} />

                            <Button type='submit'>
                                LOGIN
                            </Button>   

                            <div className="socialSign">
                                <div className='row'>
                                    <Button onClick =  {signInWithGoogle}>
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
