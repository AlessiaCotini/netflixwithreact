import { Component } from "react";
import { Carousel, Container } from "react-bootstrap";
import SlideCarouselTwo from "./components/SlideCarouselTwo";

class NetflixCarouselTwo extends Component {
  render() {
    return (
      <Container fluid className="px-4 mb-5">
        <h4>Whatch it again</h4>
        <Carousel
          id="carouselExample2"
          indicators={false}
          interval={null}
          className="netflix-carousel"
        >
          {/* PRIMA SLIDE*/}
          <Carousel.Item>
            <SlideCarouselTwo />
          </Carousel.Item>

          {/* SECONDA SLIDE */}
          <Carousel.Item>
            <SlideCarouselTwo />
          </Carousel.Item>
        </Carousel>
      </Container>
    );
  }
}

export default NetflixCarouselTwo;
