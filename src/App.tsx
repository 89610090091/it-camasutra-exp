import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import { Rating } from './components/Reting/Rating';


function App(props: any) {
  debugger
  console.log('App rendering');

  return (
    <div>
      {/* <PageTitle title={'This is App component'} />
      <PageTitle title={'My friends'} />
      Article 1
      <Rating value={3} />
      <PageTitle title={'This is App component'} /> */}
      <Accordion title={'Menu'} collapsed={true} />
      <Accordion title={'User'} collapsed={false} />
      {/* <Accordion collapsed={true} />
      <Accordion collapsed={false} /> */}
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
    </div>
  );
}

type PageTytlePropsType = {
  title: string
}

function PageTitle(props: PageTytlePropsType) {
  debugger
  console.log('PageTitle rendering');

  return <h1>{props.title}</h1>
}

export default App;
