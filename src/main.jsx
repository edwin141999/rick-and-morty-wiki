import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Characters from "./pages/Characters.jsx";
import Episodes from "./pages/Episodes.jsx";
import Locations from "./pages/Locations.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Characters />,
        loader: async () => {
          return await fetch("https://rickandmortyapi.com/api/character")
            .then((response) => response.json())
            .then((data) => {
              return data.results;
            });
        },
      },
      {
        path: "/locations",
        element: <Locations />,
        loader: async () => {
          return await fetch("https://rickandmortyapi.com/api/location")
            .then((response) => response.json())
            .then((data) => {
              return data.results;
            });
        },
      },
      {
        path: "/episodes",
        element: <Episodes />,
        loader: async () => {
          return await fetch("https://rickandmortyapi.com/api/episode")
            .then((response) => response.json())
            .then((data) => {
              return data.results;
            });
        },
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
