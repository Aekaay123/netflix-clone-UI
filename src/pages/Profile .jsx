import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { UserAuth } from "../context/AuthContext";
import { db } from "../services/firebase";
import { imageURL } from "../services/movieService";
import { arrayRemove, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

const Profile = () => {
  const [movies, setMovies] = useState([]); // Stores user's favorite movie IDs and details
  const { user } = UserAuth(); // Accesses user information from context

  // Fetches favorite movies from Firestore when user changes or component mounts
  useEffect(() => {
    if (user) {
      onSnapshot(doc(db, "users", `${user.email}`), (doc) => {
        if (doc.data()) setMovies(doc.data().favShows || []); // Set movies or empty array if no favShows field
      });
    }
  }, [user?.email]);

 const handleUnlikeShow=async(movie)=>{
    const UserDoc=doc(db,'users',user.email);
    await updateDoc(UserDoc,{
      favShows:arrayRemove(movie)
    })

  }

  return (
    <div>
      <div className="relative w-full">
        <img
          src="https://wallpapercave.com/uwp/uwp4284585.jpeg"
          className="block w-full h-[500px] object-cover"
          alt=""
        />
        <div className="absolute top-[60%] left-[10%] ml-36">
          <h1 className="capitalize text-3xl md:text-4xl lg:txt-4xl font-nsans-bold">
            my shows
          </h1>
          <p className="text-sm text-gray-400 text-center">{user.email}</p>
        </div>
      </div>

      <h2 className="font-nsans-bold md:text-xl p-4 capitalize">
        Favourite Shows
      </h2>
      
      <div className="relative flex items-center group">
        <div
          id={`slider`}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((movie) => {
            return (
              <div
                key={movie.id}
                className="relative w-[160px] sm:w-[200px] md:w-240px] ld:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2"
              >
                <img
                  src={imageURL(movie.backdrop_path, "w500")}
                  className="w-full h-40 block object-cover object-top"
                  alt={movie.title}
                />

                <div className="absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100">
                  <p className="whitespace-normal text-xs md:text-sm flex justify-center items-center h-full font-nsans-bold ">
                    {movie.title}
                  </p>
                  <p>
                    <AiOutlineClose  className="absolute top-2 right-2" size={30} onClick={()=>handleUnlikeShow(movie)}/>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
