import React, { useEffect } from "react";
import App from "../App";
import { createContext } from "react";
import { useContext, useState } from "react";

const AppContext = createContext();
export const API_URL = `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}`;

//we need to create a Provider

const AppProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show:"false", msg:""});
  const [query, setQuery] = useState("titanic");

  const getMovies = async(url) => {
    setIsLoading(true);
    try{
       const res = await fetch(url);
       const data = await res.json();
       console.log(data);
       if(data.Response === "True"){
        setIsLoading(false);
        setMovie(data.Search);
        // console.log("data received");
        console.log(movie);
       }
       else{
        setIsLoading(false);
        setIsError({
          show:true,
          msg:data.Error
        })
       }
    }catch(error){
      console.error("Fetch Error:",error); 
      setIsLoading(false);
      setIsError({show: true, msg:data.Error}); 
    }
  }


   useEffect(() => {
   let timer = setTimeout(() => {
      getMovies(`${API_URL}&s=${query}`);
    },1000);

    return () => clearTimeout(timer);
  }, [query]);
  
  // useEffect(() => {
  //   console.log("Updated Movie State:", movie);
  // }, [movie]);
  
  return <AppContext.Provider value={{isLoading, isError, movie, query, setQuery}}>
    {children}</AppContext.Provider>
}
//global custom hook
const useGlobalcontext=()=>{
  return useContext(AppContext);
}
export {AppContext, AppProvider, useGlobalcontext};