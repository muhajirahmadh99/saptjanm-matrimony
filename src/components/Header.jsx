import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
const Header = () => {
  return (
    <div className="">
      <Navbar expand="lg" className="bg-body-secondary">
        <Container fluid className="p-3">
          <Navbar.Brand>Saptjanm Matrimony</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link>
                <Link className=" no-underline text-black" to={"/"}>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className=" no-underline text-black" to={""}>
                  Services
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className=" no-underline text-black" to={""}>
                  About
                </Link>
              </Nav.Link>
            </Nav>
            <Link to={"/login"}>
              <Button variant="outline-dark">Logout</Button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
