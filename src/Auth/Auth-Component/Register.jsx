import {React, Component} from 'react';
import FormInput from '../CustomInputs/FormInput';
import CustomButton from '../CustomInputs/CustomButton';

import { createUserProfileDocument, auth } from '../Firebase/firebase.utils';

import '../../scss/register.scss'

export default class Register extends Component{
    constructor(){
        super()
        this.state={
            displayName: "",
            email: '',
            password: "",
            confirmpassword: "",
        }
    }

    handleSubmit = async event =>{
        event.preventDefault()
        const {displayName, email, password, confirmpassword} =this.state;

    if (password !== confirmpassword){
      alert("Password Don't Match");
      return;
    }        
    try{
        const { user } = await auth.createUserWithEmailAndPassword(email, password)

      await  createUserProfileDocument(user, {displayName})
        this.setState({
            displayName: "",
            email: '',
            password: "",
            confirmpassword: "",
        })

    }catch(error){
        console.log(error);
    }
    }

    handleChange = event =>{
        const {name, value} = event.target

        this.setState({ [name] : value})
    }



    render(){
        const {displayName, email, password, confirmpassword} =this.state
        return(
            <div className="sign-up">
                <h2 className="title">Create New Account</h2>
                <span>Create account with your email and password</span>

            <form className="sign-up-form" onSubmit={this.handleSubmit}>
                <FormInput
                 type="text"
                 name="displayName"
                 value={displayName}
                 onChange={this.handleChange}
                 label="Name"
                 Required
                 autocomplete="off"
                 />
               

                <FormInput
                 type="email"
                 name="email"
                 value={email}
                 onChange={this.handleChange}
                 label="Email"
                 Required
                 autocomplete="off"
                 />
                

                <FormInput
                 type="password"
                 name="password"
                 value={password}
                 onChange={this.handleChange}
                 label="Password"
                 Required
                 />
                

                <FormInput
                 type="password"
                 name="confirmpassword"
                 value={confirmpassword}
                 onChange={this.handleChange}
                 label="Confirm Password"
                 Required
                 />
                <CustomButton type="submit">Sign Up</CustomButton>

            </form>

            </div>
        )
    }
}