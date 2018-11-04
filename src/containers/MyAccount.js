import React, { Component } from 'react';
import EditUserCredentials from './EditUserCredentials';
import EditUserCredDefault from '../components/EditUserCredDefault';
const axios = require('axios');


class MyAccount extends Component {

    state = {
        userId: this.props.id,
        userName: this.props.name,
        userEmail: this.props.email,
        screen : 'default',
    }

    cancelButtonHandler = () => {
        this.setState({...this.state,  screen : 'default'  });
    }

    editButtonHandler = () => {
        this.setState({...this.state,  screen : 'edit'  });
    }

    updateUserData = (newdata) => {
        const credentials = {
            userId: this.state.userId,
            userName: newdata.name,
            userEmail: this.state.userEmail,
            userPassword: newdata.password
    }        
        axios.post('https://ancient-reef-44914.herokuapp.com/updateuser', credentials)        
        .then((response)=> {
               if (response.status === 200) {
                    this.props.relogin();
                }  else { console.log('[UPDATE USER RESPONSE]: some error'); }
        })
        .catch((error)=> {
                if (error.response) {
                    console.log('[UPDATE USER CATCH]: some error');
                } else if (error.request) {
                    console.log('[UPDATE USER CATCH REQUEST]: some error');
                } else {
                    console.log('[UPDATE USER CATCH]: some error');
                        }
                }               
       );

    }

        render () {
                return (
                    <div>                        
                        {this.state.screen === 'edit' ? 
                                            <EditUserCredentials c
                                                ancel={this.cancelButtonHandler} 
                                                name={this.state.userName} 
                                                updateUser={this.updateUserData}  /> 
                                            : 
                                            <EditUserCredDefault editClick={this.editButtonHandler} />}
                    </div>
                );
        }
}


export default MyAccount;




