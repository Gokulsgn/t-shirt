import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

function App() {
  const products = [
    {
      id: 1,
      name: "Red T-Shirt",
      price: "$20",
      img: "https://via.placeholder.com/150/FF0000/FFFFFF",
    },
    {
      id: 2,
      name: "Black T-Shirt",
      price: "$25",
      img: "https://via.placeholder.com/150/000000/FFFFFF",
    },
  ];

  return (
    <div className="app">
      <Navbar />
      <div className="container mt-4">
        <h1 className="text-center mb-4">Our T-Shirts</h1>
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
