import React from 'react'
import { useGlobalcontext } from './contex'
import { NavLink } from 'react-router-dom';

const Search = () => {
  const {query, setQuery, isError} = useGlobalcontext();
  return (
  <section className='search-section'>
    <div className='search'>
    <h2>Search Your Favourite Movie</h2>
    <form action="#" onSubmit={(e) => e.preventDefault()}>
      <div>
        <input type="text" placeholder='search here' value={query} onChange={(e) => setQuery(e.target.value)}></input>
      </div>
    </form>
    </div>
    {/* <div className='login_section'>
    <NavLink to="/registartion" className=" login ">Login</NavLink>
    </div> */}
    <div className='card-error'>
      <p>{isError.show && isError.msg}</p>
    </div>

  </section>
  )
}

export default Search