import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaBagShopping } from "react-icons/fa6";
import { productContext } from "../App";

function Navi() {
  const { setSearchVal } = useContext(productContext);
  const search = (e) => {
    setSearchVal(e.target.value);
  };

  return (
    <div>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        expand="lg"
        className="bg-body-tertiary"
      >
        <Container fluid>
          <Navbar.Brand href="#">
            <FaBagShopping
              style={{ margin: "2% 5% 4% 15%", fontSize: "40px" }}
            />{" "}
            Product Management
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-3"
                aria-label="Search"
                onChange={search}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navi;
