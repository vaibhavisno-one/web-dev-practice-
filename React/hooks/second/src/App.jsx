import React from 'react'
import './App.css'
import { useEffect,useState } from 'react'
function App() {

  const [count, setCount] = useState(0);


  useEffect(() => {

    alert("count is " + count)
  }, [count===10])
  

  return (
    <> 
        <div>
          The Count is {count}
          <br />

          <button onClick={()=> setCount(count + 1)}>Increment</button>
          <br />
          <button onClick={()=> setCount(455)}>Decrement</button>
        </div>
    
    </>
  )
}

export default App