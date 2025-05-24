import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const todos =[{
    title:" React",
    desc:"Learn React"
  },
  {
    title:"Learn React",
    desc:"Learn React"
  }
]
  

  
  return (
    <>
      <div>
        {todos.map(todo =>{
          // return <Todo key ={todo.title} todo={todo} />
          return( 
          <div key={todo.title} className='todo'>
            <div>{todo.title}</div>
            <div>{todo.desc}</div>
          </div>)
          
        })}
      </div>
    </>
  )
}

export default App
