import { Link } from "react-router-dom";
import { useState } from "react";

const MovieTable = ({ movies }) => {
  const [search, setSearch] = useState("");

  const filtered = movies.filter((m) =>
    m.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="🔍 Search movie..."
        className="input mb-4"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg">
          <thead className="bg-indigo-100">
            <tr>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Genre</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((movie) => (
              <tr
                key={movie.id}
                className="border-t hover:bg-gray-50"
              >
                <td className="p-3">{movie.title}</td>
                <td className="p-3">{movie.genre}</td>
                <td className="p-3">₹{movie.price}</td>
                <td className="p-3 text-center">
                  <Link
                    to={`/edit/${movie.id}`}
                    className="text-indigo-600 hover:underline"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MovieTable;
