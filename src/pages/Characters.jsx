import { useDispatch } from "react-redux";
import { useLoaderData, useNavigate } from "react-router-dom";
import { decrement, increment } from "../counter/counterSlice";

export default function Characters() {
  const characters = useLoaderData();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onClickInfo = (id) => {
    navigate(`/character/${id}`);
  };

  return (
    <>
      <nav className="flex justify-between mb-4">
        <button
          className="bg-gray-600 rounded-lg px-3 py-3 font-semibold hover:bg-gray-400 transition-colors ease-in-out"
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Previous
        </button>
        <button
          className="bg-gray-600 rounded-lg px-3 py-3 font-semibold hover:bg-gray-400 transition-colors ease-in-out"
          onClick={() => {
            dispatch(increment());
          }}
        >
          Next
        </button>
      </nav>
      <div className="grid grid-cols-2 gap-8 text-white">
        {characters.map((character) => {
          return (
            <button
              key={character.id}
              onClick={() => onClickInfo(character.id)}
            >
              <div className="w-full bg-gray-800 flex flex-row rounded-lg">
                <div className="w-44 h-44">
                  <img
                    src={character.image}
                    alt=""
                    className="rounded-l-lg object-scale-down"
                  />
                </div>
                <div className="mx-4 flex flex-col justify-center items-start">
                  <p className="font-bold text-2xl">{character.name}</p>
                  <p>
                    {character.status} - {character.species}
                  </p>
                  <span className="text-gray-300">Last know location:</span>
                  <p>{character.location.name}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
}
