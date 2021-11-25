import React, { Component } from "react";
import "./App.css";
import Weather from "./components/Weather";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

function Dashboard() {
  return (
    <div>
      <h1></h1>
      <Container>
        <Row>
          <Col sm="2"></Col>
          <Col xs="8" sm="10">
            <Weather />
            <br></br>
            <br></br>
          </Col>
          <Col sm="2"></Col>
        </Row>
      </Container>
    </div>
  );
}

const routes = [
  {
    path: "/dashboard",
    component: Dashboard,
  },
];

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

class App extends Component {
  render() {
    return (
      <div>
        <header className="Font">
          <Router>
            <Container>
              <div>
                <Row>
                  <Col xs="12" sm="6">
                    <br></br>
                    <h4>
                      <Link to="/dashboard">
                        {" "}
                        <div className="Select">Dashboard</div>
                      </Link>
                    </h4>
                    <br></br>
                  </Col>
                </Row>

                {routes.map((route, i) => (
                  <RouteWithSubRoutes key={i} {...route} />
                ))}
              </div>
            </Container>
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
