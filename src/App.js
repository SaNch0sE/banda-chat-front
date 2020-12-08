import React, { useState } from "react";
import Header from './components/Header/Header';
import './components/Header/Header.css';
import './index.css'
import './components/SignUp/SignUp.css'
import './components/SignIn/SignIn.css'
import SignIn from './components/SignUp/SignUp';
import SignUp from './components/SignIn/SignIn';

function App() {
  const [togle, setTogle] = useState(true);
  const onButtonClick = () => {
  setTogle(!togle);
  }; 
  return (
    <div className="wrapper">
      <Header />
      {togle &&  <SignUp onButtonClick={onButtonClick} />}
      {!togle &&  <SignIn onButtonClick={onButtonClick} />}
      </div>
  );
}

export default App;
