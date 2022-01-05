import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Nav, Navbar, Offcanvas, Container } from "react-bootstrap";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="nav-container">
        <Navbar.Brand as={Link} to="/">
          Sorting Visualizer
        </Navbar.Brand>
        <Nav className="nav-items me-auto">
          <Nav.Link as={Link} to="/bubble-sort" className="nav-link">
            Bubble Sort
          </Nav.Link>
          <Nav.Link as={Link} to="/insertion-sort" className="nav-link">
            Insertion Sort
          </Nav.Link>
          <Nav.Link as={Link} to="/merge-sort" className="nav-link">
            Merge Sort
          </Nav.Link>
          <Nav.Link as={Link} to="/quick-sort" className="nav-link">
            Quick Sort
          </Nav.Link>
          <Nav.Link as={Link} to="/selection-sort" className="nav-link">
            Selection Sort
          </Nav.Link>
        </Nav>
      </Container>

      <Button className="nav-hamburger" variant="dark" onClick={handleShow}>
        <span className="navbar-toggler-icon"></span>
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        className="bg-dark text-light"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Link to="/" className="nav-title text-light text-decoration-none">
              Sorting Visualizer
            </Link>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav.Link
            as={Link}
            onClick={handleClose}
            to="/bubble-sort"
            className="nav-link text-light"
          >
            Bubble Sort
          </Nav.Link>
          <Nav.Link
            as={Link}
            onClick={handleClose}
            to="/insertion-sort"
            className="nav-link text-light"
          >
            Insertion Sort
          </Nav.Link>
          <Nav.Link
            as={Link}
            onClick={handleClose}
            to="/merge-sort"
            className="nav-link text-light"
          >
            Merge Sort
          </Nav.Link>
          <Nav.Link
            as={Link}
            onClick={handleClose}
            to="/quick-sort"
            className="nav-link text-light"
          >
            Quick Sort
          </Nav.Link>
          <Nav.Link
            as={Link}
            onClick={handleClose}
            to="/selection-sort"
            className="nav-link text-light"
          >
            Selection Sort
          </Nav.Link>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
};

export default Header;
