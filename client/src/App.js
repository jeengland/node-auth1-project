import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

function App() {
  const [cookies] = useCookies('sesh');
  // useEffect(() => {
  //   axios
  //     .post('http://localhost:5000/api/login', { username: 'jeengland', password: 'password'})
  //     .then((response) => console.log(response))
  //     .then((response) => console.log(cookies))
  //     .catch((error) => console.error(error))
  // }, [])
  return (
    <div className="App">
      <div className='register'>
        <RegisterForm />
      </div>
      <div className='login'>
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
