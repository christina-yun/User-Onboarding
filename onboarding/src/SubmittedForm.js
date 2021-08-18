import React from 'react';

function SubmittedForm(props){
    const { details } = props;

    return(
        <div className='form-container'>
            <h3>Name: {details.name}</h3>
            <h4>Email: {details.email}</h4>
            <h4>Password: {details.password}</h4>
        </div>
    )
}

export default SubmittedForm;