/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import MovieItem from "./MovieItem";

const MovieRow = ({ title, url }) => {
  const [movies, setMovie] = useState([]);
    
  useEffect(() => {
    axios.get(url).then((response) => {
      setMovie(response.data.results);
     
    });
  },[url]);


  return (
    <>
      <h1 className=" capitalize p-2 font-nsans-bold text-4xl ">{title}</h1>
     
      <div id={`slider`} className=" mx-auto flex flex-1 flex-wrap justify-center gap-x-2 gap-y-2 bg-black/20 bg-no-repeat bg-cover  w-full">
        {
            movies.map((movie)=>(
                <MovieItem key={movie.id} movie={movie}/>
            ))
        }

      </div>
    </>
  );
};

export default MovieRow;
