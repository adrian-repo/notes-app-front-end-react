import React, { Component} from 'react';
import SignIn from './SignIn';
import UserCreated from '../components/UserCreated';
import UserExists from '../components/UserExists';
import ErrorScreen from '../components/ErrorScreen';
import FailedToLogIn from '../components/FailedToLogIn';
import RegisterScreen from './RegisterScreen';
const axios = require('axios');

const intialState = {
    screen: "logIn"   
}

class WelcomeScreen extends Component {

state = intialState;

goToLogInScreen = (event) => {
        this.setState({...this.state, screen:'logIn'});
}

goToErrorScreen = () => {
        this.setState({...this.state, screen:'errorScreen'});
}

goToRegisterScreen = () => {
        this.setState({...this.state, screen:'register'});
}

checkCredentials = (credentials) => {
        axios.post('https://ancient-reef-44914.herokuapp.com/signin', credentials)
        .then((response)=> {
               if (response.status === 200) {
                       this.props.userData({userId: response.data.userid,
                                           userEmail: credentials.email,
                                           userName: response.data.name});                       
                }  else {
                        this.setState({...this.state, screen:'errorScreen'});
                        }
        })
        .catch((error)=> {
                console.log(error);
                if (error.response) {
                        this.setState({...this.state, screen:'loginFailed'});
                } else if (error.request) {
                        this.setState({...this.state, screen:'errorScreen'});
                } else {
                        this.setState({...this.state, screen:'errorScreen'});
                        }
                }               
       );
     
}

registerUserToDb = (newUserCredentials) => {
        axios.post('https://ancient-reef-44914.herokuapp.com/register', newUserCredentials)
        .then((response)=> {
               if (response.status === 200) {
                       this.setState({...this.state, screen:'userCreated'});
               } else {
                       this.setState({...this.state, screen:'errorScreen'});
               }
        })
        .catch((error)=> {
                console.log(error);
                if (error.response) {
                        this.setState({...this.state, screen:'userExists'});
                } else if (error.request) {
                        this.setState({...this.state, screen:'errorScreen'});
                } else {
                        this.setState({...this.state, screen:'errorScreen'});
                        }
                }               
       );
 
}


render () {
    return (
        <div>
                {this.state.screen === 'logIn' ? <SignIn login={this.checkCredentials} register={this.goToRegisterScreen} /> : null }
                {this.state.screen === 'register' ? <RegisterScreen registerNewUser={this.registerUserToDb} cancel={this.goToLogInScreen} /> :  null }
                {this.state.screen === 'userCreated' ? <UserCreated okClick={this.goToLogInScreen} /> :  null}
                {this.state.screen === 'userExists' ? <UserExists okClick={this.goToLogInScreen} /> :  null}
                {this.state.screen === 'errorScreen' ? <ErrorScreen okClick={this.goToLogInScreen} /> :  null}
                {this.state.screen === 'loginFailed' ? <FailedToLogIn okClick={this.goToLogInScreen} /> :  null}
        </div>
    );
}
}

export default WelcomeScreen;