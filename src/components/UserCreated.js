import React from 'react';

const UserCreated = ({okClick}) => {
    return (
        <div className="container-fluid">
          
        <div className="container">
            <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                                <div className="jumbotron paper text-center">
                                    <h5>Congratulations !</h5>
                                    <hr/>
                                    <h6>You succefully created your accound !</h6>
                                    <p> It's time to log in ... </p>                                                                     
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


export default UserCreated;



