import { useEffect, useState } from "react";

export default function Characters() {
  const URL_CHARACTERS = "https://rickandmortyapi.com/api/character";

  const [characters, setCharacters] = useState([]);

  const fetchCharacters = () => {
    fetch(URL_CHARACTERS)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  };

  useEffect(() => {
    fetchCharacters();
  });

  return (
    <div className="grid grid-cols-2 gap-8 text-white">
      {characters.map((character) => {
        return (
          <div
            key={character.id}
            className="w-full bg-blue-500 flex flex-row rounded-lg"
          >
            <img src={character.image} alt="" className="w-44 rounded-l-lg" />
            <p className="font-bold text-2xl">{character.name}</p>
            <p>
              {character.status} - {character.species}
            </p>
            <p>{character.location.name}</p>
          </div>
        );
      })}
    </div>
  );
}
