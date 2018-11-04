import React from 'react';

const SignOut = ({okClick}) => {
    return (
        <div className="container-fluid">
          
        <div className="container">
            <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                                <div className="jumbotron paper text-center">
                                    <h5>You're about to Log Out ...<br/>
                                     Are you sure ?</h5>
                                    <hr/>
                                    <button className='btn btn-primary' onClick={okClick}>Confim</button>
                    </div>
                    <div className="col-lg-3"></div>
                    </div>       
                </div>       
        </div>
    </div>
    );
}

export default SignOut;



