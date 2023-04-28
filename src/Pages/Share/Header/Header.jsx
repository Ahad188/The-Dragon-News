import React,{ useContext } from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { FaUserCircle } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
const Header = () => {
       const {user} = useContext(AuthContext)
     console.log(user);
  return (
    <Container>
      <div className="text-center mt-2">
        <img src={logo} alt="" />
        <p>
          <small>Journalism Without Fear or Favour</small>
        </p>
        <h4>{moment().format("dddd, MMMM, YYYY")}</h4>
      </div>
      <div className="d-flex">
        <Button variant="danger">Danger</Button>{" "}
        <Marquee className="text-info" speed={50}>I can be a React component, multiple React components, or just some text.</Marquee>
      </div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            
            <Link to="/">Home</Link>
            
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
             
          </Nav>
          <Nav>
          {
           user && <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
          }

          {user ?
          <Button variant="secondary">Logout</Button> :
          <Link to="/login">
          <Button variant="secondary">Login</Button>
          </Link>
          }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Container>
  );
};

export default Header;
