import { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([
    { id: 1, title: "Avatar", genre: "Sci-Fi", price: 200 },
    { id: 2, title: "Inception", genre: "Action", price: 180 },
  ]);

  const [message, setMessage] = useState("");

  const addMovie = (movie) => {
    setMovies([...movies, { ...movie, id: Date.now() }]);
    setMessage("Movie Added Successfully");
  };

  const updateMovie = (updatedMovie) => {
    setMovies(
      movies.map((m) => (m.id === updatedMovie.id ? updatedMovie : m))
    );
    setMessage("Movie Updated Successfully");
  };

  return (
    <MovieContext.Provider
      value={{ movies, addMovie, updateMovie, message, setMessage }}
    >
      {children}
    </MovieContext.Provider>
  );
};
