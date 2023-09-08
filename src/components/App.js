import React from "react";
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container,Row } from "react-bootstrap";
import Counter from "./Counter";
import EventControll from "./EventControll";

function App() {
  return (
   <React.Fragment>
    <Container>
      <Row>
        <Col><Header/></Col>
        <Col><Counter/></Col>
   </Row>
   <EventControll/>
   </Container>
   </React.Fragment>
  );
}

export default App;
