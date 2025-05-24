import React, { useEffect } from 'react'
import {useState} from 'react'
import './App.css';




function App() {



  const [cards, setCards] = useState([])


const cardData = async ()=>{
  try{
    const response =await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json();
    setCards(data);
    
  }catch(error){
    console.log('error', error);
  }
}

useEffect(()=>{
  cardData();
},[])



  return <>
  <div >
    {cards.map(card=>{  //cards.map(card => { se cards ki value ek ek karke le raha hai aur card variable me store kar raha hai
    
      return(
        <div key={card.id} className='card'>
          <h1>{card.title}</h1>
          <h2>status : {card.completed? "completed" : "not completed"}</h2>
          <h3>userId {card.userId}</h3>
        </div>
      )
    })}
  </div>
  </>
}

export default App