import { useState } from 'react';
import './App.css';

function App() {
  const [showbtn, setShowbtn] = useState(false);
  // const [hide, setHide] = useState(false);

  const Todo = ()=>{return(<>
  <div>this is mini component</div></>)};  {/* this is a mini component */}

  return (
    <>
      <div>
        <button onClick={() => setShowbtn(!showbtn)}>click me</button>
        <br />
        <br />
        <Todo></Todo>
        {/* {showbtn ? <button>showbtn is true</button> : <button>showbtn is false</button>} This is a ternary operator . this can show both true and false */}

        {showbtn && <button>showbtn is true</button>}{/* This is a logical AND operator . This will only show true */}
        
        
      </div>
    </>
  );
}

export default App;
