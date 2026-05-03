import { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BsPaypal, BsBadgeHd } from "react-icons/bs";
import AvatarIcon from "./components/AvatarIcon";

class NetflixSettings extends Component {
  render() {
    return (
      <Container
        className="bg-black text-secondary p-4 shadow-sm"
        style={{ maxWidth: "1000px" }}
      >
        <h1 className="h2 mb-3">Account</h1>
        <hr />

        {/* SEZIONE 1: MEMBERSHIP & BILLING */}
        <Row className="mb-3">
          <Col xs={12} md={4}>
            <h6 className="text-secondary fw-bold">MEMBERSHIP & BILLING</h6>
            <Button
              variant="dark"
              className="rounded-0 border shadow-sm px-4 py-2 small"
            >
              Cancel Membership
            </Button>
          </Col>
          <Col xs={12} md={8}>
            <div className="d-flex justify-content-between border-bottom pb-2 mb-2">
              <span className="fw-bold">student@strive.school</span>
              <a href="#" className="text-info text-decoration-none small">
                Change account email
              </a>
            </div>
            <div className="d-flex justify-content-between border-bottom pb-2 mb-2">
              <span className="text-secondary">Password: *********</span>
              <a href="#" className="text-info text-decoration-none small">
                Change password
              </a>
            </div>
            <div className="d-flex justify-content-between border-bottom pb-2 mb-3">
              <span className="text-secondary">Phone: 321 044 1279</span>
              <a href="#" className="text-info text-decoration-none small">
                Change phone number
              </a>
            </div>

            <div className="d-flex justify-content-between border-bottom pb-2 mb-2">
              <div className="d-flex align-items-center">
                <BsPaypal className="me-2 text-primary" />
                <span className="fw-bold">PayPal</span>
              </div>
              <a href="#" className="text-info text-decoration-none small">
                Update payment info
              </a>
            </div>
            <div className="text-end mb-3">
              <a href="#" className="text-info text-decoration-none small">
                Billing details
              </a>
            </div>

            <div className="text-end">
              <a
                href="#"
                className="text-info text-decoration-none small d-block"
              >
                Redeem gift card or promo code
              </a>
              <a
                href="#"
                className="text-info text-decoration-none small d-block"
              >
                Where to buy gift cards
              </a>
            </div>
          </Col>
        </Row>
        <hr />

        {/* SEZIONE 2: PLAN DETAILS */}
        <Row className="mb-3">
          <Col xs={12} md={4}>
            <h6 className="text-secondary fw-bold">PLAN DETAILS</h6>
          </Col>
          <Col xs={12} md={8}>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <span className="fw-bold me-2">Premium</span>
                <BsBadgeHd size={20} />
              </div>
              <a href="#" className="text-info text-decoration-none small">
                Change plan
              </a>
            </div>
          </Col>
        </Row>
        <hr />

        {/* SEZIONE 3: SETTINGS */}
        <Row className="mb-3">
          <Col xs={12} md={4}>
            <h6 className="text-secondary fw-bold">SETTINGS</h6>
          </Col>
          <Col xs={12} md={8} className="d-flex flex-column gap-1">
            <a href="#" className="text-info text-decoration-none small">
              Parental controls
            </a>
            <a href="#" className="text-info text-decoration-none small">
              Test participation
            </a>
            <a href="#" className="text-info text-decoration-none small">
              Manage download devices
            </a>
            <a href="#" className="text-info text-decoration-none small">
              Activate a device
            </a>
            <a href="#" className="text-info text-decoration-none small">
              Recent device streaming activity
            </a>
            <a href="#" className="text-info text-decoration-none small">
              Sign out of all devices
            </a>
          </Col>
        </Row>
        <hr />

        {/* SEZIONE 4: MY PROFILE */}
        <Row>
          <Col xs={12} md={4}>
            <h6 className="text-secondary fw-bold">MY PROFILE</h6>
          </Col>
          <Col xs={12} md={8}>
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div className="d-flex align-items-center">
                <AvatarIcon />
                <span className="fw-bold">Strive Student</span>
              </div>
              <div className="d-flex flex-column text-end">
                <a href="#" className="text-info text-decoration-none small">
                  Manage profiles
                </a>
                <a href="#" className="text-info text-decoration-none small">
                  Add profile email
                </a>
              </div>
            </div>

            <Row>
              <Col xs={6} className="d-flex flex-column gap-1">
                <a href="#" className="text-info text-decoration-none small">
                  Language
                </a>
                <a href="#" className="text-info text-decoration-none small">
                  Playback settings
                </a>
                <a href="#" className="text-info text-decoration-none small">
                  Subtitle appearance
                </a>
              </Col>
              <Col xs={6} className="d-flex flex-column gap-1">
                <a href="#" className="text-info text-decoration-none small">
                  Viewing activity
                </a>
                <a href="#" className="text-info text-decoration-none small">
                  Ratings
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NetflixSettings;
