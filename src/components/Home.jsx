import Article from "./Article";
import NetflixHero from "./NetflixHero";
import NetflixCarousel from "./NetflixCarousel";
import NetflixCarouselTwo from "../NetflixCarouselTwo";
import NetflixCarouselTree from "../NetflixCarouselTree";
const Home = () => {
  return (
    <div className="bg-black">
      <NetflixHero />
      <Article title="Movies" />
      <NetflixCarousel />
      <NetflixCarouselTwo />
      <NetflixCarouselTree />
    </div>
  );
};

export default Home;
