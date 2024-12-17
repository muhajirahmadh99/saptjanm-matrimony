import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <div className="">
      <Navbar expand="lg" className="bg-body-secondary">
        <Container className="p-3">
          <Navbar.Brand>
            <NavLink
              to="/"
              className="text-2xl font-medium no-underline text-red-800"
            >
              Saptjanm Matrimony
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll" className="flex lg:justify-end">
            <Nav className="text-xl gap-3" navbarScroll>
              <NavLink
                exact
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? " text-red-800 no-underline"
                    : "no-underline text-gray-900 max-md:mt-3 hover:text-red-800 hover:underline"
                }
              >
                Home
              </NavLink>
              <NavLink
                exact
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? " text-red-800 no-underline"
                    : "no-underline text-gray-900 max-md:mt-3 hover:text-red-800 hover:underline"
                }
              >
                Dashboard
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? " text-red-800 no-underline"
                    : "no-underline text-gray-900 hover:text-red-800 hover:underline"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? " text-red-800 no-underline"
                    : "no-underline text-gray-900 max-md:mb-4 hover:text-red-800 hover:underline"
                }
              >
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
