import React from 'react';
import DisplayNote from './DisplayNote';


const NoteList = ({list , action}) => {

    const deleteButtonHandler = (noteid) => {
        action({
                listItemId: noteid,
                action: 'delete'
        });
    }

    const editButtonHandler = (noteid) => {
        action({
                listItemId: noteid,
                action: 'edit'
        });
    }
    
    const readButtonHandler = (noteid) => {
        action({
                listItemId: noteid,
                action: 'read'
        });
    }

    
    return (
        <div id="displaynotes" className="text-center">
            {list.map(item => <DisplayNote 
                                    key={item.noteid} 
                                    title={item.title} 
                                    content={item.content} 
                                    date={item.creationdate} 
                                    deleteButton={() => deleteButtonHandler(item.noteid)} 
                                    editButton={() => editButtonHandler(item.noteid)}
                                    readButton={() => readButtonHandler(item.noteid)}
                                    />)}
        </div>        
    );
}

export default NoteList;