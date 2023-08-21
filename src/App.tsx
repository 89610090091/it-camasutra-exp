import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './components/Reting/Rating';
import Accordion from './components/Accordion/Accordion';


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
      {/* <FirstComponent /> */}
      <Accordion />
      <Rating />
    </div>
  );
}

// function FirstComponent() {
//   return <div>
//     <article>
//       <h1>My First Component</h1>
//       <ol>
//         <li>Components: UI Building Blocks</li>
//         <li>Defining a Component</li>
//         <li>Using a Component</li>
//       </ol>
//     </article>
//   </div>
// }


export default App;
