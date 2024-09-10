import { useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Character() {
  const character = useLoaderData();

  const [infoEpisode, setInfoEpisode] = useState([]);

  const isMounted = useRef(false);

  const dataEpisodes = (urlEpisode) => {
    urlEpisode.map(async (ep) => {
      const response = await fetch(`${ep}`);
      const data = await response.json();
      setInfoEpisode((prevItems) => [
        ...prevItems,
        {
          idCharacter: data.id,
          nameEpisode: data.name,
          numberEpisode: data.episode,
        },
      ]);
    });
  };

  useEffect(() => {
    if (!isMounted.current) {
      dataEpisodes(
        character.episode.map((ep) => {
          return ep;
        })
      );
      isMounted.current = true;
    }
  }, [character]);

  return (
    <div className="w-full bg-gray-800 grid grid-cols-3 rounded-lg h-min max-h-full p-5">
      <section className="flex items-center flex-col gap-4">
        <p className="font-bold text-3xl">{character.name}</p>
        <div className="w-44 h-44">
          <img
            src={character.image}
            alt=""
            className="rounded-l-lg object-scale-down"
          />
        </div>
        <table>
          <tbody>
            <tr>
              <th scope="row" className="text-start">
                Status:
              </th>
              <td>{character.status}</td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                Species:
              </th>
              <td>{character.species}</td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                Origin:
              </th>
              <td>{character.origin.name}</td>
            </tr>
            <tr>
              <th className="text-start w-24" scope="row">
                Location:
              </th>
              <td>{character.location.name}</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="items-center flex flex-col col-span-2 gap-4">
        <h1 className="uppercase text-4xl">Episodes where appears</h1>
        <div className="grid grid-cols-3">
          {infoEpisode.map((info) => {
            return (
              <table
                key={info.idCharacter}
                className="border-separate border-spacing-2 border border-slate-600"
              >
                <tbody>
                  <tr>
                    <th scope="row" className="text-start text-wrap">
                      {info.nameEpisode}
                    </th>
                    <td className="text-end">{info.numberEpisode}</td>
                  </tr>
                </tbody>
              </table>
            );
          })}
        </div>
      </section>
    </div>
  );
}
