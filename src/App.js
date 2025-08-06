import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  let [currentValue, setCurrentValue] = useState(0);
  let [inputValue, setInputValue] = useState('');
  
  const handleAdd = () => setCurrentValue(currentValue + inputValue);
  const handleSubtract = () => setCurrentValue(currentValue - inputValue);
  const handleMultiply = () => setCurrentValue(currentValue * inputValue);
  const handleDivide = () => {
    if (inputValue !== 0) {
      setCurrentValue(currentValue / inputValue);
    } else {
      alert("Cannot divide by zero");
    }
  };


  return (
    <div>
      <header>
        <h1>Calculator by React</h1>
        <img id='logo' src={logo} className="App-logo" alt="logo" />
      </header>
      <div id='currentValue'>{currentValue}</div>
      <main>
        <input type='number'
          value={inputValue}
          onChange={e => setInputValue(Number(e.target.value))}
        />
        <button onClick={handleAdd}>+</button>
        <button onClick={handleSubtract}>-</button>
        <button onClick={handleMultiply}>*</button>
        <button onClick={handleDivide}>/</button>
        <button onClick={() => setCurrentValue(0)}>Clear</button>
      </main>
        
    </div>
  );
}

export default App;
