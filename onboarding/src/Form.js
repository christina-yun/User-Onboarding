import React from 'react';

function Form(props){
    //passing all the props needed
    const { values, disabled, errors } = props;
    
    //onSubmit function that takes in submit from its parent
    const onSubmit = event =>{
    //stops the page from reloading
        event.preventDefault();
    //invokes what happens at submittal
        
    }

    const onChange = event => {
        console.log(event.target.value)
    }
    
    return (
        <div>
            <h3>Create Account</h3>
            <form className='form-container' onSubmit={onSubmit}>
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