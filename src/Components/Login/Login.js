import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    return (
        <div className="text-center login">
            <h2 className="or-border m-auto mb-5">Login </h2>
            <input className="login-forms" type="email" name="Email" id=""  placeholder="Email"/>
            <br />
            <input  className="login-forms" type="password" name="Password" id="" placeholder="Password"/>
            <p className="mt-3">You haven't an account ? <Link to="/signup">Create a account</Link></p> 
            <input  type="submit" value="Login" />
            <br />
            <p className='or-border m-auto mt-4 mb-3'>Or</p>
            <button className="button-social"><FcGoogle/></button>
        </div>
    );
};

export default Login;
