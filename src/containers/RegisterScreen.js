import React, { Component } from 'react';

const initialState = {
    name: '',
    email: '',
    password: '',
    secondPassword: ''
};

class RegisterScreen extends Component {


state = initialState;

nameHandler = (event) => {
    let newState = {...this.state, name : event.target.value };
    this.setState(newState); 
}

emailHandler = (event) => {
    let newState = {...this.state, email : event.target.value };
    this.setState(newState); 
}

passwordHandler = (event) => {
    let newState = {...this.state, password : event.target.value };
    this.setState(newState);   
}

secondPasswordHandler = (event) => {
    let newState = {...this.state, secondPassword : event.target.value };
    this.setState(newState);   
}

submitHandler = (event) => {
    if (this.state.password !== this.state.secondPassword) {
        alert('Passwords do not match !');
    } else {
        this.props.registerNewUser({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        });
    }
}

render () {
    return (
                <div className="container-fluid">
          
                    <div className="container">
                        <div className="row">
                                <div className="col-lg-3"></div>
                                <div className="col-lg-6">
                                            <div className="jumbotron paper text-center">
                                                <h5>Great ! </h5>
                                                <p>... you're just a few clicks away</p>
                                                <hr/>
                                                <form onSubmit={this.submitHandler}>
                                                    <div className="form-group">
                                                    <label>
                                                        Please enter your name:
                                                        <input type="text" className="form-control" onChange={this.nameHandler} required placeholder="Your Name" />
                                                    </label>
                                                    </div>
                                                    <div className="form-group">
                                                    <label>
                                                        Email address:
                                                        <input type="email" className="form-control" onChange={this.emailHandler} required placeholder="Enter email" />
                                                    </label>
                                                    </div>
                                                    <div className="form-group">
                                                    <label>
                                                        Choose Password:
                                                        <input type="password" className="form-control" onChange={this.passwordHandler} minLength="8" required placeholder="min 8 charactes" />
                                                    </label>
                                                    </div>
                                                    <div className="form-group">
                                                    <label>
                                                        Password check,<br/> please enter again:
                                                        <input type="password" className="form-control" onChange={this.secondPasswordHandler} minLength="8" required placeholder="Re-type your password" />
                                                    </label>
                                                    </div>
                                                    <input className="btn btn-warning" type="submit" value="Register" />
                                                    <button className="btn btn-danger" onClick={this.props.cancel}>Cancel</button>
                                                </form>
                                </div>
                                <div className="col-lg-3"></div>
                                </div>       
                            </div>       
                    </div>
                </div>
            );
    }
}

export default RegisterScreen;