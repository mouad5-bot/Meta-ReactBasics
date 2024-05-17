import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Promo from './components/Promo';
import logo from './assets/logo.jpg';
import InputComponent from './state/InputComponent';
import RegisterForm from './state/RegisterForm';
import UseStateExample from './state/UseStateExample';
import Youtube from './components/Youtube';
import Calculator from './components/Calculator';
import { Routes, Route, Link } from "react-router-dom";
import React, {useState} from 'react';

function Logo (props){
  const logoPic = <img src={logo} />;
  return logoPic;
}

function App() {
  const date = new Date();
  const [name, setName] = React.useState('Mfifel');
 
  function handleClick() {
     setName('Mouad_Fifel');
  }

  return (
    <div className="App"> 
      <nav>
        <Link to="/" className="nav-item">Promo</Link>
        <Link to="/InputComponent" className="nav-item">InputComponent</Link>
        <Link to="/RegisterForm" className="nav-item">RegisterForm</Link>
        <Link to="/UseStateExample" className="nav-item">UseStateExample</Link>
        <Link to="/Youtube" className="nav-item">Videos</Link>
        <Link to="/Calculator" className="nav-item">Calculator</Link>
	    </nav>

        {/* <Logo /> */}
         {/* <Footer />  */}
          {/* <button onClick={function() {console.log('first example')}}>
            An inline anonymous ES5 function event handler
          </button> */} 

        <Routes> 
          <Route path="/" element={<Promo msg={date.toLocaleTimeString()} />}></Route>
          <Route path="/InputComponent" element={<InputComponent />}></Route>
          <Route path="/RegisterForm" element={<RegisterForm />}></Route>
          <Route path="/UseStateExample" element={<UseStateExample msg = {name} />}></Route>
          <Route path="/Youtube" element={<Youtube  />}></Route>
          <Route path="/Calculator" element={<Calculator  />}></Route>
        </Routes>
    </div>
  ); 
};

export default App;
