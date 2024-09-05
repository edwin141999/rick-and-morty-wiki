import { useLoaderData } from "react-router-dom";

export default function Characters() {
  const characters = useLoaderData();

  return (
    <div className="grid grid-cols-2 gap-8 text-white">
      {characters.map((character) => {
        return (
          <div
            key={character.id}
            className="w-full bg-gray-800 flex flex-row rounded-lg"
          >
            <img src={character.image} alt="" className="w-44 rounded-l-lg" />
            <div className="mx-4 flex flex-col justify-center">
              <p className="font-bold text-2xl">{character.name}</p>
              <p>
                {character.status} - {character.species}
              </p>
              <span className="text-gray-300">Last know location:</span>
              <p>{character.location.name}</p>
              {/* <p>{character.episode}</p> DE AQUI SE TOMA EL EPISODIO DONDE APARECE */}
            </div>
          </div>
        );
      })}
    </div>
  );
}
