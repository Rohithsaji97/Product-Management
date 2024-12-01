import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Sources/Login";
import Register from "./Sources/Register";
import Home from "./Sources/Home";
import Addprod from "./Sources/Addprod";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Edit from "./Components/Edit";

const productContext = createContext();

function App() {
  const [searchVal, setSearchVal] = useState("");
  const [serial, setSerial] = useState(31);
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState([]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products`).then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  return (
    <div>
      <productContext.Provider
        value={{
          products,
          setProducts,
          serial,
          setSerial,
          editProduct,
          setEditProduct,
          searchVal,
          setSearchVal,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/addp" element={<Addprod />} />
            <Route path="/edit" element={<Edit />} />
          </Routes>
        </BrowserRouter>
      </productContext.Provider>
    </div>
  );
}

export default App;
export { productContext };
