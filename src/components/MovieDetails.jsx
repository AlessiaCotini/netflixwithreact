import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Spinner, Badge } from "react-bootstrap";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const movieResp = await fetch(
          `https://www.omdbapi.com/?apikey=bdbe4e58&i=${movieId}`,
        );
        const movieData = await movieResp.json();

        const commentsResp = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/${movieId}`,
        );

        if (commentsResp.ok) {
          const commentsData = await commentsResp.json();
          setComments(commentsData);
        }

        setMovie(movieData);
      } catch (error) {
        console.error("Errore nel caricamento:", error);
      } finally {
        setLoading(false);
      }
    };

    if (movieId) {
      fetchData();
    }
  }, [movieId]);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="danger" />
      </div>
    );
  }

  if (!movie || movie.Response === "False") {
    return (
      <Container className="text-white mt-5">
        <h2>Film non trovato!</h2>
        <p>L'ID {movieId} non ha prodotto risultati.</p>
      </Container>
    );
  }

  return (
    <Container className="py-5 text-white">
      <Row>
        <Col md={4}>
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="img-fluid border border-secondary shadow"
          />
        </Col>
        <Col md={8}>
          <h1 className="display-4 fw-bold">{movie.Title}</h1>
          <div className="mb-3">
            <Badge bg="danger" className="me-2">
              {movie.Year}
            </Badge>
            <span className="text-secondary">
              {movie.Runtime} • {movie.Genre}
            </span>
          </div>
          <p className="fs-5">{movie.Plot}</p>

          <hr className="my-5 bg-secondary" />

          <h3 className="mb-4">Recensioni</h3>

          {Array.isArray(comments) && comments.length > 0 ? (
            comments.map((c) => (
              <div
                key={c._id}
                className="p-3 mb-2 bg-dark rounded border border-secondary"
              >
                <p className="mb-1">
                  <strong>Voto: {c.rate}/5</strong>
                </p>
                <p className="mb-0 text-secondary italic">"{c.comment}"</p>
              </div>
            ))
          ) : (
            <p className="text-muted">Nessuna recensione trovata.</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
