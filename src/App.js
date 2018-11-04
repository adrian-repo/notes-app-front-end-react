import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import NavBar from './components/NavBar';
import EmptyNavBar from './components/EmptyNavBar';
import WelcomeScreen from './containers/welcomeScreen';
import UserLoggedIn from './containers/UserLoggedIn';
import SingOut from './components/SignOut';
import AddNote from './containers/AddNote';
import MyAccount from './containers/MyAccount';
import './App.css';

const initialState = {
    loggedIn: false,
}

class App extends Component {
    state = initialState;
  
  loginUserHandler = ({userEmail, userId, userName}) => {
      this.setState({...this.state, 
                    loggedIn: true,
                    userId: userId,
                    email: userEmail,
                    name: userName});     
  }

  confirmSignOutHandler = () => {
      this.setState(initialState);      
  }

  render() {

    return (
            <Router>
                <div className="container-fluid">
                { this.state.loggedIn ? 
                              <div>
                                <NavBar />
                                <Route exact path="/login" render={() => <Redirect to="/"/>}/>
                                <Route 
                                 path="/" exact
                                 render={(props) => <UserLoggedIn {...props} name={this.state.name} id={this.state.userId} />} 
                                 /> 
                                <Route 
                                 path="/addnote" 
                                 render={(props) => <AddNote {...props} id={this.state.userId} />} 
                                 /> 
                                  <Route 
                                 path="/myaccount" 
                                 render={(props) => <MyAccount {...props} id={this.state.userId} email={this.state.email} name={this.state.name} relogin={this.confirmSignOutHandler} />} 
                                 />                                 
                                <Route 
                                 path="/signout" 
                                 render={(props) => <SingOut {...props} okClick={this.confirmSignOutHandler} />}                    
                                 /> 
                              </div> :
                              <div>
                                    <Route exact path="/signout" render={() => <Redirect to="/login"/>}/>
                                    <Route exact path="/myaccount" render={() => <Redirect to="/login"/>}/>
                                    <Route exact path="/" render={() => !this.state.loggedIn ? <Redirect to="/login"/> : null }/>
                                    <EmptyNavBar />
                                    <Route 
                                    path="/login" 
                                    render={(props) => <WelcomeScreen {...props} userData={this.loginUserHandler} />}                    
                                    /> 
                             </div>            
                 }      
         
                </div>
          </Router>
    );
  }
}

export default App;
