import React, { createContext, useState } from 'react'

export const CartContext = createContext();

const CartProvider = ({children}) => {

    const [cartArray, setCartArray] = useState([])

    const addToCart = (product,count) => {

        if (isInCart(product.name)) {
            const itemToUpdate = cartArray.findIndex((obj => obj.item.name === product.name))
            cartArray[itemToUpdate].count += count 
        } else {
            console.log(`added to cart: ${product.name}, quantity: ${count}`)
            const newObj = {
                item: product,
                count
            }
            setCartArray([...cartArray, newObj])
        }
    }

    const deleteItem = (name) => {
        const updatedCart = cartArray.filter((element) => element.item.name !== name);
        setCartArray(updatedCart)
    }

    const clearCart = () => {
        setCartArray([])
    }

    const isInCart = (name) => {
        return cartArray.some(((element) => element.item.name === name))
    }

    return (
        <CartContext.Provider 
            value={{
                cartArray,
                addToCart,
                clearCart,
                deleteItem,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider