import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import {API_URL} from './contex.jsx'
import { useState, useEffect } from 'react'

const SingleMovie = () => {
  const {id} = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [movie, setMovie] = useState({});
  
    const getMovies = async(url) => {
      setIsLoading(true);
      try{
         const res = await fetch(url);
         const data = await res.json();
         console.log(data);
         if(data.Response === "True"){
          setIsLoading(false);
          setMovie(data);
          // console.log("data received");
         }else{
          setIsError(true);
         }
      }catch(error){
        console.log(error);    
      }
    }
  
     useEffect(() => {
      console.log("Fetching movie for ID:", id);
     let timer = setTimeout(() => {
        getMovies(`${API_URL}&i=${id}`);
      },1000);
  
      return () => clearTimeout(timer);
    }, [id]);

    if(isLoading){
      return(
        <div className='movie-section'>
          <div className='loading'>Loading...</div>
        </div>
      );
    }
    
  return (
      <section className='movie-section'>
        <div className='movie-card'>  
            <figure>
              <img src={movie.Poster} alt=''/>
            </figure>

            <div className='card-content'>
              <p className='title'>Title: {movie.Title}</p>
              <p className='card-text'>Released: {movie.Released}</p>
              <p className='card-text'>Genre: {movie.Genre}</p>
              <p className='card-text'>Rating: {movie.imdbRating}</p>
              <p className='card-text'>Country: {movie.Country}</p>
              <NavLink to="/" className="back-btn">Go Back</NavLink>
            </div>

            </div>

      </section>

  )
}

export default SingleMovie