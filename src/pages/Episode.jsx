import { useEffect, useRef, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

export default function Episode() {
  const episode = useLoaderData();
  const navigate = useNavigate()

  const [infoCharacter, setInfoCharacter] = useState([]);

  const isMounted = useRef(false);

  const onclickCharacter = (id) => {
    navigate(`/character/${id}`);
  };

  const dataCharacters = (urlCharacter) => {
    urlCharacter.map(async (ch) => {
      const response = await fetch(`${ch}`);
      const data = await response.json();
      setInfoCharacter((prevItems) => [
        ...prevItems,
        {
          idCharacter: data.id,
          nameCharacter: data.name,
          imageCharacter: data.image,
        },
      ]);
    });
  };

  useEffect(() => {
    if (!isMounted.current) {
      dataCharacters(
        episode.characters.map((character) => {
          return character;
        })
      );
      isMounted.current = true;
    }
  }, [episode]);

  return (
    <>
      <p>Name of episode: {episode.name}</p>
      <p>Emission Date: {episode.air_date}</p>
      <p>{episode.episode}</p>
      {infoCharacter.map((character) => {
        return (
          <button
            key={character.idCharacter}
            onClick={() => onclickCharacter(character.idCharacter)}
          >
            <div>
              <p>{character.nameCharacter}</p>
              <div className="w-44 h-44">
                <img
                  src={character.imageCharacter}
                  alt=""
                  className="rounded-l-lg object-scale-down"
                />
              </div>
            </div>
          </button>
        );
      })}
    </>
  );
}
