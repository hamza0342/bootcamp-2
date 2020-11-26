import React, {useState} from 'react';
import './App.css';
import Student from './student';


function App() {

  let [count, setCount] = useState(0);
  let [isDay, setDay] = useState(true);
  return (
    <div className= {`${isDay ? 'dayLight' : 'box'}`}>
    <Student count={count}> </Student>

    <h1>
      Good {isDay ? 'Morning' : 'Night'}
    </h1>
    
    <button onClick={ ()=> setCount(count=count+1) }>Click me</button>

    <button onClick={()=>setDay(!isDay)}>Update background</button>
    </div>
  );
}

export default App;
