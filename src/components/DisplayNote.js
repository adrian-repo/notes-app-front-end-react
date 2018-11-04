import React from 'react';

const DisplayNote = ({title, content, date, deleteButton, editButton, readButton}) => {

    const CreationDate = ({date}) => {

        if(date) {
                const convertUTCDateToLocalDate = (date) => {
                var newDate = new Date(date);
                newDate.setMinutes(date.getMinutes() - date.getTimezoneOffset());
                return newDate; }
                const newTimeDate = convertUTCDateToLocalDate(new Date(date));         
                const stringDate = newTimeDate.toString().substring(0,16);
           
                return (
                    <div>
                        <h6>Note created {stringDate} </h6>
                        <hr/>
                    </div> 
                );            
            
            } else {
            return (
                <div>
                <h6>Note created date not available ... </h6>
                <hr/>
            </div> 
            );
            }
    }


return (
            <div className="row border border-danger shadow grow">
                <div className="col-md-6">
                    <div className="jumbotron paper noteelement" onClick={readButton}>
                        <h6>{title}</h6>
                        <p>{content.substring(0,50)}</p>
                    </div>
                </div>
                <div className="col-md-6 buttonsgroup">
                    {date ? <CreationDate date={date} /> : null}
                    <button className="btn btn-success" onClick={readButton}>READ</button>
                    <button className="btn btn-info" onClick={editButton}>EDIT</button>
                    <button className="btn btn-danger" onClick={deleteButton} >DELETE</button>
                </div>
            
            </div>
);
}

export default DisplayNote;



                  