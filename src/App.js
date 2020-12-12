import React, { useState, } from "react";
import { Route, Redirect, BrowserRouter } from "react-router-dom"
import Header from './components/Header/Header';
import './components/Header/Header.css';
import './index.css'
import './components/SignUp/SignUp.css'
import './components/SignIn/SignIn.css'
import SignIn from './components/SignUp/SignUp';
import SignUp from './components/SignIn/SignIn';
import Chat from "./components/Chat/Chat";

function App() {
  const [togle, setTogle] = useState(true);
  const onButtonClick = () => {
  setTogle(!togle);
  }; 
  return (
    <div className="wrapper">
      <Header />
      {!togle &&  <SignIn onButtonClick={onButtonClick} />}
      {togle &&  <SignUp onButtonClick={onButtonClick} />}
      <BrowserRouter><Route path="/chat" render={() => <Chat />} /></BrowserRouter>
      </div>
  );
}

export default App;
