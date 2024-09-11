import { useEffect, useRef, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

export default function Location() {
  const location = useLoaderData();
  const navigate = useNavigate()
  const isMounted = useRef(false);

  const [infoCharacter, setInfoCharacter] = useState([]);

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
        location.residents.map((character) => {
          return character;
        })
      );
      isMounted.current = true;
    }
  }, [location]);

  return (
    <>
      <p>{location.id}</p>
      <p>{location.name}</p>
      <p>{location.type}</p>
      <p>{location.dimension}</p>
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
