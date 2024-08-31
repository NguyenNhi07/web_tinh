import { Route } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import ListNovel from "./pages/ListNovel";
import ListFilm from "./pages/ListFilm";
import ReviewNovel from "./pages/ReviewNovel";
import ReviewFilm from "./pages/ReviewFilm";
import Ancient from "./pages/Ancient";
import Modern from "./pages/Modern";

function App() {
  return (
    <>
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/list-truyen" element={<ListNovel />} />
        <Route path="/list-phim" element={<ListFilm />} />
        <Route path="/review-truyen" element={<ReviewNovel />} />
        <Route path="/review-phim" element={<ReviewFilm />} />
        <Route path="/list-co-dai" element={<Ancient />} />
        <Route path="/list-hien-dai" element={<Modern />} />
      </Router>
    </>
  );
}

export default App;
