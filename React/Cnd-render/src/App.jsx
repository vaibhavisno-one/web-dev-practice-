import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [showbtn, setShowbtn] = useState(false);
  const [hide, setHide] = useState(false);

  return (
    <>
      <div>
        <button onClick={() => setShowbtn(!showbtn)}>click me</button>
        <br />
        <br />

        {showbtn ? (
          <>
            {!hide && (
              <button onClick={() => setHide(!hide)}>don't click</button>
            )}
          </>
        ) : (
          'done'
        )}
      </div>
    </>
  );
}

export default App;
