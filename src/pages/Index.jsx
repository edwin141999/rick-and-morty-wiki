import { useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Character from "./Character";
import Characters from "./Characters";
import Episodes from "./Episodes";
import Locations from "./Locations";

export function Index() {
  const count = useSelector((state) => state.counter.value);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Characters />,
          loader: async () => {
            return await fetch(
              `https://rickandmortyapi.com/api/character?page=${count}`
            )
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
        {
          path: "character/:characterId",
          element: <Character />,
          loader: async ({params}) => {
            return await fetch(`https://rickandmortyapi.com/api/character/${params.characterId}`)
              .then((response) => response.json())
              .then((data) => {
                return data;
              });
          },
          
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
