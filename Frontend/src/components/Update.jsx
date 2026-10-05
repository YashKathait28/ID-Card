// import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [error, setError] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const getSingleUser = async () => {
    const response = await fetch(`http://localhost:5000/api/cards/${id}`);
    const result = await response.json();

    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }

    if (response.ok) {
      setError("");
      setName(result.name);
      setEmail(result.email);
      setAge(result.age);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updateUser = { name, email, age };

    const response = await fetch(
      `https://id-card-uj01.onrender.com/api/cards/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify(updateUser),
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const result = await response.json();

    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }

    if (response.ok) {
      console.log(result);
      setError("");
      navigate("/posts");
    }
  };

  useEffect(() => {
    getSingleUser();
  }, [id]);

  return (
    <div className="flex justify-center">
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
                    w-8 h-8"
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

      <div className="w-full mt-10 max-w-lg bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Edit the data</h2>

        <form className="space-y-5" onSubmit={handleUpdate}>
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2 outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full border rounded-lg px-3 py-2 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Age</label>
            <input
              type="number"
              className="w-full border rounded-lg px-3 py-2 outline-none"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
