import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Rating from './components/Reting/Rating';
import Accordion from './components/Accordion/Accordion';


function hello() {
  debugger
  alert('hello world');
}

// hello();

function App() {
  console.log('App rendering');
  return (
    <div>
      <AppTitle />
      <Rating />
      <Accordion />
      <Rating />
    </div>
  );
}

function AppTitle() {
  console.log('AppTitle rendering');
  return <>This is APP component</>
}

export default App;
