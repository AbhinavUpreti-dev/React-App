import { useState } from 'react';
import './App.css';
import Button from './Button';
import Display from './Display';

function App() {
  const [counter,setCounter] = useState(42);
  const incrementCounter = (increment)=> setCounter(counter+increment);
  return (
    <div className="App">
     <Button onClickHandle={incrementCounter} increment={1}></Button>
     <Button onClickHandle={incrementCounter} increment={5}></Button>
     <Button onClickHandle={incrementCounter} increment={10}></Button>
     <Display message={counter}></Display>
    </div>
  );
}

export default App;
