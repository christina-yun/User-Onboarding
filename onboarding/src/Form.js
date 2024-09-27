import React from 'react';

function Form(props){
    //passing all the props needed
    const { values, disabled, errors, submit, change } = props;
    
    //onSubmit function that takes in submit from its parent
    const onSubmit = event =>{
    //stops the page from reloading
        event.preventDefault();
    //invokes what happens at submittal
        submit(change);
    }

    const onChange = event => {
        //destructuring the event.target values available to match or change
        const { type, name, value, checked } = event.target;
        //calling out specifically that 'checkbox' utilizes something other than 'value'
        const valueToUse = type === 'checkbox' ? checked : value;
    //a function needs to execute to update the state from just inputs to actual state
        change(name, valueToUse);
    }
    
    return (
        <div>
            <h3>Create Account</h3>
            <form className='form-container' onSubmit={onSubmit}>
                
                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.tos}</div>
                </div>

                <div className='form-inputs'>
                    <label> Name: 
                        <input 
                            type='text'
                            name='name'
                            value={values.name}
                            onChange={onChange}
                        />
                    </label>
                    
                    <label> Email
                        <input 
                        type='email'
                        name='email'
                        value={values.email}
                        onChange={onChange}
                        />
                    </label>

                    <label>Password
                        <input 
                        type='password'
                        name='password'
                        value={values.password}
                        onChange={onChange}
                        />
                    </label>

                    <label>Terms of Service
                        <input 
                        type='checkbox'
                        name='tos'
                        checked={values.tos}
                        onChange={onChange}
                        />
                    </label>

                    <button disabled={disabled}>Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Form;