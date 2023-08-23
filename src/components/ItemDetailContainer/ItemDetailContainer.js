import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../../asyncMock';
import ItemCount from '../ItemCount/ItemCount'

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Simulate fetching product details based on itemId
        const selectedProduct = productsData.find(product => product.id === itemId);
        setProduct(selectedProduct);
    }, [itemId]);

    if (!product) {
        return null;
    }

    return (
        <div className="item-detail-container">
        <h3>{product.nombre}</h3>
        <img src={product.img} alt={product.nombre} />
        <p>Precio: ${product.precio}</p>
        <p>{product.descripcion}</p>
        <ItemCount stock={product.stock} initial={1} onAdd={(cantidad)=> console.log('cantidad agregada',cantidad)}/>
        </div>
    );
};

export default ItemDetailContainer;

