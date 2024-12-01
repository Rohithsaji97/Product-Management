import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { BiSolidCartAdd } from "react-icons/bi";
import { FaFileImage, FaRegEdit } from "react-icons/fa";
import {
  MdOutlineEdit,
  MdOutlineKeyboardBackspace,
  MdStarRate,
  MdTitle,
} from "react-icons/md";
import { TbBrandCarbon } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { productContext } from "../App";

function Edit() {
  const navigate = useNavigate();
  const { editProduct, setProducts, products } = useContext(productContext);

  const [values, setValues] = useState({
    id: editProduct.id,
    title: editProduct.title,
    brand: editProduct.brand,
    price: editProduct.price,
    description: editProduct.description,
    images: editProduct.images,
    rating: editProduct.rating,
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const editProd = (e) => {
    e.preventDefault();
    const updatedProducts = products.map((product) =>
      product.id === values.id ? { ...product, ...values } : product
    );
    setProducts(updatedProducts);
    navigate("/home");
  };

  return (
    <div>
      <div className="login-box" style={{ color: "white", height: "600px" }}>
        <Link to={"/home"}>
          <MdOutlineKeyboardBackspace className="back" />
        </Link>
        <BiSolidCartAdd className="shop-icon" />
        <Form onSubmit={editProd}>
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
                  defaultValue={editProduct.title}
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
                  defaultValue={editProduct.brand}
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
                  defaultValue={editProduct.price}
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
                  defaultValue={editProduct.description}
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
                <Form.Control
                  onChange={handleChange}
                  name="images"
                  type="file"
                />
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
                  defaultValue={editProduct.rating}
                  required
                  max={5}
                />
              </InputGroup>
            </Form.Group>
          </Row>
          <Button type="submit" className="sub-btn">
            <MdOutlineEdit
              style={{ marginBottom: "5px", marginRight: "15px" }}
            />
            Edit Product
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Edit;
