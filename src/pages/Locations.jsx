import { useLoaderData, useNavigate } from "react-router-dom";

export default function Locations() {
  const locations = useLoaderData();
  const navigate = useNavigate();

  const onclickLocation = (id) => {
    navigate(`/location/${id}`)
  };

  return (
    <div className="grid grid-cols-4 gap-8 text-white">
      {locations.map((location) => {
        return (
          <button
            key={location.id}
            className="text-start"
            onClick={() => onclickLocation(location.id)}
          >
            <div className="w-full bg-gray-800 flex h-36 flex-row rounded-lg">
              <div className="mx-4 flex flex-col justify-center">
                <p className="font-bold text-2xl">{location.name}</p>
                <p>{location.dimension}</p>
                <p>type: {location.type}</p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
