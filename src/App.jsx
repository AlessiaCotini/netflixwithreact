import NetflixNavbar from "./components/NetflixNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NetflixCarousel from "./components/NetflixCarousel";
import NetflixCarouselTwo from "./NetflixCarouselTwo";
import NetflixCarouselTree from "./NetflixCarouselTree";
import Article from "./components/Article";
import NetflixFooter from "./NetflixFooter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NetflixSettings from "./NetflixSettings";
import EditProfile from "./EditProfile";
import MovieDetails from "./components/MovieDetails";
import Home from "./components/Home";
function App() {
  return (
    <BrowserRouter>
      <header>
        <NetflixNavbar />
      </header>
      <main className="bg-black bg-gradient-to-t text-light">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/tvshows"
            element={
              <>
                <Article />
                <NetflixCarouselTwo />
                <NetflixCarousel />
                <NetflixCarouselTree />
              </>
            }
          ></Route>
          <Route path="/movie-details/:movieId" element={<MovieDetails />} />
          <Route path="/profile" element={<EditProfile />}></Route>
          <Route path="/settings" element={<NetflixSettings />}></Route>
        </Routes>
      </main>
      <footer className="bg-dark text-light">
        <NetflixFooter />
      </footer>
    </BrowserRouter>
  );
}

export default App;
