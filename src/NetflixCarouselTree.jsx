import { Component } from "react";
import { Carousel, Container } from "react-bootstrap";
import SlideCarouselTree from "./SlideCarouselTree";

class NetflixCarouselTwo extends Component {
  render() {
    return (
      <Container fluid className="px-4">
        <Carousel
          id="carouselExample2"
          indicators={false}
          interval={null}
          className="netflix-carousel"
        >
          {/* PRIMA SLIDE*/}
          <Carousel.Item>
            <SlideCarouselTree />
          </Carousel.Item>

          {/* SECONDA SLIDE */}
          <Carousel.Item>
            <SlideCarouselTree />
          </Carousel.Item>
        </Carousel>
      </Container>
    );
  }
}

export default NetflixCarouselTwo;
