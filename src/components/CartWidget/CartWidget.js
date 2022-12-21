import React from 'react'

const CartWidget = () => {
    return (
        <button className="btn cart-btn position-relative me-3">
            <i className="fa-solid fa-cart-shopping mx-3" style={{color: 'white'}}></i>
            <span id="cart-quantity" className="mt-2 position-absolute translate-middle badge text-bg-light">0</span>
        </button>
    )
}

export default CartWidget