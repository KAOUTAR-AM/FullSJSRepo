
import React from 'react';
import{Footer,Blog,Possibility,Feature,WhatGPT3,Header} from './containers';
import{Cta,Brand,Navbar} from './componenets';
import './App.css';


const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar/>
        <Header/>
      </div> 
      <div>
        <Brand/>
        <WhatGPT3/>
        <Feature/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>
      </div>
    </div>
    
  )
}

export default App