import { Component } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import LogoNetflix from "./LogoNetflix";
import AvatarIcon from "./AvatarIcon";
import { IoReorderThree } from "react-icons/io5";
import NavbarSearch from "./NavbarSearch";
import { Link } from "react-router";
class NetflixNavbar extends Component {
  render() {
    return (
      <Navbar
        expand="lg"
        variant="dark"
        className="netflix-navbar px-4 bg-black text-light"
        fluid="true"
      >
        <Container fluid className="px-0">
          {/* LOGO */}
          <Link to="/" className="me-4 nav-brand">
            <LogoNetflix />
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0">
            <IoReorderThree style={{ color: "white", fontSize: "2rem" }} />
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            {/* PARTE SINISTRA */}
            <Nav className="me-auto">
              <Link to="/" active className="nav-link text-light">
                Home
              </Link>
              <Link to="/tvshows" className="nav-link text-light">
                TV Shows
              </Link>
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
              <NavbarSearch />

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
                <Link to="/settings" className="nav-link text-light p-3">
                  Settings
                </Link>
                <Link to="/profile" className="nav-link text-light p-3">
                  Profile
                </Link>
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
