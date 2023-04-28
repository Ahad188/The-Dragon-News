import React from "react";
import Header from "../Pages/Share/Header/Header";
import Footer from "../Pages/Share/Footer/Footer";
import LeftNav from "../Pages/Share/LeftNav/LeftNav";
import { Col, Container, Row } from "react-bootstrap";
import RightNav from "../Pages/Share/RightNav/RightNav";
import { Outlet } from "react-router-dom";

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
                <Outlet></Outlet>
          </Col>
          <Col lg={3}>
               <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
