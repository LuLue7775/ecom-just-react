import React from "react";

import FormInput from "../form-input/form-input-component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        
        this.setState({ [name]: value });
    } 

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if( password !== confirmPassword ) {
            alert("passwords don't match!");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email, 
                password
            );
            await createUserProfileDocument( user,  { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch(error) {
           console.error(error); 
        }

    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return(
        <div className="sign-up">
            <h2 className="title"> Have no account? </h2>
            <span> Sign up with your email and password. </span>
            <form className="sign-up-form" onSubmit={this.handleSubmit}>
                <FormInput
                    name='displayName'
                    type='text'
                    handleChange={this.handleChange}
                    value={displayName}
                    label='DisplayName'
                    required
                />
                <FormInput
                    name='email'
                    type='email'
                    handleChange={this.handleChange}
                    value={email}
                    label='Email'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    handleChange={this.handleChange}
                    value={password}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit' > SIGN UP </CustomButton>
            </form>
        </div>
        )
    }
};

export default SignUp;
