import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const SignUp = () => {
  const [RememberLogin,setRememberLogin]=useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // eslint-disable-next-line no-unused-vars
  const {user,signUp}=UserAuth();
  const navigate=useNavigate()

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      await signUp(email,password);
      navigate("/")
    }
    catch(error){
   console.log(error)
    }
  }

  return (
    <>
      <div className="w-full h-full -z-10">
        <div className="w-full h-auto">
          <img
            className="w-full absolute object-cover"
            src="https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Background Image"
          />
        </div>
        <div className="fixed -top-8 w-full px-4 py-24">
          <div className="max-w-[450px] h-[600px] bg-black/80 mx-auto rounded-lg p-10">
            <div className="flex flex-col gap-6 w-full">
              <h1 className="font-nsans-bold text-3xl text-center">Sign Up</h1>
              <form action="" onSubmit={handleSubmit} className="flex flex-col gap-5">
                <input
                  type="email"
                  className="px-2 py-3 w-full rounded-lg bg-gray-600 focus:outline-none"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Email"
                />
                <input
                  type="password"
                  className="px-2 py-3 w-full rounded-lg bg-gray-600 focus:outline-none"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Password"
                />
                <button
                  type="submit"
                  className="px-2 py-3 w-full rounded-lg bg-red-600 focus:outline-none text-bold text-2xl hover:ring ring-bg-blue-500"
                >
                  Sign Up
                </button>
                <div className="flex justify-between">
                  <p>
                    <input type="checkbox" className="mr-2" checked={RememberLogin} onChange={()=>{
                      setRememberLogin(!RememberLogin)
                    }} />
                    Remember me
                  </p>
                  <button className="hover:underline">Need help?</button>
                </div>
                <div className="mx-auto">
                  <p className="inline text-gray-500">
                    Already subscribed to netflix?
                  </p>
                  <Link
                    to={"/login"}
                    className="inline hover:underline text-white"
                  >
                    Sign in
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
