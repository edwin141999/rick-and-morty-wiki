import { useLoaderData } from "react-router-dom";

export default function Episodes() {
  const episodes = useLoaderData();

  return (
    <div className="grid grid-cols-4 gap-8 text-white">
      {episodes.map((episode) => {
        return (
          <div
            key={episode.id}
            className="w-full bg-gray-800 h-36 flex flex-row rounded-lg"
          >
            <div className="mx-4 flex flex-col justify-center">
              <p className="font-bold text-2xl">{episode.name}</p>
              <p>Emission Day: {episode.air_date}</p>
              <p>Episode Code: {episode.episode}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
