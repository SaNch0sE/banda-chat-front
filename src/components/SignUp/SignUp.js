import React, { useState } from 'react';
import Cloud from '../../img/Cloud.png';
import Eye from './eyeIcon';
import constants from '../../constants/constants';

export default function SignUp({ onButtonClick }) {
  let [count, setCount] = useState('password');
  let [item, setItem] = useState(true);
  let login = React.createRef();
  let password = React.createRef();
  let email = React.createRef();

  const change = () => {
    if (item) {
      setCount('text');
      setItem(!item);
    } else {
      setItem(!item);
      setCount('password');
    }
  };

  const ButCall = () => {
    const axios = require('axios');
    axios
      .post(`${constants.SERVER}auth/sign-up`, {
        login: login.current.value,
        // email: email.current.value,
        password: password.current.value,
      })
      .then((res) => {
        if (res.status === 200) {
          alert('Success');
          onButtonClick();
        }
      })
      .catch(function (err) {
        if (err.response.status === 401 || err.response.status === 422) {
          alert(err.response.data.error,  err.response.data.details);   
        } else if (err.response.status === 500) {
          alert('Упс, сервер временно недоступен, попробуйте позже')
        }
      })
  };

  return (
    <div className='SignUp'>
      <div className='Sign-up-header'>
        <img alt='' src={Cloud}></img>
      </div>
      <div className='Sign-up'>
        <div className='pointer'>
          <a
            href=''
            onClick={() => {
              onButtonClick();
            }}
          >
            <small>Sign in </small>
            <font> &gt;</font>
          </a>
        </div>
        <h1>Sign Up</h1>
        <small>Please enter your login, email and password</small>
        <br />
        <div className='MySendCodeForm'>
          <form>
            <input
              required
              className='InputLogin'
              placeholder='login'
              minLength='5'
              maxLength='30'
              type='text'
              ref={login}
            ></input>
          </form>
          <form>
            <input
              required
              className='InputEmail'
              placeholder='email'
              type='email'
              ref={email}
            ></input>
          </form>
          <form>
            <div className='Vlads'>
              <input
                required
                id='InputPassword'
                className='InputPassword'
                type={count}
                placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;'
                ref={password}
              ></input>
              <button className='Eye' type='button' onClick={change}>
                <Eye />
              </button>
            </div>
          </form>
          <div className='footerBut'>
            <button className='ButSignUp' onClick={ButCall}>
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
