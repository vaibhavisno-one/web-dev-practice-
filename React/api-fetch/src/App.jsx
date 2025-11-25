import "./App.css"
import { useEffect, useState } from 'react'
const App = () => {


  const [userData,setuserData] = useState([]);
  useEffect(()=>{
    pokeData();
  },[])

  async function  pokeData() {
    const url = "https://dummyjson.com/users";
    const response = await fetch(url);
    const data = await response.json();
    setuserData(data.users);
  }

  console.log(userData);
  
  return (
    <div>
    <h1>below are user datas</h1>
    {userData && userData.map((user)=>(
      <h1>{user.firstName}</h1>
    ))}
    </div>
  )
}

export default App