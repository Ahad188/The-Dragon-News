import React from "react";
import Header from "../Pages/Share/Header/Header";
import Footer from "../Pages/Share/Footer/Footer";
import LeftNav from "../Pages/Share/LeftNav/LeftNav";
import { Col, Container, Row } from "react-bootstrap";

const Layout = () => {
  return (
    <div>
      <Header />
      <Container>
         
        <Row>
          <Col lg={3}>
                <LeftNav></LeftNav>
          </Col>
          <Col lg={6}>
               <h1>main contain</h1>
          </Col>
          <Col lg={3}>
               <h1>right content</h1>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;