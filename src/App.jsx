import Routing from "./Routes/Routing";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthContextProvider>
      <div className="flex flex-col">
        <Navbar />
        <Routing />
      </div>
    </AuthContextProvider>
  );
};
export default App;
