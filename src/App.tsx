import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import { Rating } from './components/Reting/Rating';


function hello() {
  debugger
  alert('hello world');
}

// hello();

function App() {
  console.log('App rendering');
  return (
    <div>
      <div>
        <input type="text" checked={true} />
      </div>
      <input type="password" />
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
