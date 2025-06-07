
import './App.css'
import {About,Contact,Footer,Header,Home} from "./components/Index"
import { Outlet } from 'react-router-dom'
function App() {


  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
      
    </>
  )
}

export default App
