import React from 'react';
import axios from 'axios';

class SignUp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email:''
        }
    }
    
    handleChange = event => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
    }
  
    signUp = event => {
        event.preventDefault();
        axios
            .post(`https://gigapets.herokuapp.com/registration`, {
                username: this.state.username,
                password: this.state.password,
             
            })
            .then(response => {
                console.log(response)
                alert("Welcome to GigaPets")
            })
            .catch(err => console.log(err));
        
        
        this.setState({
            username: '',
            password: '',
          
        })
    }
    render() {
        return (
            <div>
                <h1>Create An Account</h1>
                <form>
                    <input
                        placeholder="username"
                        type="text"
                        value={this.state.username}
                        name="username"
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder="Password"
                        type="text"
                        value={this.state.password}
                        name="password"
                        onChange={this.handleChange}
                    />
               
                    <button onClick={this.signUp}> Create Account </button>
                </form>
            </div>
        );
    }
}

export default SignUp;