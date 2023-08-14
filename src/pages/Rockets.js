import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import { Loading } from "../components";
import RocketPopup from "../pages/RocketPopup";

export default function Rockets() {
  const [data] = useFetch("https://api.spacexdata.com/v4/rockets");
  const [selectedRocket, setSelectedRocket] = useState(null);

  const openPopup = (rocket) => {
    setSelectedRocket(rocket);
  };

  const closePopup = () => {
    setSelectedRocket(null);
  };

  return (
    <>
      {!data ? (
        <Loading />
      ) : (
        <section className="py-32 bg-[url('D:/spacex-yt-main/spacex-yt-main/src/bg-image2.jpg')] bg-cover bg-bottom-center text-white">
          <h1 className="heading text-center mb-10">Explore Rocket Fleet</h1>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 px-5">
            {data.map((rocket) => (
              <div key={rocket.id}>
                <article className="bg-white bg-opacity-50  rounded-lg shadow-md overflow-hidden transform hover:touch-pinch-zoom hover:-translate-y-1 hover:scale-105 transition duration-300">
                  <img
                    src={rocket.flickr_images[0]}
                    alt={rocket.name}
                    className="h-64 object-cover rounded-t-lg"
                  />
                  <div className="p-5">
                    <h2 className="font-semibold text-white-800 text-lg mb-2">
                      {rocket.name}
                    </h2>
                    <div className="glass-like-bg p-4 rounded-lg">
                      <p className="text-gray-800 mb-4">
                        {rocket.description.substring(0, 150)}...
                      </p>
                      <button
                        onClick={() => openPopup(rocket)}
                        className="text-sm font-semibold text-blue-600 hover:underline focus:outline-none"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </section>
      )}

      {selectedRocket && <RocketPopup rocket={selectedRocket} onClose={closePopup} />}
    </>
  );
}
