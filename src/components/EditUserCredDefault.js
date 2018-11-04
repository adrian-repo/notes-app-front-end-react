import React from 'react';

const EditUserCredDefault = ({editClick}) => {
    return (
        <div className="container-fluid">
          
        <div className="container">
            <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                                <div className="jumbotron paper text-center">
                                    <h5>Update Credentials</h5>
                                    <hr/>
                                    <p> Here you can update your <br/> name and password ... </p> 
                                    <p>Go further to ...</p>
                                    <hr/>
                                    <button className='btn btn-primary' onClick={editClick}>UPDATE</button>
                    </div>
                    <div className="col-lg-3"></div>
                    </div>       
                </div>       
        </div>
    </div>
    );
}

export default EditUserCredDefault;



