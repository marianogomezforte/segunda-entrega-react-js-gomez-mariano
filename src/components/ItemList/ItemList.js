import { Link } from "react-router-dom"

const ItemList = ({ products }) => {
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
    )
}

export default ItemList