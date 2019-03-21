import React from 'react';
import { withRouter } from 'react-router-dom';

import './App.css';
import LoginView from './Components/Login/LoginView';
import authenticate from './Components/Login/Authentication';
import GigaPetList from './Components/TheRest/GigaPetList';


class App extends React.Component{
  componentDidMount() {
    console.log(window.location.pathname);
    console.log(localStorage);

    if (!localStorage.getItem("token") && window.location.pathname !== "/signup")
      this.props.history.push('./login');
  }
  render() {
    return (
      <div className="App">
       
        <Auth />
      </div>
    );
  }
}
 const Auth = withRouter(authenticate(GigaPetList)(LoginView));

export default withRouter(App);
