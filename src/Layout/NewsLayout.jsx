import React from "react";
import Header from "../Pages/Share/Header/Header";
import Footer from "../Pages/Share/Footer/Footer";

import { Col, Container, Row } from "react-bootstrap";
import RightNav from "../Pages/Share/RightNav/RightNav";
import { Outlet } from "react-router-dom";

const NewsLayout = () => {
  return (
     <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={9}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
  );
};

export default NewsLayout;
