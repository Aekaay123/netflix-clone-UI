/* eslint-disable react/prop-types */
import { useState } from "react";
import { imageURL } from "../services/movieService";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import {doc,arrayUnion,updateDoc} from "firebase/firestore"
import {db} from "../services/firebase"
import { UserAuth } from "../context/AuthContext";


const MovieItem = ({ movie }) => {
  // eslint-disable-next-line no-unused-vars
  const [like, setLike] = useState(false);
  // eslint-disable-next-line react/prop-types
  const { title, backdrop_path } = movie;
  const {user}=UserAuth();
    const userEmail=user?.email
  
  const markFavShow=async()=>{
    const userDocRef=doc(db,"users",userEmail);
    if(userEmail){
      setLike(!like)
      await updateDoc(userDocRef,{
        favShows:arrayUnion({...movie})
      })

    }
    else{
      alert('Log in to save the movie...')
    }

  }
  return (
    <div className="relative w-[160px] h-2/3 rounded-lg overflow-hidden cursor-pointer hover:scale-105 hover:opacity-100 duration-300">
      <img
        className="w-full h-full object-cover "
        src={imageURL(backdrop_path, "w500")}
        alt={title}
      ></img>
      <div className="absolute top-0 left-0 w-full h-40 bg-black/40 opacity-0 hover:opacity-100">
       
        <p onClick={markFavShow} className="absolute top-1 left-1 cursor-pointer">
         {like?<FaHeart size={20} className="absolute top-2 left-2 text-gray-500" />:<FaRegHeart size={20} className="top-2 left-2 text-gray-500" />}
        </p>
        <p className="mt-7 whitespace-normal text-sm font-nsans-bold flex items-center justify-center ">
          {title}
        </p>
      </div>
    </div>
  );
};

export default MovieItem;
