import { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

class NetflixFooter extends Component {
  render() {
    return (
      <footer className="bg-black pt-5" style={{ backgroundColor: "#141414" }}>
        <Container>
          <Row className="justify-content-center">
            {/* COLONNA CENTRALE DA QUI */}
            <Col xs={12} md={8} lg={6}>
              <div className="d-flex text-white mb-3 fs-4">
                <i className="bi bi-facebook me-3 cursor-pointer"></i>
                <i className="bi bi-instagram me-3 cursor-pointer"></i>
                <i className="bi bi-twitter me-3 cursor-pointer"></i>
                <i className="bi bi-youtube me-3 cursor-pointer"></i>
              </div>

              {/* LINKS */}
              <Row className="row-cols-2 row-cols-sm-4">
                <Col className="mb-3">
                  <ul
                    className="list-unstyled text-white"
                    style={{ fontSize: "12px", lineHeight: "2" }}
                  >
                    <li>Audio and Subtitles</li>
                    <li>Media Center</li>
                    <li>Privacy</li>
                    <li>Contact us</li>
                  </ul>
                </Col>
                <Col className="mb-3">
                  <ul
                    className="list-unstyled text-white"
                    style={{ fontSize: "12px", lineHeight: "2" }}
                  >
                    <li>Audio Description</li>
                    <li>Investor Relations</li>
                    <li>Legal Notices</li>
                  </ul>
                </Col>
                <Col className="mb-3">
                  <ul
                    className="list-unstyled text-white"
                    style={{ fontSize: "12px", lineHeight: "2" }}
                  >
                    <li>Help Center</li>
                    <li>Jobs</li>
                    <li>Cookie Preferences</li>
                  </ul>
                </Col>
                <Col className="mb-3">
                  <ul
                    className="list-unstyled text-white"
                    style={{ fontSize: "12px", lineHeight: "2" }}
                  >
                    <li>Gift Cards</li>
                    <li>Terms of Use</li>
                    <li>Corporate Information</li>
                  </ul>
                </Col>
              </Row>

              <div className="mb-3">
                <Button
                  variant="outline-secondary"
                  className="rounded-0 px-2 py-1"
                  style={{ fontSize: "12px" }}
                >
                  Service Code
                </Button>
              </div>

              <div className="text-white pb-4" style={{ fontSize: "10px" }}>
                © 1997-2026 Netflix, Inc.
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default NetflixFooter;
