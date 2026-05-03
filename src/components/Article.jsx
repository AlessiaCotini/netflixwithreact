import { Dropdown, Button, ButtonGroup, Container } from "react-bootstrap";

const Article = () => {
  return (
    <div className="bg-black px-4 py-2">
      <Container
        fluid
        className="px-0 d-flex justify-content-between align-items-center"
      >
        {/* PARTE SINISTRA */}
        <div className="d-flex align-items-center">
          <h5
            className="text-white mb-0 me-4 fw-bold"
            style={{ fontSize: "1.8rem" }}
          >
            Shows online
          </h5>

          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-genres"
              variant="outline-light"
              className="rounded-0 px-3 py-1 bg-black border-0 text-white btn-sm"
              style={{ fontSize: "1em" }}
            >
              Genres
            </Dropdown.Toggle>

            <Dropdown.Menu className="bg-black rounded-0 border-1 border-secondary netflix-dropdown shadow-lg">
              <Dropdown.Item href="#" className="text-white">
                Horror
              </Dropdown.Item>
              <Dropdown.Item href="#" className="text-white">
                Fantasy
              </Dropdown.Item>
              <Dropdown.Item href="#" className="text-white">
                Romantic
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        {/* PARTE DESTRA */}
        <div className="d-flex align-items-center">
          <ButtonGroup>
            {/* Bottone Lista */}
            <Button
              variant="dark"
              className="rounded-0 border-0 text-white px-3 py-1 d-flex align-items-center"
              style={{ backgroundColor: "transparent" }}
            >
              <i className="bi bi-list"></i>
            </Button>

            {/* Bottone */}
            <Button
              variant="dark"
              className="rounded-0 border-0 text-white px-3 py-1 d-flex align-items-center"
              style={{ backgroundColor: "transparent" }}
            >
              <i className="bi bi-grid-fill"></i>
            </Button>
          </ButtonGroup>
        </div>
      </Container>
    </div>
  );
};

export default Article;
