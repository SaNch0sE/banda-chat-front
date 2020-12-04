import React from 'react';
import Header from './header/Header';
import './header/Header.css';
import './index.css'
import './sign up-in/Sign up-in style.css'
import Sign from './sign up-in/Sign up-in';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Sign />
    </div>
  );
}

export default App;
