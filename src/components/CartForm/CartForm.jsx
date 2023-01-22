import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartForm = () => {

    const {totalPrice} = useContext(CartContext)

    return (

        <div className='row row-cols-1 row-cols-lg py-3'>
            <div className='col d-flex align-items-center justify-content-evenly fs-3'>
                <p className='px-2'>Order total: </p>
                <p className='text-danger px-2'> USD {totalPrice}</p>
            </div>
        </div>
    )
}

export default CartForm