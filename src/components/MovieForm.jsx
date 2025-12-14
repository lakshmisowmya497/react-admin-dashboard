import { useState } from "react";

const MovieForm = ({ initialData, onSubmit }) => {
  const [movie, setMovie] = useState(initialData);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!movie.title || !movie.genre || !movie.price) {
      setError("⚠️ All fields are required");
      return;
    }
    onSubmit(movie);
  };

  return (
    <div className="max-w-md mx-auto mt-10 card">
      <h2 className="text-xl font-bold mb-4 text-indigo-700">
        🎬 Movie Form
      </h2>

      {error && (
        <div className="bg-red-100 text-red-600 p-2 rounded mb-3">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          placeholder="Movie Title"
          className="input"
          onChange={handleChange}
        />
        <input
          name="genre"
          placeholder="Genre"
          className="input"
          onChange={handleChange}
        />
        <input
          name="price"
          type="number"
          placeholder="Ticket Price"
          className="input"
          onChange={handleChange}
        />

        <button className="btn-primary w-full">
          Save Movie
        </button>
      </form>
    </div>
  );
};

export default MovieForm;
