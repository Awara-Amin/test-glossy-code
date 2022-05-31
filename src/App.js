import React, { useState } from "react";
import "./index.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import HomeScreen from "./pages/HomeScreen";
import AboutUsScreen from "./pages/AboutUsScreen";
import ServiceScreen from "./pages/ServiceScreen";
import ContactScreen from "./pages/ContactScreen";
import ProjectScreen from "./pages/ProjectScreen";

// import NavDropdown from "react-bootstrap/NavDropdown";
// import Projects from "./screens/Projects";
// import ServiceScreen from "./screens/ServiceScreen";

function App() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" variant="dark" expand="lg" className="fixingNavbar">
            <Container>
              <Link to="/">
                <Navbar.Brand>Glossy Code</Navbar.Brand>
              </Link>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto w-100  justify-content-end">
                  <Link to="/" className="nav-link">
                    <i className="fa fa-heart" aria-hidden="true">
                      HOME
                    </i>
                  </Link>

                  <Link to="/aboutusscreen" className="nav-link">
                    ABOUT
                  </Link>

                  {/* <Link to="/servicescreen" className="nav-link">
                    SERVISES
                  </Link> */}
                  <Link to="/projectscreen" className="nav-link">
                    PROJECTS
                  </Link>

                  <Link to="/contactscreen" className="nav-link">
                    TALK TO US
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>

        <div
          className={
            sidebarIsOpen
              ? "active-nav side-navbar d-flex justify-content-between flex-wrap flex-column"
              : "side-navbar d-flex justify-content-between flex-wrap flex-column"
          }
        ></div>

        <main>
          <Container fluid className="paddingRemove">
            <Switch>
              <Route path="/" component={HomeScreen} exact></Route>

              <Route
                path="/service/:id"
                component={ServiceScreen}
                exact
              ></Route>

              <Route
                path="/contactscreen"
                component={ContactScreen}
                exact
              ></Route>

              <Route
                path="/aboutusscreen"
                component={AboutUsScreen}
                exact
              ></Route>

              <Route
                path="/projectscreen"
                component={ProjectScreen}
                exact
              ></Route>
            </Switch>
          </Container>
        </main>

        <footer>
          <div className="text-center-1">Created by Amini</div>
        </footer>
      </div>
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
