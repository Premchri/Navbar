import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const userId = "Hello";
  return (
    <div>
      <h3>Home</h3>
      <Link to={`/userrecord/${userId}`}>User Record</Link>
    </div>
  )
}

export default Home
