import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from "../QZone/QZone";

const RightNav = () => {
  return (
    <div>
      <h4>Login with</h4>
      <Button variant="primary mb-3">
        <FaGoogle /> Login With Google
      </Button>
      <Button variant="secondary">
        <FaGithub /> Login With Github
      </Button>
      <div className="mt-3">
        <h4>Find us on</h4>
        <ListGroup className="fs-2">
          <ListGroup.Item><FaFacebook/> Facebook</ListGroup.Item>
          <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
          <ListGroup.Item><FaInstagram/> Instagram</ListGroup.Item>
        </ListGroup>
      </div>
      <div>
          <QZone></QZone>
      </div>
    </div>
  );
};

export default RightNav;
