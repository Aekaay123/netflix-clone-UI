import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="relative flex flex-row  items-center justify-between p-2">
      <Link to="/">
        <h1 className="uppercase font-nsans-bold text-red-500 text-5xl">
          Netflix
        </h1>
      </Link>

      {user?.email ? (
        <div className="flex space-x-2">
          <Link to="/profile">
            <h1 className="capitalize p-1 rounded-lg cursor-pointer">
              Profile
            </h1>
          </Link>
          <button
            onClick={handleLogOut}
            className="capitalize p-1 bg-red-500 rounded-lg cursor-pointer focus:outline-none"
          >
            Log out
          </button>
        </div>
      ) : (
        <div className="flex space-x-2">
          <Link to="/login">
            <h1 className="capitalize p-1 rounded-lg cursor-pointer focus:outline-none">Log in</h1>
          </Link>
          <Link to="/signup">
            <h1 className="capitalize p-1 bg-red-500 rounded-lg cursor-pointer focus:outline-none">
              sign up
            </h1>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
