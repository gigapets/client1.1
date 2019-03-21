import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './App.css';
import LoginView from './Components/Login/LoginView';
import authenticate from './Components/Login/Authentication';
import HomeView from './Components/TheRest/HomeView';


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <LoginView />

      </div>
    );
  }
}
export default App;
// const Authenticate = withRouter(authenticate(HomeView)(LoginView));

// export default withRouter(App);
