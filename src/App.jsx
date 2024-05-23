import { Link, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Rough from "./components/Rough";
import Details from "./components/Details";
import Edit from "./components/Edit";
function App() {
  const { search, pathname } = useLocation();
  console.log(search, pathname);
  return (
    <>
      <div className="h-screen w-full  flex ">
        {(pathname !== "/" || search.length > 0) && (
          <Link to="/" className="absolute left-[15%] top-[2%] text-red-300">
            Home
          </Link>
        )}

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/rough" element={<Rough />}></Route>

          <Route path="/details/:id" element={<Details />}></Route>
          <Route path="/edit" element={<Edit />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
