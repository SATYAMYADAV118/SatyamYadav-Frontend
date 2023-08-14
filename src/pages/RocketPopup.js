import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function RocketPopup({ rocket, onClose }) {
  const {
    name,
    type,
    first_flight,
    cost_per_launch,
    company,
    success_rate_pct,
    active,
    country,
    stages,
    height,
    diameter,
    mass,
    description,
    flickr_images,
    wikipedia,
  } = rocket;

  const [imperial, setImperial] = useState(false);
  const [value, setValue] = useState(0);
  const customScrollbarStyles = {
    scrollbarWidth: "thin",
    scrollbarColor: "rgba(255, 255, 255, 0.3) transparent",
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-75 backdrop-filter backdrop-blur-lg">
      
      <div className="bg-gray-800 bg-opacity-80 text-white rounded-lg p-6 w-full md:w-3/4 h-3/4 max-h-screen overflow-y-auto shadow-lg relative">
        <button
          className="absolute top-2 right-2 p-1 text-gray-300 hover:text-gray-100"
          onClick={onClose}
        >
          &#10005;
        </button>
        <h1 className="text-4xl font-semibold mb-4">{name}</h1>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 text-white opacity-75">
          <ul>
            <li>Cost per launch: {cost_per_launch.toLocaleString()} USD</li>
            <li>Company: {company}</li>
            <li>Success Rate: {success_rate_pct}%</li>
            {active ? <li className="text-emerald-500">Active</li> : <li className="text-rose-500">Inactive</li>}
          </ul>

          <ul>
            <li>Country: {country}</li>
            <li>Stages: {stages}</li>
            {!imperial ? (
              <>
                <li>Height: {height.meters}m</li>
                <li>Diameter: {diameter.meters}m</li>
                <li>Mass: {mass.kg.toLocaleString()}kg</li>
              </>
            ) : (
              <>
                <li>Height: {height.feet}ft</li>
                <li>Diameter: {diameter.feet}ft</li>
                <li>Mass: {mass.lb.toLocaleString()}lb</li>
              </>
            )}
          </ul>
        </div>

        <p className="text-white opacity-75 mt-5">{description}</p>

        <ul className="flex items-center justify-start gap-3 mt-5">
          <li><a href={wikipedia} target="_blank" rel="noreferrer" className="btn">Wikipedia</a></li>
          <li><button onClick={() => setImperial(!imperial)} className="btn">{imperial ? "Toggle Metric Units" : "Toggle Imperial Units"}</button></li>
        </ul>

        <article className="mt-10">
          <img src={flickr_images[value]} alt={name} className="h-full object-cover" />
          <ul className="flex flex-wrap items-center justify-start gap-3 mt-5">
            {flickr_images.map((image, index) => (
              <li key={index} onClick={() => setValue(index)} className={`cursor-pointer bg-white ${index === value && "p-1"}`}>
                <img src={image} alt={name} className="h-10 w-100% h-15 object-cover " />
              </li>
            ))}
          </ul>
        </article>

        <Link to="/rockets" className="block mt-6 text-center text-gray-400 hover:text-gray-100" onClick={onClose}>
          Back to Rockets
        </Link>
      </div>
    </div>
  );
}
