import React from 'react';
import logo from './logo.svg';
import './index.css';
import User from './components/User';
import Card from './components/Card';
import From from './components/From';
import SignUpFrom from './components/SignUpFrom';

function App() {
  return (
    
    <div className="App">
      {/* <h1 className='text-red-500 h-20 p-4 items-center text-4xl font-bold bg-red-100 mx-40 my-20 rounded-[100px]'> Hello Mehedi Hasan </h1>
      <h1 className='text-red-500 h-20 p-5 text-center text-4xl font-bold bg-red-100 mx-40 my-20 rounded-[100px] border-2 border-green-400 bg-gradient-to-r from-red-300 to-blue-300 hover:bg-gradient-to-l'> Hello Mehedi Hasan </h1>
      <User></User> */}
      <SignUpFrom></SignUpFrom>
    </div>
  );
}

export default App;
