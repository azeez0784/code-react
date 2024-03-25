import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Chai from './Chai';

function App() {
  let [Counter, setCounter] = useState(1)

  let addValue = ()  => { 
    setCounter(Counter + 1)

  }
  let removeValue = ()  => { 
    setCounter(Counter - 1)

  }

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Chai />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h4> Counter value changes here {Counter} </h4>
        <button onClick = {addValue} >increment counter value {Counter} </button>
        <button onClick = {removeValue}>decrement counter value {Counter} </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
