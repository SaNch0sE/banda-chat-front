import React from 'react';
import Header from './header/Header';
import './header/Header.css';
import './index.css'
import './sign-up-in/Sign.css'
import SignIn from './sign-up-in/SignIn';
import SignUp from './sign-up-in/SignUp';

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
