import React, { useContext, useState } from "react";
import Table from "react-bootstrap/Table";
import { FaRegEye } from "react-icons/fa";
import Modaals from "../Components/Modaals";
import { MdOutlineKeyboardBackspace, MdOutlineModeEdit } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import { Button } from "react-bootstrap";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import { productContext } from "../App";
import Delete from "../Components/Delete";
import Navi from "../Components/Navi";

function Home() {
  const { products, setProducts, setEditProduct, searchVal } =
    useContext(productContext);

  const [delShow, setDelShow] = useState(false);
  const [delId, setDelId] = useState();
  const handleDelClose = () => setDelShow(false);
  const handleDelShow = (e) => {
    setDelId(e.id);
    setDelShow(true);
  };
  const confDel = () => {
    setProducts(products.filter((product) => product.id !== delId));
    setDelShow(false);
  };

  const [id, setid] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setid(id);
    setShow(true);
  };

  const handleEdit = (each) => {
    setEditProduct(each);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchVal.toLowerCase())
  );

  return (
    <>
      <Navi />
      <div className="table-box">
        <Link to={"/login"}>
          <MdOutlineKeyboardBackspace
            className="back"
            style={{ marginTop: "5%" }}
          />
        </Link>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className="table-head">TITLE</th>
              <th className="table-head">BRAND</th>
              <th className="table-head">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((each, index) => {
              return (
                <tr key={index}>
                  <td
                    style={{
                      border: "5px solid black",
                      textAlign: "center",
                      padding: "2.5%",
                    }}
                  >
                    {each.title}
                  </td>
                  <td
                    style={{
                      border: "5px solid black",
                      textAlign: "center",
                      padding: "2.5%",
                    }}
                  >
                    {each.brand}
                  </td>
                  <td
                    style={{ border: "5px solid black", textAlign: "center" }}
                  >
                    <FaRegEye
                      style={{
                        fontSize: "20px",
                        color: "blue",
                        margin: "10px",
                        cursor: "pointer",
                      }}
                      onClick={() => handleShow(each.id)}
                    />
                    <Link to={"/edit"}>
                      <MdOutlineModeEdit
                        style={{
                          fontSize: "20px",
                          color: "green",
                          margin: "10px",
                        }}
                        onClick={() => handleEdit(each)}
                      />
                    </Link>
                    <FaRegTrashCan
                      style={{
                        fontSize: "20px",
                        color: "red",
                        margin: "10px",
                        cursor: "pointer",
                      }}
                      onClick={() => handleDelShow(each)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Link to={"/addp"}>
          <Button
            style={{ marginLeft: "83%", marginTop: "2%" }}
            variant="primary"
          >
            <IoMdAdd style={{ color: "white", marginBottom: "2px" }} /> Add new
            field
          </Button>
        </Link>
        {show ? (
          <Modaals
            products={products}
            id={id}
            show={show}
            handleClose={handleClose}
          />
        ) : (
          ""
        )}
        {delShow ? (
          <Delete
            show={delShow}
            handleClose={handleDelClose}
            confDel={confDel}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Home;
