import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="mx-20 py-5 text-white h-max min-h-screen">
      <section className="flex flex-row justify-center gap-5 mb-5">
        <Link
          to={"/"}
          className="bg-gray-600 rounded-lg px-3 py-3 font-semibold hover:bg-gray-400 transition-colors ease-in-out"
        >
          Characters
        </Link>
        <Link
          to={"/locations"}
          className="bg-gray-600 rounded-lg px-3 py-3 font-semibold hover:bg-gray-400 transition-colors ease-in-out"
        >
          Locations
        </Link>
        <Link
          to={"/episodes"}
          className="bg-gray-600 rounded-lg px-3 py-3 font-semibold hover:bg-gray-400 transition-colors ease-in-out"
        >
          Episodes
        </Link>
      </section>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
