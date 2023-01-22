import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {

    const {productCount} = useContext(CartContext)

    return (
        <Link to={`/cart`}>
            <button className="btn cart-btn position-relative me-3">
                <i className="fa-solid fa-cart-shopping mx-3" style={{color: 'white'}} ></i>
                <span id="cart-quantity" className="mt-2 position-absolute translate-middle badge text-bg-light">{productCount}</span>
            </button>
        </Link>
    )
}

export default CartWidget