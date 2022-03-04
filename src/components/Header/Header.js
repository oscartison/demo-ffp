import React from "react";

import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

import { UserContext } from "../UserContext";

function Header() {
  const { user, setUser } = React.useContext(UserContext);

  let navigate = useNavigate();

  const handleLogout = () => {
    setUser("");
    navigate("/login");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <Navbar
      className="navbar navbar-default navbar-dark bg-success"
      expand={false}
    >
      <Container fluid>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />

        <div className="m-auto navbar-brand">
          <NavLink style={{ color: "white", textDecoration: "none" }} to="/">
            Demo
          </NavLink>
        </div>

        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Item>
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <div>
                  {user === "" ? (
                    <button
                      onClick={handleLogin}
                      className="btn btn-danger btn-lg btn-block"
                    >
                      {" "}
                      Log In{" "}
                    </button>
                  ) : (
                    <button
                      onClick={handleLogout}
                      className="btn btn-danger btn-lg btn-block"
                    >
                      {" "}
                      Log Out{" "}
                    </button>
                  )}
                </div>
              </Nav.Item>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;
