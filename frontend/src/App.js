import React, { Component } from "react";
import "./App.css";
import Weather from "./components/Weather";
import logo from "./logo.png";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Covid from "./components/Covid";
import News from "./components/News";
import Foot from "./components/Foot";
import Images from "./components/Images";
import Graph from './components/Graph';
import Form from './components/Formulaire';


function Dashboard() {
  return (
    <div>
      <h1></h1>
      <Container>

        <Row>
          <Col sm="1"></Col>
          <Col xs="12" sm="10" lg="10">
            <News />
            <br></br>
            <br></br>
          </Col>
          <Col sm="2"></Col>
        </Row>

        <Row>
        <Col sm="1"></Col>
          <Col xs="12" sm="12" lg="5">
            <Covid />
            <br></br>
            <br></br>
          </Col>
          <Col sm="1"></Col>
          <Col xs="12" sm="12" lg="5">
            <Images />
            <br></br>
            <br></br>
          </Col>
          
        </Row>

        <Row>
          <Col sm="1"></Col>
          <Col xs="12" sm="12" md="12" lg="10">
            <Foot />
            <br></br>
            <br></br>
          </Col>
          <Col sm="2"></Col>
        </Row>

        <Row>
          <Col sm="1"></Col>
          <Col xs="12" sm="10" lg="10">
            <Weather />
            <br></br>
            <br></br>
          </Col>
          <Col sm="2"></Col>
        </Row>

        <Row>
          <Col sm="1"></Col>
          <Col xs="12" sm="10">
            <h2 className="py-3">Presidential poll</h2>
            <Graph />
            <br></br>
            <br></br>
          </Col>
          <Col sm="2"></Col>
        </Row>

      </Container>
    </div>
  );
}

function Formulaire() {
  return (
    <div>
      {" "}
      <Form />
    </div>
  );
}

const routes = [
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/formulaire",
    component: Formulaire,
  },
];

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
function Routes(route) {
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
          <div className="haut-page"><img src={logo} className="logo-news" alt="logo" /></div>
          
          <Router>
            <Container>
              <div>
                <Row>
                  <Col sm="1"></Col>
                  <Col xs="12" sm="5">
                    <br></br>
                    <h4>
                      <Link to="/dashboard">
                        {" "}
                        <div className="button-dash"><div className="Select">Dashboard</div></div>
                      </Link>
                    </h4>
                    <br></br>
                  </Col>
                  <Col xs="12" sm="5">
                    <br></br>
                    <h4>
                      <Link to="/formulaire">
                        <div className="button-dash"><div className="Select">Poll</div></div>
                      </Link>
                    </h4>
                    <br></br>
                  </Col>
                </Row>

                {routes.map((route, i) => (
                  <Routes key={i} {...route} />
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
