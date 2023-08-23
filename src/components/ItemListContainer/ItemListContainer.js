import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../../asyncMock';

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate fetching products based on categoryId
    const filteredProducts = categoryId
      ? productsData.filter(product => product.categoria.toLowerCase() === categoryId)
      : [];
    setProducts(filteredProducts);
  }, [categoryId]);

  return (
    <div className="item-list-container">
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.nombre}</h3>
          <img src={product.img} alt={product.nombre} />
          <p>Precio: ${product.precio}</p>
          <Link to={`/item/${product.id}`}>Detalle</Link>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;


