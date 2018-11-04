import React, { Component } from 'react';

const initialState = {
    email: '',
    password: ''
};

class signIn extends Component {

state = initialState;

emailHandler = (event) => {
    let newState = {...this.state, email : event.target.value };
    this.setState(newState); 
}

passwordHandler = (event) => {
    let newState = {...this.state, password : event.target.value };
    this.setState(newState);   
}

submitHandler = (event) => {
    event.preventDefault();    
    this.props.login(this.state);
}

registerhandler = (event) => {
    event.preventDefault();
    this.props.register();
}

render () {
    return (
                <div className="container-fluid">
          
                    <div className="container">
                        <div className="row">
                                <div className="col-lg-3"></div>
                                <div className="col-lg-6">
                                            <div className="jumbotron paper text-center">
                                                <h5>Please Sign In</h5>
                                                <hr/>
                                                <form onSubmit={this.submitHandler}>
                                                    <div className="form-group">
                                                    <label>
                                                        Email address:
                                                        <input type="email" className="form-control" onChange={this.emailHandler} placeholder="Enter email" />
                                                    </label>
                                                    </div>
                                                    <div className="form-group">
                                                    <label>
                                                        Password:
                                                        <input type="password" className="form-control" onChange={this.passwordHandler} placeholder="password" />
                                                    </label>
                                                    </div>
                                                    <input className="btn btn-primary" type="submit" value="Sign In" />
                                                    <hr />
                                                    <p>New User? <br/> Please Register</p>
                                                    <button className="btn btn-warning" onClick={this.registerhandler}>Register</button>
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

export default signIn