import React from 'react';
import axios from 'axios';

const Authenticate = App => Login => class extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            username: '',
            password: '',
            loggedIn: false
        })
    }
    componentDidMount(){
            
        if(localStorage.getItem('token')){
            const token = JSON.parse(localStorage.getItem('token'));
            
            axios.post(`https://gigapets.herokuapp.com/login`, { token: token.token })
                .then(res => {
                
                console.log(token, res.data);
                res.data ? this.setState({ loggedIn: true }) : localStorage.clear();
            }).catch(error => console.log("CDM ERROR",error));
        }
    }

    handleChanges = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    signIn = event => {
        event.preventDefault();

        return axios
            .post(`https://gigapets.herokuapp.com/login`,{
                username: this.state.username,
                password: this.state.password
            })

            .then(res => {
                console.log("response: ", res.data);
                
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("username", res.data.username);
                console.log("resData", res.data);
                this.setState({
                    loggedIn: true
                });
                
                   
                this.props.history.push('/');
            })
            .catch(err => alert("SignInCatchErr:",err));
        }

        render(){
            if(this.state.loggedIn){
                return <App 
                loggedIn = {this.state.loggedIn}
                />
            } else {
                return <Login 
                handleChanges = {this.handleChanges}
                signIn = {this.signIn}
                username = {this.state.username}
                password = {this.state.password}
                />
            }
        }
    }


export default Authenticate;

    
