import React, { useState, useEffect } from "react";

import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const storedUser = localStorage.getItem("user");

  const [user, setUser] = useState(storedUser);

  useEffect(() => {
    localStorage.setItem("user", user);
  }, [user]);

  let navigate = useNavigate();

  const handleLogout = () => {
    setUser("");
    handleLogin();
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
