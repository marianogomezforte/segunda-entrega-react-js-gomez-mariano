import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../../asyncMock';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const filteredProducts = categoryId
        ? productsData.filter(product => product.categoria.toLowerCase() === categoryId)
        : productsData;
        setProducts(filteredProducts);
    }, [categoryId]);

    return (
        <div className='flex flex-col'>
            {categoryId ? <ItemList products={products} /> : <ItemList products={productsData} />}
        </div>
    );
};

export default ItemListContainer;


