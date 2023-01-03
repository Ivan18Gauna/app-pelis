import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieId" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
