import React, { Component } from 'react';
import NotesList from '../components/NotesList';
import SingleNoteDisplay from '../components/SingleNoteDisplay';
import SingleNoteEdit from './SingleNoteEdit';
const axios = require('axios');

const initialState = {notes: null,
                      screen: 'list',
                      singlenote: null}

class UserLoggedIn extends Component {

    state = initialState;

    componentDidMount() {
        this.getDataFeedHandler({id: this.props.id});
    }

    getDataFeedHandler = (credentials) => {
        axios.post('https://ancient-reef-44914.herokuapp.com/notes', credentials)        
        .then((response)=> {
               if (response.status === 200) {
                    this.setState({...this.state, notes: response.data})                   
                }  else { console.log('[GET NOTES LIST RESPONSE]: some error'); }
        })
        .catch((error)=> {
                if (error.response) {
                    console.log('[GET NOTES LIST CATCH]: some error');
                } else if (error.request) {
                    console.log('[GET NOTES LIST CATCH REQUEST]: some error');
                } else {
                    console.log('[GET NOTES LIST CATCH]: some error');;
                        }
                }               
       );

    }
    
    deleteDataHandler = (credentials) => {
                axios.post('https://ancient-reef-44914.herokuapp.com/deletenotes', credentials)        
                                     .then((response)=> {
                                            if (response.status === 200) {
                                                 console.log('[DELETE NOTE]: successful');
                                                 this.getDataFeedHandler({id: this.props.id});}
                                                 else {console.log('[DELETE NOTE]: some error occured');}
                                     })
                                     .catch((error)=> {                                                
                                                if (error.response) {
                                                    console.log('[DELETE NOTE CATCH RESPONSE]: some error occured');
                                                } else if (error.request) {
                                                    console.log('[DELETE NOTE CATCH REQUEST]: some error occured');
                                                } else {
                                                    console.log('[DELETE NOTE CATCH]: some error occured'); }
                                            }               
                                    );

    }
   
    readDataHandler = (credentials) => {

        axios.post('https://ancient-reef-44914.herokuapp.com/readnote', credentials)        
        .then((response)=> {
               if (response.status === 200) {
                    this.setState({...this.state, screen : 'single', singlenote: response.data});
                    console.log('[READ NOTE]: successful');
                }  else { console.log('[READ NOTE]: some error occured'); }
        })
        .catch((error)=> {
                if (error.response) {
                    console.log('[READ NOTE CATCH RESPONSE]: some error occured');
                } else if (error.request) {
                    console.log('[READ NOTE CATCH REQUEST]: some error occured');
                } else {
                    console.log('[READ NOTE CATCH]: some error occured');
                        }
                }               
       );

    }

    editDataHandler = (credentials) => {
        axios.post('https://ancient-reef-44914.herokuapp.com/readnote', credentials)        
        .then((response)=> {
               if (response.status === 200) {
                    this.setState({...this.state, screen : 'edit', singlenote: response.data});
                    console.log('[EDIT NOTE]: successful');
                }  else { console.log('[EDIT NOTE]: some error occured'); }
        })
        .catch((error)=> {
                if (error.response) {
                    console.log('[EDIT NOTE CATCH RESPONSE]: some error occured');
                } else if (error.request) {
                    console.log('[EDIT NOTE CATCH REQUEST]: some error occured');
                } else {
                    console.log('[EDIT NOTE CATCH]: some error occured');
                        }
                }               
       );
    }
    
    actionHandler = (actionEvent) => {
                const credentials = {id: this.props.id,
                                     noteid : actionEvent.listItemId}
                switch (actionEvent.action) {
                    case 'delete':                                                     
                        this.deleteDataHandler(credentials);
                        break;
                    case 'edit':
                        this.editDataHandler(credentials);
                        break;
                    default:
                        this.readDataHandler(credentials);
                    }
    }

    backClickHandler = () => {
            this.setState({...this.state, screen: 'list', singlenote: null});
            this.getDataFeedHandler({id: this.props.id});
    }
  
    render() {
        return (
            <div id="welcome" className="container">
                <div className="jumbotron text-center">
                    <h3>Hi {this.props.name}</h3>
                </div>
                <div>
                   { this.state.notes && this.state.screen === 'list' ? <NotesList list={this.state.notes} action={this.actionHandler} /> : null}
                   { this.state.singlenote && this.state.screen === 'single' ? <SingleNoteDisplay notedata={this.state.singlenote[0]} backclick={this.backClickHandler}  /> : null }
                   { this.state.singlenote && this.state.screen === 'edit' ? <SingleNoteEdit notedata={this.state.singlenote[0]} backclick={this.backClickHandler}  /> : null }
                </div>
            </div>

        );
    }
    
}

export default UserLoggedIn;