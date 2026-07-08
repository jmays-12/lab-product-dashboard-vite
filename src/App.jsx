import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  const sampleProducts = [
    { id: 1, name: 'Laptop', price: '$999', inStock: true },
    { id: 2, name: 'Phone', price: '$699', inStock: false },
    { id: 3, name: 'Tablet', price: '$499', inStock: true },
  ];

  const [products, setProducts] = useState(sampleProducts);

  const removeProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div>
      <h1>Product Dashboard</h1>

      <ProductList
        products={products}
        removeProduct={removeProduct}
      />
    </div>
  );
};

export default App;