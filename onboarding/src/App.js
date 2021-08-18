import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';

//displays the form
import Form from './Form';
//displays the submitted results from Form
import SubmittedForm from './SubmittedForm';
//validation piece
import formSchema from './formSchema';

import './App.css';

//Making these starting states globally accessible
const initialFormValues = {
  name:'',
  email: '',
  password: '',
  tos: false
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  tos: ''
}

const initialUserList = [];

const initialDisabled = true;


function App() {
  //set up states for: form values, form errors (when users do things wrong/don't follow directions), pushing/displaying newly-created users into the initialUserList array, disabling the submit button
  const [formValues, setFormValues] = useState(initialFormValues);

  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const [users, setUsers] = useState(initialUserList);

  const [disabled, setDisabled] = useState(initialDisabled);

  const getUsers = () =>{
    //need to retrieve list of users each time this is invoked
    axios.get('https://reqres.in/api/users')
    .then(res => {
      setUsers(res.data.data)
    })
    .catch(err => console.error(err))
    
  }
  const postNewUser = newUser => {
    //before we can submit, we need to know where the submittal is getting posted -- the API in this case that will create an object with the responses, and then clear the form
    axios.post('https://reqres.in/api/users', newUser)
    .then(response => {
      console.log('i am response', response.data)
      setUsers([response.data, ...users])
    })
    .catch(err => {
      console.error(err);
    })
    setFormValues(initialFormValues);
  }

  const validated = (name, value) => {
    //need a way to run all the values through the schema
    //note: reach takes 2 inputs. Name is used to know WHICH things to validate per value
    yup.reach(formSchema, name).validate(value)
    .then(() => setFormErrors({...formErrors, [name]: '' })) 
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
  //need something that will pick up the inputs and update them after they're validated through schema
  validated(name, value);
  setFormValues({
    ...formValues, [name]: value
  })
  }
  
  //Calling getUsers to set the initial information and make it available
  useEffect(() => {
    getUsers();
  },[])

    //this is to tell the submit button when it is no longer disabled
  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  },[formValues])

  function formSubmit(){
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password:formValues.password.trim(),
      tos: formValues.tos
    }
    //invoke the request to send information to the API
    postNewUser(newUser);
  }

  return (
    <div className="App">
      <Form 
      values={formValues} 
      disabled={disabled}
      errors={formErrors}
      submit={formSubmit}
      change={inputChange}
      />
      {users.map(user => {
        return(
        <SubmittedForm key={user.id} details={user}/>
        )
      })
    }
    
    </div>
  );
}

export default App;