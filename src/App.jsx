import NetflixNavbar from "./components/NetflixNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NetflixCarousel from "./components/NetflixCarousel";
import NetflixCarouselTwo from "./NetflixCarouselTwo";
import NetflixCarouselTree from "./NetflixCarouselTree";
import Article from "./components/Article";
import NetflixFooter from "./NetflixFooter";
function App() {
  return (
    <>
      <header>
        <NetflixNavbar />
      </header>
      <main className="bg-black text-white">
        <Article />
        <NetflixCarousel />
        <NetflixCarouselTwo />
        <NetflixCarouselTree />
      </main>
      <footer className="bg-black text-white">
        <NetflixFooter />
      </footer>
    </>
  );
}

export default App;
