import React from 'react';
import Page1 from './Pages/Page1';
import Header from './components/Header';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import Page4 from './Pages/Page4';
import Page5 from './Pages/Page5';

const App = () => {
  return (
    <div className='relative text-6xl font-[anzo1]'>
      <Header/>
      <Page1/>
      <Page2/>
      <Page3/>
      {/* <Page4/> */}
      <Page5/>
    </div>
  );
}

export default App;