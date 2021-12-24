import {React, Component} from 'react';

import FormInput from '../CustomInputs/FormInput';
import CustomButton from '../CustomInputs/CustomButton';

import '../../scss/UserLogin.scss';
import {auth, signInWithGoogle} from '../Firebase/firebase.utils';

export default class Login extends Component{
    constructor(props){
        super()
        this.state={
            email: "",
            password: "",
        }
    }

    handleSubmit = async event=>{
        event.preventDefault();

        const {email, password} = this.state

        try{
            await auth.signInWithEmailAndPassword(email, password)

            this.setState({ email: "", password: "",})
        } catch(error){
            console.log(error)
        }


        this.setState({
            email: "",
            password: "",
        })
    }
    handleChange=(e)=>{
        const {name, value} = e.target
        this.setState({ [name]: value})
    }
    render(){
        return(
            <div className="sign-in">
                <h2 className="title">Already Having An Account</h2>
                <span>Login with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                   
                        
                        <FormInput 
                          type="email" 
                          required 
                          value={this.state.email} 
                          name="email" 
                          handleChange={ this.handleChange}
                          label="email"
                          autocomplete="off"
                          />
                          
                    
                        <FormInput 
                           type="password" 
                           required 
                           value={this.state.password} 
                           name="password" 
                           handleChange={ this.handleChange}
                           label="password"
                           />
                           
                    <div className="buttons">
                        <CustomButton type="submit"> Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In with Google </CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}