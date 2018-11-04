import React from 'react';

const FailedToLogIn = ({okClick}) => {
    return (
        <div className="container-fluid">
          
        <div className="container">
            <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                                <div className="jumbotron paper text-center">
                                    <h5>Ups ! Your log-in failed ...</h5>
                                    <hr/>
                                    <p>Please type the right email and password  ... </p> 
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

export default FailedToLogIn;



