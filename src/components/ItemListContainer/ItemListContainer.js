import { useState, useEffect } from 'react';
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
        <div className="flex justify-center">
        {products.map(product => (
            <div key={product.id}>
            <h3 className="drop-shadow-lg text-zinc-800 rounded-md text-2xl p-1 m-3 bg-stone-100">{product.nombre}</h3>
            <img src={product.img} alt={product.nombre} className="w-72 h-72 m-5" />
            <p>Precio: ${product.precio}</p>
            <Link to={`/item/${product.id}`}><button type="button" className="drop-shadow-lg bg-zinc-800 rounded-md text-2xl p-1 m-3 text-stone-100">Detalle</button></Link>
            </div>
        ))}
        </div>
    );
    };

export default ItemListContainer;


