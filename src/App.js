import React from 'react';
import Header from './components/Header/Header';
import './components/Header/Header.css';
import './index.css'
import './components/SignUp/Sign.css'
import './components/SignIn/Sign.css'
import SignIn from './components/SignUp/SignUp';
import SignUp from './components/SignIn/SignIn';

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
