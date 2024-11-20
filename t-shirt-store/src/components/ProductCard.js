import React from "react";

function ProductCard({ product }) {
  return (
    <div className="card card-custom">
      <img src={product.img} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.price}</p>
        <button className="btn btn-danger">Buy Now</button>
      </div>
    </div>
  );
}

export default ProductCard;
