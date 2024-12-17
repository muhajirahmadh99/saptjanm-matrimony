import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const Header = () => {
  return (
    <div className="">
      <Navbar expand="lg" className="bg-body-secondary">
        <Container className="p-3">
          <Navbar.Brand>
            <Link
              to={"/"}
              className="text-2xl font-medium no-underline text-red-800"
            >
              Saptjanm Matrimony
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll" className="flex lg:justify-end">
            <Nav className="text-xl gap-3 " navbarScroll>
              <Link
                className=" no-underline text-gray-900 max-md:mt-3 hover:text-red-800"
                to={"/"}
              >
                Home
              </Link>

              <Link
                className=" no-underline text-gray-900 hover:text-red-800"
                to={"/about"}
              >
                About
              </Link>
              <Link
                className=" no-underline text-gray-900  max-md:mb-4 hover:text-red-800"
                to={"/contact"}
              >
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
