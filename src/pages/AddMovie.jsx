import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import MovieForm from "../components/MovieForm";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  const { addMovie } = useContext(MovieContext);
  const navigate = useNavigate();

  return (
    <MovieForm
      initialData={{ title: "", genre: "", price: "" }}
      onSubmit={(movie) => {
        addMovie(movie);
        navigate("/movies");
      }}
    />
  );
};

export default AddMovie;
