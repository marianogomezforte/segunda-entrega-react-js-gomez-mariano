import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {
    return (
        <div className="flex flex-col bg-slate-400">
            <h3 className="drop-shadow-lg text-zinc-800 rounded-md text-2xl p-1 m-3 bg-stone-100 w-96 self-center">{product.nombre}</h3>
            <img src={product.img} alt={product.nombre} className="self-center w-96 h-96 rounded-md"/>
            <p>Precio: ${product.precio}</p>
            <p>{product.descripcion}</p>
            <ItemCount stock={product.stock} initial={1} onAdd={(cantidad)=> console.log('cantidad agregada',cantidad)}/>
        </div>
    );
};

export default ItemDetail;
