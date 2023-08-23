import { useState } from "react"

const ItemCount = ({ stock, initial, onAdd }) => {

    const [cantidad, setCantidad] = useState(initial)

    const increment = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1)
        }
    }

    const decrement = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    return (
        <div>
            <div className="flex justify-center">
                <button type="button" onClick={decrement} className="drop-shadow-lg bg-zinc-800 rounded-md text-2xl w-6 p-1 m-3 text-stone-100">-</button>
                <h4 className="w-6 p-1 m-3 text-2xl">{cantidad}</h4>
                <button type="button" onClick={increment} className="drop-shadow-lg bg-zinc-800 rounded-md text-2xl w-6 p-1 m-3 text-stone-100">+</button>
            </div>
            <div>
                <button onClick={() => onAdd(cantidad)} disabled = {!stock} type="button" className="drop-shadow-lg bg-zinc-800 rounded-md p-3 m-3 text-stone-100">Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount