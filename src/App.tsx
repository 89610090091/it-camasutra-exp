import React from 'react';
// import logo from './logo.svg';
import './App.css';

function hello() {
  debugger
  alert('hello world');
}

// hello();

function App() {
  console.log('app rendering');
  return (
    <div>
      This is App copmonen
      <br />
      <Rating />
    </div>
  );
}

function Rating() {
  console.log('Rating rendering');
  return (
    <div>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
  )
}

function Star() {
  console.log('Star rendering');
  return <div>star</div>
}



function Accordion() {
  console.log('Accordion rendering');
  return (
    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  )
}

export default App;
