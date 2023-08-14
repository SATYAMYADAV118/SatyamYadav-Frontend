import React, { useState, useEffect } from "react";
import { Loading } from "../components";

export default function Capsules() {
  const [capsules, setCapsules] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterReuseCount, setFilterReuseCount] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [capsulesPerPage] = useState(10); // Number of capsules per page
  const [showData, setShowData] = useState(false);
  const [displayedCapsules, setDisplayedCapsules] = useState([]);

  useEffect(() => {
    fetchCapsules();
  }, []);

  const fetchCapsules = async () => {
    setLoading(true);

    const res = await fetch("https://api.spacexdata.com/v4/capsules");
    const data = await res.json();

    setLoading(false);
    setCapsules(data);
    setDisplayedCapsules(data.slice(0, capsulesPerPage)); // Display first page of capsules
    setShowData(true); // Show data when fetched
  };

  const handleSearch = () => {
    setLoading(true);
    const searchResults = capsules.filter((capsule) =>
      capsule.serial.toLowerCase().includes(searchQuery.toLowerCase())
    );
    applyFilters(searchResults);
    setCurrentPage(1); // Reset to the first page
  };

  const applyFilters = (data) => {
    let filteredData = data;

    if (filterStatus) {
      filteredData = filteredData.filter(
        (capsule) => capsule.status === filterStatus
      );
    }

    if (filterType) {
      filteredData = filteredData.filter(
        (capsule) => capsule.type === filterType
      );
    }

    if (filterReuseCount) {
      filteredData = filteredData.filter(
        (capsule) => capsule.reuse_count.toString() === filterReuseCount
      );
    }

    setDisplayedCapsules(filteredData.slice(0, capsulesPerPage)); // Show capsulesPerPage capsules after filtering
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    applyFilters(capsules);
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setFilterStatus("");
    setFilterType("");
    setFilterReuseCount("");
    applyFilters(capsules);
  };

  // Pagination
  const indexOfLastCapsule = currentPage * capsulesPerPage;
  const indexOfFirstCapsule = indexOfLastCapsule - capsulesPerPage;
  const currentCapsules = displayedCapsules.slice(indexOfFirstCapsule, indexOfLastCapsule);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <section className="py-32 bg-[url('D:/spacex-yt-main/spacex-yt-main/src/bg-image4.jpg')] bg-cover bg-bottom-center text-white">
        <div className="max-w-6xl mx-auto px-5">
          <h1 className="text-center-top text-4xl font-extrabold mb-10 text-gray-300">
            Explore the Cosmos: Discover SpaceX's Remarkable Capsules
          </h1>
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-4">
              <label
                htmlFor="filterStatus"
                className="flex items-center text-gray-300"
              >
                Filter by Status:
                <select
                  id="filterStatus"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="rounded-md px-2 py-1 bg-gray-800 text-white ml-2"
                >
                  <option value="">All</option>
                  <option value="active">Active</option>
                  <option value="retired">Retired</option>
                </select>
              </label>
              <label
                htmlFor="filterType"
                className="flex items-center text-gray-300 ml-4"
              >
                Filter by Type:
                <select
                  id="filterType"
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="rounded-md px-2 py-1 bg-gray-800 text-white ml-2"
                >
                  <option value="">All</option>
                  <option value="Dragon 1.0">Dragon 1.0</option>
                  <option value="Dragon 2">Dragon 2</option>
                </select>
              </label>
              <label
                htmlFor="filterReuseCount"
                className="flex items-center text-gray-300 ml-4"
              >
                Reuse Count:
                <select
                  id="filterReuseCount"
                  value={filterReuseCount}
                  onChange={(e) => setFilterReuseCount(e.target.value)}
                  className="rounded-md px-2 py-1 bg-gray-800 text-white ml-2"
                >
                  <option value="">All</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </label>
            </div>
            <div className="flex space-x-2">
              <button
                type="button"
                onClick={handleFilterSubmit}
                className="bg-gray-800 text-white rounded-md px-4 py-1 hover:bg-gray-700"
              >
                Apply Filters
              </button>
              <button
                type="button"
                onClick={handleResetFilters}
                className="bg-gray-800 text-white rounded-md px-4 py-1 hover:bg-gray-700"
              >
                Reset Filters
              </button>
            </div>
          </div>
          <div className="flex justify-end mb-4">
            <input
              type="text"
              placeholder="Search by Serial Number"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rounded-md px-2 py-1 bg-gray-800 text-white"
            />
            <button
              type="button"
              onClick={handleSearch}
              className="bg-gray-800 text-white rounded-md px-4 py-1 ml-2 hover:bg-gray-700"
            >
              Search
            </button>
          </div>
          {showData && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {currentCapsules.map(
                ({
                  id,
                  type,
                  status,
                  serial,
                  original_launch,
                  launches,
                  last_update,
                  land_landings,
                  water_landings,
                  reuse_count,
                }) => (
                  <article
                    key={id}
                    className="bg-opacity-50 backdrop-blur-lg bg-gray-800 rounded-md p-4 shadow-md transform hover:scale-105 transition-transform"
                  >
                    <h2 className="text-xl font-semibold mb-2 text-white">
                      {type},{" "}
                      <span className="text-base opacity-75 font-light">
                        {serial}
                      </span>
                    </h2>
                    <ul className="text-gray-300">
                      <li className="mb-1">{launches.length} launches</li>
                      <li className="mb-1">{land_landings} land landings</li>
                      <li className="mb-1">{water_landings} water landings</li>
                      <li className="mb-1">Reused {reuse_count} times</li>
                      {status === "active" ? (
                        <li className="text-emerald-500">Active</li>
                      ) : (
                        <li className="text-rose-500">Retired</li>
                      )}
                    </ul>
                    <p className="mt-2 opacity-75">Original Launch: {original_launch}</p>
                    <p className="mt-2 opacity-75">{last_update}</p>
                  </article>
                )
              )}
            </div>
          )}
          {/* Pagination */}
          <div className="flex justify-center mt-4">
            {Array.from({ length: Math.ceil(displayedCapsules.length / capsulesPerPage) }).map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`mx-2 px-4 py-2 rounded-lg ${
                  currentPage === index + 1
                    ? "bg-gray-800 text-white"
                    : "bg-gray-600 text-gray-300"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
