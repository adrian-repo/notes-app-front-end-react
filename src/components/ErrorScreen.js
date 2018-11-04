import React from 'react';

const ErrorScreen = ({okClick}) => {
    return (
        <div className="container-fluid">
          
        <div className="container">
            <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                                <div className="jumbotron paper text-center">
                                    <h5>Ups ! Something went wrong ...</h5>
                                    <hr/>
                                    <p>Please try again later  ... </p> 
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

export default ErrorScreen;



