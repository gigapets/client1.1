import React from 'react';
import {Nav, NavLink } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignUp from './SignUp';

const LoginNavBar =() => {
    return (
        <div id = "nav">
            
                <NavLink to="/login" component={LoginPage}> Log In </NavLink>
                <NavLink to="/signup" component={SignUp}> Sign Up</NavLink>
        
        </div>
    );
}

export default LoginNavBar; 