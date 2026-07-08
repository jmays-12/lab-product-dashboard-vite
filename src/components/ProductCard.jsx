import React from 'react';
//import styles from '../styles/ProductCard.module.css'; this is causing an error with the test because its receiving _outOfStockClass_c43253 instead of outOfStockClass

const ProductCard = ({ product, removeProduct }) => {
  return (
    <div className={!product.inStock ? "outOfStockClass" : ""}>
      <h2>{product.name}</h2>

      <p>{product.price}</p>

      <p>
        {product.inStock ? "In Stock" : "Out of Stock"}
      </p>

      <button onClick={() => removeProduct(product.id)}>
        Remove
      </button>
    </div>
  );
};

export default ProductCard;