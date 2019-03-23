import React from 'react';
import { withRouter } from 'react-router-dom';

import './App.css';
import LoginView from './Components/Login/LoginView';
import Authenticate from './Components/Login/Authentication';
// import GigaPetList from './Components/TheRest/GigaPetList';
import Handler from './Components/Posts/Handler';
import GigaPetList from './Components/TheRest/GigaPetList';


class App extends React.Component{
  componentDidMount() {
    console.log(window.location.pathname);
    console.log(localStorage);

    if (!localStorage.getItem("token") && window.location.pathname !== "/signup")
      this.props.history.push('/login');
     
  }
  render() {
    
    return (
      <div className="App">
        <Auth />
      </div>
    );
  }
}
 const Auth = withRouter(Authenticate(GigaPetList)(LoginView));

export default withRouter(App);
