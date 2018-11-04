import React, { Component } from 'react';
const axios = require('axios');

const initialState = {
                     title: null,
                     content: null }

class AddNote extends Component {

    state = initialState;

    titleInputHandler = (inputTitle) => {
            this.setState({...this.state, title : inputTitle.target.value});
    }

    contentInputHandler = (inputContent) => {
        this.setState({...this.state, content : inputContent.target.value});
    }

    cancelButtonHandler = (event) => {
        event.preventDefault();
        this.setState(initialState);
    }
    
    submitNoteHandler = (event) => {
        event.preventDefault();
        const credentials = {id: this.props.id,
                            title: this.state.title,
                            content: this.state.content}
        axios.post('https://ancient-reef-44914.herokuapp.com/addnotes', credentials)        
        .then((response)=> {
               if (response.status === 200) {
                    console.log('[ADD NOTE RESPONSE]: The note was successfully added !')
                    this.setState(initialState);    
                    this.props.history.push('/');
                }  else {
                       console.log('[ADD NOTE RESPONSE]: Some error occured !');
                        }
        })
        .catch((error)=> {                
                if (error.response) {
                    console.log('[ADD NOTE CATCH RESPONSE]: Some error occured !');
                } else if (error.request) {
                    console.log('[ADD NOTE CATCH REQUEST]: Some error occured !');
                } else {
                    console.log('[ADD NOTE CATCH]: Some error occured !');
                        }
                }               
       );
     
}

    render() {
        
        return (
            <div id="welcome" className="container">
                <div className="jumbotron text-center shadow">
                   
                <form>
                        <div className="form-group">
                            <label htmlFor="title">Title:</label>
                            <input type="text" className="form-control" id="title" onChange={this.titleInputHandler} placeholder='input some title'/>
                        </div>
                    
                        <div className="form-group">
                            <label htmlFor="content">Note content:</label>
                            <textarea className="form-control" id="content" rows="5" onChange={this.contentInputHandler} ></textarea>
                        </div>
                        <button className="btn btn-success" onClick={this.submitNoteHandler}>Add Note</button>
                        <button className="btn btn-danger" onClick={this.cancelButtonHandler}>Cancel</button>
                </form>
                   
                </div>
            </div>

        );
    }
    
}


export default AddNote;



