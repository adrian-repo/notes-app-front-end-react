import React, { Component } from 'react';


class EditUserCredentials extends Component {

    state = {
            name: this.props.name,            
            password: '',
            secondPassword: ''
            };


            nameHandler = (event) => {
                let newState = {...this.state, name : event.target.value };
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
                event.preventDefault();
                if (this.state.password !== this.state.secondPassword) {
                    alert('Passwords do not match !');
                } else {
                    this.props.updateUser({
                        name: this.state.name,                        
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
                                                            <h3>Dear {this.state.name}, </h3>
                                                            <p>... please type your new credentials</p>
                                                            <hr/>
                                                            <form onSubmit={this.submitHandler}>
                                                                <div className="form-group">
                                                                <label>
                                                                    Name:
                                                                    <input type="text" className="form-control" onChange={this.nameHandler} required placeholder="Your Name" />
                                                                </label>
                                                                </div>
                                                                <div className="form-group">
                                                                <label>
                                                                    Password:
                                                                    <input type="password" className="form-control" onChange={this.passwordHandler} minLength="8" required placeholder="min 8 charactes" />
                                                                </label>
                                                                </div>
                                                                <div className="form-group">
                                                                <label>
                                                                    Password check:
                                                                    <input type="password" className="form-control" onChange={this.secondPasswordHandler} minLength="8" required placeholder="Re-type psw." />
                                                                </label>
                                                                </div>
                                                                <input className="btn btn-warning" type="submit" value="Update" />
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


export default EditUserCredentials;