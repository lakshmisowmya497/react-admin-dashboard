import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { useParams, useNavigate } from "react-router-dom";
import MovieForm from "../components/MovieForm";

const EditMovie = () => {
  const { id } = useParams();
  const { movies, updateMovie } = useContext(MovieContext);
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id === Number(id));

  return (
    <MovieForm
      initialData={movie}
      onSubmit={(data) => {
        updateMovie({ ...data, id: movie.id });
        navigate("/movies");
      }}
    />
  );
};

export default EditMovie;
