import { useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import MovieTable from "../components/MovieTable";
import Pagination from "../components/Pagination";
import Notification from "../components/Notification";
import { Link } from "react-router-dom";

const Movies = () => {
  const { movies, message, setMessage } = useContext(MovieContext);
  const [currentPage, setCurrentPage] = useState(1);

  const moviesPerPage = 5;
  const totalPages = Math.ceil(movies.length / moviesPerPage);

  const start = (currentPage - 1) * moviesPerPage;
  const currentMovies = movies.slice(start, start + moviesPerPage);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Notification message={message} clear={() => setMessage("")} />

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-indigo-700">
          🎬 Movie Dashboard
        </h1>

        <Link to="/add" className="btn-primary">
          + Add Movie
        </Link>
      </div>

      <div className="card">
        <MovieTable movies={currentMovies} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Movies;


