import cart from './assets/shopping-cart.png'

const CartWidget = () => {
    return (
        <div className="flex self-center">
            <a href="../.././public/index.html"><img className="me-4 w-10 h-10" src={cart} alt="Cart"/></a>
            <p className="self-center me-8 text-stone-100 text-xl">0</p>
        </div>
    )
}

export default CartWidget