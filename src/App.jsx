import { Routes, Route, Navigate } from "react-router-dom";
import Movies from "./pages/Movies";
import AddMovie from "./pages/AddMovie";
import EditMovie from "./pages/EditMovie";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/movies" />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/add" element={<AddMovie />} />
      <Route path="/edit/:id" element={<EditMovie />} />
    </Routes>
  );
}

export default App;
