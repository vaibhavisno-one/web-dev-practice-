import React, { useCallback } from 'react'
import { useState, useEffect, useRef } from 'react'

const App = () => {

  const [length,setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //ref

  const passwordRef = useRef(null)//need for for more advanced features



  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

    }, [length, numberAllowed, charAllowed, setPassword])

 useEffect(() => {                 //requires call back and dependency array
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

//copy password
  const copyPassword = useCallback(() => {
    passwordRef.current?.select()//that advanced feature
    passwordRef.current?.setSelectionRange(0, 4)//that advanced feature
    window.navigator.clipboard.writeText(password)
  },[password])
  
  return (
    <div className='container'>
      <div className='head'>
        <h1>Password Generator</h1>
      </div>

      <div className='generator'>
        <div className='holder'>
          <input type="text" value={password}
            className='password'
            placeholder='password'
            readOnly
            ref={passwordRef} //ref
          />

          <button
          onClick={copyPassword} className='copy'>Copy</button>

          <div>
            <input type="range" min={8} max={20} value={length} onChange={(e) => setLength(e.target.value)}/>
            <label >{length}</label>
            <input type="checkbox" name="" id=""  />
            <label htmlFor="">nums</label>
            

            <input type="checkbox" defaultChecked ={charAllowed}  onChange={() =>{setCharAllowed((prev)=> !prev);}}/>
            <label htmlFor=""> chars</label>
          </div>  
        </div>

      </div>
    </div>
  )
}

export default App