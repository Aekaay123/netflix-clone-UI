import axios from "axios";
import { useEffect, useState } from "react";
import endpoints, { imageURL } from "../services/movieService";

const Hero = () => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    axios
      .get(endpoints.trending)
      .then((response) => {
        const movies = response.data.results;
        const randomMovies = movies[Math.floor(Math.random() * movies.length)];
        setMovie(randomMovies);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!movie) {
    return (
      <>
        <h1>Fetching data......</h1>
      </>
    );
  }

  const { title, backdrop_path, release_date, overview } = movie;

  const truncate=(str,length)=>{
    if(!str) return false
    else return str.length>length?str.slice(0,length)+'....':str
  }

  return (
    <div className=" relative w-full h-[550px] md:h-[550px] bg-gradient-to-r from-black">
      <img
        className="w-full h-[500px]  object-center object-cover bg-gradient-to-r from-black to-pink-500"
        src={imageURL(backdrop_path,'original')}
        alt={title}
      />
      <div className="absolute top-[40%] lg:top-[35%] p-4 md:p-8">
        <h1 className="text-3xl md:text-6xl font-nsans-bold">{title}</h1>
        <div className="mt-4 mb-4">
          <button className="capitalize border border-gray-500 py-2 px-5 mr-3 bg-white text-black hover:bg-red-500 focus:outline-none rounded-md">Play</button>
          <button className="capitalize border border-gray-500 py-2 px-5 rounded-md hover:bg-red-500">Watch later</button>
        </div>
        <p className="text-gray-400">Released on: {release_date}</p>
        <p className="w-full md:max-w-[50%]">{truncate(overview,150)}</p>
      </div>
    </div>
  );
};

export default Hero;
