import React, { useState } from 'react';

//displays the form
import Form from './Form';
//displays the submitted results from Form
import SubmittedForm from './SubmittedForm';
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

  const [user, setUser] = useState(initialUserList);

  const [disabled, setDisabled] = useState(initialDisabled);

  


  return (
    <div className="App">
      <Form 
      values={formValues} 
      disabled={disabled}
      errors={formErrors}
      />
    </div>
  );
}

export default App;