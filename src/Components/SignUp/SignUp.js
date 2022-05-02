import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import './SignUp.css'
const SignUp = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    return (
        <div>
            <div className="text-center login">
            <h2 className="or-border m-auto mb-5"> Sign Up </h2>
            <input className="login-forms" type="email" name="Email" id=""  placeholder="Email"/>
            <br />
            <input  className="login-forms" type="password" name="Password" id="" placeholder="Password"/>
            <p className="mt-3">You haven an account ? <Link to="/login">Login </Link></p> 
            <input onClick={() => createUserWithEmailAndPassword(email, password)} type="submit" value="Sign Up" />
            <br />
            <p className='or-border m-auto mt-4 mb-3'>Or</p>
            <button className="button-social"><FcGoogle/></button>
            </div>
        </div>
    );
};

export default SignUp;