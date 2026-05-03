import { Component } from "react";
import { Container, Row, Col, Form, Dropdown, Button } from "react-bootstrap";
import { BsPencilFill } from "react-icons/bs";

class EditProfile extends Component {
  render() {
    return (
      <Container fluid className="text-white bg-black vh-100 py-5">
        <Row className="justify-content-center">
          {/* Colonna principale */}
          <Col xs={12} md={6}>
            <h1 className="display-4 fw-bold mb-0">Edit Profile</h1>
            <hr className="border-secondary mb-4" />

            <Row>
              {/* Avatar a sinistra */}
              <Col xs={4} className="position-relative mb-3">
                <img
                  src="../src/assets/avatar.png"
                  alt="profile"
                  className="img-fluid rounded shadow"
                  style={{ minWidth: "50px", maxWidth: "175px" }}
                />
                <div
                  className="position-absolute top-0 start-0 m-3 p-1 border rounded-circle bg-black d-flex align-items-center justify-content-center"
                  style={{ width: "25px", height: "25px", cursor: "pointer" }}
                >
                  <BsPencilFill size={12} />
                </div>
              </Col>

              {/* Form a destra */}
              <Col xs={12} md={8}>
                <Form>
                  {/* Nome Utente */}
                  <Form.Control
                    type="text"
                    placeholder="Service Student"
                    className="bg-secondary text-white rounded-0 border-0 mb-4"
                  />

                  {/* Lingua */}
                  <h6 className="text-secondary mb-2">Language:</h6>
                  <Dropdown className="mb-4">
                    <Dropdown.Toggle
                      variant="dark"
                      className="rounded-0 border-white text-white w-auto py-1 px-3"
                    >
                      English
                    </Dropdown.Toggle>
                    <Dropdown.Menu variant="dark">
                      <Dropdown.Item href="#">Español</Dropdown.Item>
                      <Dropdown.Item href="#">Italiano</Dropdown.Item>
                      <Dropdown.Item href="#">Français</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <hr className="border-secondary" />

                  {/* Maturity Settings */}
                  <h6 className="text-secondary mb-3">Maturity Settings:</h6>
                  <div className="bg-secondary bg-opacity-25 p-2 mb-2 w-75">
                    <p className="mb-0 fw-bold small">ALL MATURITY RATINGS</p>
                  </div>
                  <p className="small mb-3">
                    Show titles of all maturity ratings for this profile.
                  </p>
                  <Button
                    variant="outline-secondary"
                    className="rounded-0 text-secondary border-secondary px-4 py-1 mb-4"
                    size="sm"
                  >
                    EDIT
                  </Button>

                  <hr className="border-secondary" />

                  {/* Checkbox */}
                  <h6 className="text-secondary mb-3">Autoplay controls:</h6>
                  <Form.Check
                    type="checkbox"
                    id="autoplay-next"
                    label="Autoplay next episode in a series on all devices"
                    className="small mb-2"
                  />
                  <Form.Check
                    type="checkbox"
                    id="autoplay-previews"
                    label="Autoplay previews while browsing on all devices"
                    className="small mb-4"
                    defaultChecked
                  />
                </Form>
              </Col>
            </Row>

            <hr className="border-secondary mt-4" />

            {/* Bottoni Azione */}
            <div className="d-flex flex-wrap gap-2 justify-content-between mt-4">
              <Button
                variant="outline-secondary"
                className="rounded-0 fw-bold px-4 flex-grow-1 flex-md-grow-0"
                style={{ letterSpacing: "2px" }}
              >
                SAVE
              </Button>
              <Button
                variant="outline-secondary"
                className="rounded-0 px-4 flex-grow-1 flex-md-grow-0"
                style={{ letterSpacing: "2px" }}
              >
                CANCEL
              </Button>
              <Button
                variant="outline-secondary"
                className="rounded-0 px-4 flex-grow-1 flex-md-grow-0"
                style={{ letterSpacing: "2px" }}
              >
                DELETE PROFILE
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EditProfile;
