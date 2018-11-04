import React, { Component } from 'react';
import { Route } from 'react-router-dom'
const axios = require('axios');


class SingleNoteEdit extends Component {

    state = {
        title: this.props.notedata.title,
        content: this.props.notedata.content }

    titleInputHandler = (inputTitle) => {
            this.setState({...this.state, title : inputTitle.target.value});
    }

    contentInputHandler = (inputContent) => {
        this.setState({...this.state, content : inputContent.target.value});
    }

    cancelButtonHandler = () => {  
        this.props.backclick();
    }
    
    submitNoteHandler = (event) => {
        event.preventDefault();
        const credentials = {
                            noteid: this.props.notedata.noteid,
                            usedid: this.props.notedata.usedid,
                            title: this.state.title,
                            content: this.state.content}
        axios.post('https://ancient-reef-44914.herokuapp.com/updatenote', credentials)        
        .then((response)=> {
               if (response.status === 200) {
                    this.cancelButtonHandler();
                }  else {
                       console.log('[RESPONSE UPDATE NOTE]:', 'some error');
                        }
        })
        .catch((error)=> {
                if (error.response) {
                    console.log('[CATCH ERROR RESPONSE UPDATE NOTE]:', 'some error');
                } else if (error.request) {
                    console.log('[CATCH ERROR REQUEST UPDATE NOTE]:', 'some error');
                } else {
                    console.log('[CATCH ERROR UPDATE NOTE]:', 'some error');
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
                            <label htmlFor="title">New Title ... </label>
                            <input type="text" className="form-control" id="title" onChange={this.titleInputHandler} value={this.state.title}/>
                        </div>
                    
                        <div className="form-group">
                            <label htmlFor="content">New content ... </label>
                            <textarea className="form-control" id="content" rows="5" onChange={this.contentInputHandler} value={this.state.content}></textarea>
                        </div>
                        <button className="btn btn-success" onClick={this.submitNoteHandler}>Submit Change</button>
                        <button className="btn btn-danger" onClick={this.cancelButtonHandler}>Cancel</button>
                </form>
                   
                </div>
            </div>

        );
    }
    
}


export default SingleNoteEdit;



