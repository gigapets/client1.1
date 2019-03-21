import React from 'react';
import { Link } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignUp from './SignUp';

const LoginNavBar = (props) => {
    return (
        <div>
            <Nav>
                <Link to="/login" component={LoginPage}> Log In </Link>
                <Link to="/signup" component={SignUp}>Sign Up</Link>
            </Nav>
        </div>
    );
}

export default LoginNavBar;