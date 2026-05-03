import { Component } from "react";
import { Row, Col, Spinner, Alert, Container } from "react-bootstrap";

const link = "http://www.omdbapi.com/?apikey=bdbe4e58&s=";

class SlideCarouselTree extends Component {
  state = {
    movies: [],
    isLoading: true,
    isError: false,
  };

  getImg = () => {
    fetch(link + "italy")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero dei dati");
        }
      })
      .then((data) => {
        if (data.Search) {
          this.setState({
            movies: data.Search.slice(0, 6),
            isLoading: false,
          });
        } else {
          this.setState({ isLoading: false, isError: true });
        }
      })
      .catch((error) => {
        console.error("Errore:", error);
        this.setState({ isLoading: false, isError: true });
      });
  };

  componentDidMount() {
    this.getImg();
  }

  render() {
    return (
      <Container fluid className="px-4 mt-4">
        <h4 className="text-white mb-3">Today's Top 10 Movies in Italy</h4>

        {this.state.isLoading && (
          <div className="d-flex justify-content-center my-5">
            <Spinner animation="border" variant="danger" />
          </div>
        )}

        {this.state.isError && (
          <Alert variant="danger">Impossibile caricare i film.</Alert>
        )}

        {!this.state.isLoading && !this.state.isError && (
          <>
            <Row className="row-cols-2 row-cols-md-4 row-cols-lg-6 g-2">
              {this.state.movies.map((movie) => (
                <Col key={movie.imdbID}>
                  <div className="netflix-card-container">
                    <img
                      src={
                        movie.Poster !== "N/A"
                          ? movie.Poster
                          : "https://via.placeholder.com/300x300"
                      }
                      className="img-fluid rounded netflix-img"
                      alt={movie.Title}
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </>
        )}
      </Container>
    );
  }
}

export default SlideCarouselTree;
