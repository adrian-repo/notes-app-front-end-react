import React from 'react';


const SingleNoteDisplay = ({notedata, backclick}) => {

    return (
        <div className="jumbotron paper">
            <div className="singlenote">   
                <h5>{notedata.title}</h5>
                <hr className="notebar"/>
                <p>{notedata.content}</p>
                <hr className="notebar"/>
                <button className="btn btn-primary" onClick={backclick}>Back to List</button>
            </div>
        </div>
    );
}

export default SingleNoteDisplay