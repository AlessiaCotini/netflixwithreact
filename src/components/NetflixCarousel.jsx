import { Component } from "react";
import { Carousel, Container } from "react-bootstrap";
import SlideCarousel from "./SlideCarousel";

class NetflixCarousel extends Component {
  render() {
    return (
      <Container fluid className="px-4 mb-5">
        <h4>New releases</h4>
        <Carousel
          id="carouselExample2"
          indicators={false}
          interval={null}
          className="netflix-carousel"
        >
          {/* PRIMA SLIDE*/}
          <Carousel.Item>
            <SlideCarousel />
          </Carousel.Item>

          {/* SECONDA SLIDE */}
          <Carousel.Item>
            <SlideCarousel />
          </Carousel.Item>
        </Carousel>
      </Container>
    );
  }
}

export default NetflixCarousel;
