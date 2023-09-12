import React from "react";
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import EventControll from "./EventControll";
import { Container } from "react-bootstrap";

function App() {
  return (
   <React.Fragment>
    <Container>
    <Header/>
   <EventControll/>
   </Container>
   </React.Fragment>
  );
}

export default App;
