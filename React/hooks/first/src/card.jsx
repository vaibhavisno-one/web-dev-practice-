import React from 'react'
import { useState } from 'react'

const card = () => {

  const [count, setCount] =  useState(0);
  

  
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

export default card