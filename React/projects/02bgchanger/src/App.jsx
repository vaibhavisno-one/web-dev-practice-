import { useState } from "react"


const App = () => {

  const[color,setColor] = useState("white")
  
  return (
    <div className="container" style={{backgroundColor :color}}>

      <div className="head"><h1>BackGround Changer</h1></div>

      <div className="holder">
        <button onClick={ () => setColor("red")}> Red</button>
      </div>
      
    </div>
  )
}

export default App