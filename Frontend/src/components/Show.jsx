import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Show = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  // Get all users
  const getData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/cards");
      const result = await response.json();

      if (!response.ok) {
        setError(result.error);
        return;
      }

      setError("");
      setData(result);
    } catch (error) {
      setError(error.message);
    }
  };

  // Delete user
  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `https://id-card-uj01.onrender.com/api/cards/${id}`,
        {
          method: "DELETE",
        },
      );

      const result = await response.json();

      if (!response.ok) {
        setError(result.error);
        return;
      }

      setError("");
      getData();
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {/* Error */}
      {error && (
        <div
          className="absolute top-24 left-1/2 -translate-x-1/2 z-50
                  flex items-center gap-3
                  bg-white border-l-4 border-red-500
                  text-red-600
                  px-5 py-3
                  rounded-lg
                  shadow-lg
                  w-[90%] sm:w-fit sm:max-w-md"
        >
          <div
            className="flex items-center justify-center
                    w-12 h-10"
          >
            ⚠️
          </div>

          <div>
            <p className="font-semibold text-sm">Something went wrong</p>
            <p className="text-xs text-gray-500">{error}</p>
          </div>

          <button
            onClick={() => setError("")}
            className="ml-2 text-gray-400 hover:text-red-500 text-lg"
          >
            ✕
          </button>
        </div>
      )}

      {/* Heading */}
      <h2 className="flex justify-center my-3 font-semibold text-2xl text-red-500">
        All Posts
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 md:p-8 mt-6">
        {data.map((element) => (
          <div
            key={element._id}
            className="w-full p-6 border border-gray-200 rounded-lg shadow-sm text-center"
          >
            <h3 className="text-2xl font-semibold">{element.name}</h3>

            <h4 className="text-xl font-semibold">{element.email}</h4>

            <p className="text-lg text-gray-600 mt-2">{element.age}</p>

            <div className="flex justify-center gap-6 mt-3">
              <button
                className="text-red-500 underline cursor-pointer"
                onClick={() => handleDelete(element._id)}
              >
                Delete
              </button>

              <Link to={`/${element._id}`} className="text-blue-500 underline">
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Show;
