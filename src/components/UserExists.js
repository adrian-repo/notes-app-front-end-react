import React from 'react';

const UserExists = ({okClick}) => {
    return (
        <div className="container-fluid">
          
        <div className="container">
            <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                                <div className="jumbotron paper text-center">
                                    <h5>Ups ! User already exists ...</h5>
                                    <hr/>
                                    <h6>Do you need to recover you password?</h6>
                                    <p> Follow the instructions below ... </p> 
                                    <hr/>
                                    <button className='btn btn-primary' onClick={okClick}>OK</button>
                    </div>
                    <div className="col-lg-3"></div>
                    </div>       
                </div>       
        </div>
    </div>
    );
}


export default UserExists;



