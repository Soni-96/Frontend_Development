import React from "react";
import { useGlobalcontext } from "./contex";
import { NavLink } from "react-router-dom";

const Movies = () => {
  const { movie, isLoading, isError } = useGlobalcontext();
  
  // console.log("Movies.jsx - Received Movie Data:", movie); // 🔎 Debug here

  return (
    <div>
    <section className="movie-page">
    <div className="container grid grid-4-col">
      {movie?.map((curMovie, index) => {
        const { imdbID, Title, Poster } = curMovie;
        const movieName = Title.substring(0,15)
        return (<NavLink to={`movie/${imdbID}`} key={imdbID}>
          <div className="card">
           <div className="card-info">
            
            <h2>{movieName.length >= 15 ? `${movieName}...`:movieName}</h2>
            
            <img src={Poster} alt={imdbID}/>

           </div>
          </div>
          </NavLink>);
      })}
    </div>
    </section>
    </div>
  )
};

export default Movies