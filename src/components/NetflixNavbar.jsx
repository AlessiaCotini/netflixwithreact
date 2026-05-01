import { Component } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

class NetflixNavbar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" className="p-2">
        <Container fluid>
          {/* LOGO*/}
          <Navbar.Brand href="#">
            <img
              src="./Netflix-assets/assets/netflix_logo.png"
              width="100px"
              alt="logo"
            />
          </Navbar.Brand>

          {/*MENU */}
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <ion-icon
              name="reorder"
              style={{ color: "white", fontSize: "1.5rem" }}
            ></ion-icon>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            {/*PARTE SINISTRA*/}
            <Nav className="me-auto mb-2 mb-lg-0">
              <Nav.Link href="#" active>
                Home
              </Nav.Link>
              <Nav.Link href="#">TV Shows</Nav.Link>
              <Nav.Link href="#">Movies</Nav.Link>
              <Nav.Link href="#">Recently Added</Nav.Link>
              <Nav.Link href="#">My List</Nav.Link>
            </Nav>

            {/*PARTE DESTRA */}
            <div className="d-flex align-items-center">
              <button className="btn text-white me-2">
                <ion-icon name="search"></ion-icon>
              </button>

              <Nav.Link href="#" className="me-2">
                <img
                  src="./Netflix-assets/assets/kids_icon.png"
                  width="30px"
                  alt="kids"
                />
              </Nav.Link>

              <Nav.Link href="#" className="me-2 text-white">
                <ion-icon name="notifications-outline"></ion-icon>
              </Nav.Link>
              {/*PROFILO */}
              <NavDropdown
                align="end"
                title={
                  <img
                    src="./Netflix-assets/assets/avatar.png"
                    width="30px"
                    alt="avatar"
                  />
                }
                id="profile-dropdown"
              >
                <NavDropdown.Item
                  href="./settings.html"
                  className="text-danger"
                >
                  Settings
                </NavDropdown.Item>
                <NavDropdown.Item href="./profile.html" className="text-danger">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item href="#" className="text-danger">
                  Account
                </NavDropdown.Item>
                <NavDropdown.Item href="#" className="text-danger">
                  Assistece
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#" className="text-danger fw-bold">
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
