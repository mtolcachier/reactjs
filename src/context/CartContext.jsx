import React, { createContext, useState, useEffect } from 'react'

export const CartContext = createContext();

const localCart = JSON.parse(localStorage.getItem('cartArray') || '[]')

const CartProvider = ({children}) => {
    let initialValue = localCart.reduce((acc,curr) => acc + curr.count,0)
    let prices = localCart.map(i => i.item.price * i.count)
    let initialTotal = prices.reduce((acc,curr) => acc + curr,0)

    const [cartArray, setCartArray] = useState(localCart)
    const [productCount, setProductCount] = useState(initialValue)
    const [totalPrice, setTotalPrice] = useState(initialTotal);


    useEffect(() => {
        localStorage.setItem("cartArray", JSON.stringify(cartArray));
        setCartArray(cartArray);
        setProductCount(productCount);
        setTotalPrice(totalPrice);
    }, [cartArray,productCount,totalPrice]);

    const addToCart = (product,count) => {
        if (isInCart(product.name)) {
            const itemToUpdate = cartArray.findIndex((obj => obj.item.name === product.name));
            cartArray[itemToUpdate].count += count; 
            setProductCount(productCount + count)
            setTotalPrice((prevState) => prevState + product.price * count);
        } else {
            const newObj = {
                item: product,
                count
            }
            setCartArray([...cartArray, newObj])
            setProductCount(cartArray.reduce((acc,curr) => acc + curr.count,count))
            setTotalPrice((prevState) => prevState + newObj.item.price * newObj.count)
        }
    }

    const deleteItem = (name) => {
        const updatedCart = cartArray.filter((element) => element.item.name !== name);
        const totalCart = updatedCart.reduce((acc, curr) => acc + curr.item.price * curr.count, 0);
        const updateCount = updatedCart.reduce((acc,curr) => acc - curr.count,productCount)
        setCartArray(updatedCart)
        setProductCount(productCount - updateCount)
        setTotalPrice(totalCart);
    }

    const isInCart = (name) => {return cartArray.some(((element) => element.item.name === name))}

    const clearCart = () => {setCartArray([]);setProductCount(0)}

    return (
        <CartContext.Provider value={{cartArray, addToCart, deleteItem, productCount,totalPrice, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider