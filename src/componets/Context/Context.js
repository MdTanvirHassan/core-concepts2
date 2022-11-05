import React from 'react';

const Context = (props) => {
    return (
        <div>
            <div className="text">
                
                
                <div className="container">
                        <h1>{props.heading}</h1>
                        <textarea name="form-control" id="myBox" cols="150" rows="10"></textarea>
                        <button className='btn btn-primary'>Convert to UpperCase</button>
                </div>

            </div>
        </div>
    );
};

export default Context;