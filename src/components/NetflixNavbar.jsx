import { Component } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import LogoNetflix from "./LogoNetflix";
import AvatarIcon from "./AvatarIcon";

class NetflixNavbar extends Component {
  render() {
    return (
      <Navbar
        expand="lg"
        variant="dark"
        className="netflix-navbar px-4"
        fluid="true"
      >
        <Container fluid className="px-0">
          {/* LOGO */}
          <Navbar.Brand href="#" className="me-4">
            <LogoNetflix />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0">
            <ion-icon
              name="reorder"
              style={{ color: "white", fontSize: "1.8rem" }}
            ></ion-icon>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            {/* PARTE SINISTRA */}
            <Nav className="me-auto">
              <Nav.Link href="#" active className="netflix-link">
                Home
              </Nav.Link>
              <Nav.Link href="#" className="netflix-link">
                TV Shows
              </Nav.Link>
              <Nav.Link href="#" className="netflix-link">
                Movies
              </Nav.Link>
              <Nav.Link href="#" className="netflix-link">
                Recently Added
              </Nav.Link>
              <Nav.Link href="#" className="netflix-link">
                My List
              </Nav.Link>
            </Nav>

            {/* PARTE DESTRA */}
            <div className="d-flex align-items-center gap-3">
              <button className="btn text-white p-0">
                <ion-icon
                  name="search"
                  style={{ fontSize: "1.3rem" }}
                ></ion-icon>
              </button>

              <span
                className="text-white netflix-link d-none d-lg-block"
                style={{ fontSize: "0.85rem", cursor: "pointer" }}
              >
                KIDS
              </span>

              <Nav.Link href="#" className="p-0 text-white">
                <ion-icon
                  name="notifications"
                  style={{ fontSize: "1.3rem" }}
                ></ion-icon>
              </Nav.Link>

              {/* PROFILO */}
              <NavDropdown
                align="end"
                title={
                  <div className="d-inline-block">
                    <AvatarIcon />
                  </div>
                }
                id="profile-dropdown"
                className="netflix-dropdown"
              >
                <NavDropdown.Item href="#">Settings</NavDropdown.Item>
                <NavDropdown.Item href="#">Profile</NavDropdown.Item>
                <NavDropdown.Divider className="bg-secondary" />
                <NavDropdown.Item href="#" className="fw-bold">
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NetflixNavbar;
