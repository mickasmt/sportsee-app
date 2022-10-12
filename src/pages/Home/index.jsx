import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='p-50'>
      <Link to="/user/12" >Profil utilisateur 12</Link>
      <br />
      <Link to="/user/18" >Profil utilisateur 18</Link>
    </div>
  )
}

export default Home