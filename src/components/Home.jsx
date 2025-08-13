import React, { useContext } from 'react'
import Search from "./Search.jsx"
import Movies from "./Movies.jsx"
import { NavLink } from 'react-router-dom'
const Home = () => {

  return (
    <div>
      <Search />
      <Movies />
    </div>
  )
}

export default Home