/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import MovieItem from "./MovieItem";
import { MdChevronLeft } from "react-icons/md";

const MovieRow = ({ title, url }) => {
  const [movies, setMovie] = useState([]);
    
  useEffect(() => {
    axios.get(url).then((response) => {
      setMovie(response.data.results);
     
    });
  },[url]);


  return (
    <>
      <h1 className=" capitalize p-2 font-nsans-bold text-3xl text-center">{title}</h1>
     
      <div id={`slider`} className=" flex items-center overflow-x-scroll scrollbar-hide  gap-2 bg-gray-500 w-full h-[200px]">
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
