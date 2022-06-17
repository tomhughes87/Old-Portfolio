import React from 'react';
import logo from './logo.svg';
import './App.css';
import './MyHeader.css';
import './Cardflip.css'
import ComponentBlank from './components/ComponentBlank';
import MyHeader from './components/layout/MyHeader';
import Cardflip from './components/Cardflip'

function App() {
  return (
    <>
    <MyHeader />

    <div className="App">

      <div className='App-Main-Body'>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Cardflip />  
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>

          <ComponentBlank />
        </header>
      </div>

    </div>
    </>
  );
}

export default App;
