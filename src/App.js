import React from 'react';
import Header from './components/header/Header';
import './components/header/Header.css';
import './index.css'
import './components/sign-up-in/Sign.css'
import SignIn from './components/sign-up-in/sign-in/SignIn';
import SignUp from './components/sign-up-in/sign-up/SignUp';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className = "Sign">
      <SignUp />
      <SignIn />
      </div>
    </div>
  );
}

export default App;
