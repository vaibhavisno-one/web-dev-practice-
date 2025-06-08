import React,{useContext} from 'react'
import UserContext from '../context/userContext'



function Profile() {
  const {user} = useContext(UserContext)

  if(!user) return <div> please Login</div>

  return <div>welcome {user.username} pasword {user.password} </div>
}

export default Profile