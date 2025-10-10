import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Offcanvas } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#" style={{ color: "green" }} className="fs-4 fs-md-6">
              <img src="/icon.png" style={{ width: "50px", height: "40px" }} alt="logo" />
              CleanCity+
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} style={{ color: "green" }}>
                  CleanCity+
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1">

                  {/* Active link handled with NavLink */}
                  <Nav.Link
                    as={NavLink}
                    to="/"
                    className="p-4 p-md-2 fs-4"
                    style={({ isActive }) => ({
                      color: isActive ? "green" : "black",
                      textDecoration: "none", fontWeight: isActive? "500":"400"
                    })}
                  >
                    Home
                  </Nav.Link>

                  <Nav.Link
                    as={NavLink}
                    to="/wastes"
                    className="p-4 p-md-2 fs-4"
                    style={({ isActive }) => ({
                      color: isActive ? "green" : "black",
                      textDecoration: "none", fontWeight: isActive? "500":"400"
                    })}
                  >
                    Waste Categories
                  </Nav.Link>

                  <Nav.Link
                    as={NavLink}
                    to="/recycling-tracker"
                    className="p-4 p-md-2 fs-4"
                    style={({ isActive }) => ({
                      color: isActive ? "green" : "black",
                      textDecoration: "none", fontWeight: isActive? "500":"400"
                    })}
                  >
                    Recycling Tracker
                  </Nav.Link>

                  <Nav.Link
                    as={NavLink}
                    to="/pledge"
                    className="p-4 p-md-2 fs-4"
                    style={({ isActive }) => ({
                      color: isActive ? "green" : "black",
                      textDecoration: "none", fontWeight: isActive? "500":"400"
                    })}
                  >
                    Pledge
                  </Nav.Link>

                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default NavBar;
