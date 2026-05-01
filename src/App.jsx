import NetflixNavbar from "./components/NetflixNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NetflixCarousel from "./components/NetflixCarousel";
import NetflixCarouselTwo from "./NetflixCarouselTwo";
import NetflixCarouselTree from "./NetflixCarouselTree";
function App() {
  return (
    <>
      <NetflixNavbar />
      <NetflixCarousel />
      <NetflixCarouselTwo />
      <NetflixCarouselTree />
    </>
  );
}

export default App;
