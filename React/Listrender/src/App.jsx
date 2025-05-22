import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos]  = useState([
    {title: 'todo1', desc: 'this is todo1'},
    {title: 'todo2', desc: 'this is todo2'},
    {title: 'todo3', desc: 'this is todo3'},
  ])

  

  
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
