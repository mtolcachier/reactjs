import React from 'react'
import { Link } from 'react-router-dom'

const CartWidget = () => {

    return (
        <Link to={`/cart`}>
            <button className="btn cart-btn position-relative me-3">
                <i className="fa-solid fa-cart-shopping mx-3" style={{color: 'white'}} ></i>
                <span id="cart-quantity" className="mt-2 position-absolute translate-middle badge text-bg-light">0</span>
            </button>
        </Link>
    )
}

export default CartWidget