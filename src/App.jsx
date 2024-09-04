import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="mx-20 my-5">
      <Link to={"/"}>Characters</Link>
      <Link to={"/locations"}>Locations</Link>
      <Link to={"/episodes"}>Episodes</Link>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
