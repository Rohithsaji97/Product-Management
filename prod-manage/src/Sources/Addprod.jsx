import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { BiSolidCartAdd } from "react-icons/bi";
import { FaFileImage, FaRegEdit } from "react-icons/fa";
import {
  MdOutlineKeyboardBackspace,
  MdStarRate,
  MdTitle,
} from "react-icons/md";
import { RiAddLargeFill } from "react-icons/ri";
import { TbBrandCarbon } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { productContext } from "../App";

function Addprod() {
  const navigate = useNavigate();
  const { products, setProducts, serial, setSerial } =
    useContext(productContext);

  const [values, setValues] = useState({
    id: serial,
    title: "",
    brand: "",
    price: "",
    description: "",
    images: "",
    rating: 0,
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const addProd = (e) => {
    e.preventDefault();
    setSerial(serial + 1);
    setProducts([...products, { ...values, id: serial }]);
    navigate("/home");
  };

  return (
    <div className="login-box" style={{ color: "white", height: "600px" }}>
      <Link to={"/home"}>
        <MdOutlineKeyboardBackspace className="back" />
      </Link>
      <BiSolidCartAdd className="shop-icon" />
      <Form onSubmit={addProd}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>Title</Form.Label>
            <InputGroup>
              <InputGroup.Text id="inputGroupPrepend">
                <MdTitle />
              </InputGroup.Text>
              <Form.Control
                name="title"
                required
                type="text"
                placeholder="Name of Product"
                onChange={handleChange}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Brand</Form.Label>
            <InputGroup>
              <InputGroup.Text id="inputGroupPrepend">
                <TbBrandCarbon />
              </InputGroup.Text>
              <Form.Control
                name="brand"
                required
                type="text"
                placeholder="Brand Name"
                onChange={handleChange}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Price</Form.Label>
            <InputGroup>
              <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
              <Form.Control
                name="price"
                type="number"
                placeholder="Enter amount"
                aria-describedby="inputGroupPrepend"
                onChange={handleChange}
                required
              />
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" className="mb-3">
            <Form.Label>Description</Form.Label>
            <InputGroup>
              <InputGroup.Text id="inputGroupPrepend">
                <FaRegEdit />
              </InputGroup.Text>
              <Form.Control
                as="textarea"
                rows={2}
                name="description"
                onChange={handleChange}
                type="text"
                placeholder="About"
                required
              />
            </InputGroup>
          </Form.Group>
          <Form.Group
            controlId="formFile"
            className="mb-3"
            style={{ width: "75%" }}
          >
            <Form.Label>Image</Form.Label>
            <InputGroup>
              <InputGroup.Text id="inputGroupPrepend">
                <FaFileImage />
              </InputGroup.Text>
              <Form.Control onChange={handleChange} name="images" type="file" />
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="3" className="mb-3">
            <Form.Label>Rating</Form.Label>
            <InputGroup>
              <InputGroup.Text id="inputGroupPrepend">
                <MdStarRate />
              </InputGroup.Text>
              <Form.Control
                name="rating"
                type="number"
                onChange={handleChange}
                placeholder="Rating"
                required
                max={5}
              />
            </InputGroup>
          </Form.Group>
        </Row>
        <Button type="submit" className="sub-btn">
          <RiAddLargeFill
            style={{ marginBottom: "5px", marginRight: "15px" }}
          />
          Add Product
        </Button>
      </Form>
    </div>
  );
}

export default Addprod;
