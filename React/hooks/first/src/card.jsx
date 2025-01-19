import React from 'react'
import { useState } from 'react'

const card = () => {

  let [count,setCount] = useState(10);

  const increment = () => {
    setCount(count + 1);
    if(count === 20){
        alert("You have reached the limit");
        
    }
    
  }
  return (
    <> 
        <div>
            <button onClick={increment }> Add </button>
            <h1>{count}</h1>
        </div>
    
    </>
  )
}

export default card