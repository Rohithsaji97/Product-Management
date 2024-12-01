import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FaShoppingCart } from "react-icons/fa";
import { Rate } from "antd";

function Modaals({ products, id, show, handleClose }) {
  const each = products[id - 1];
  // console.log(each);

  return (
    <div>
      <Modal className="modal-box" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: "30px" }}>{each.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ textAlign: "justify", fontSize: "15px" }}>
            {each.description}
          </div>
          <img
            style={{
              width: "100%",
              height: "300px",
              border: "5px solid black",
              borderRadius: "15px",
              margin: "15px 0px 15px 0px",
            }}
            src={each.images}
            alt={each.title}
          />
          <Rate
            style={{
              margin: "0px 0px 15px 5px",
              color: "black",
              fontSize: "25px",
            }}
            disabled
            defaultValue={each.rating}
          />
          <div
            style={{
              margin: "0px 0px 0px 5px",
              fontSize: "35px",
              fontWeight: "900",
              color: "rgb(5, 17, 63)",
            }}
          >
            ${each.price}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ backgroundColor: "rgb(5, 17, 63)" }}
            variant="primary"
            onClick={handleClose}
          >
            <FaShoppingCart /> Add to Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Modaals;
