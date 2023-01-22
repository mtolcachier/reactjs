import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { cartArray, deleteItem } = useContext(CartContext);

    if (cartArray.length === 0) {
        return (
            <div className="text-center py-5 my-5">
                <h1 className=" py-5">Your Cart is empty! </h1>
                <Link to={`/`} className='btn btn-dark'>Back to Home Page</Link>
            </div>
        )
    }

    return (
        <>
        <div className="container-fluid px-4 py-5 text-center">
            {cartArray.map((prod) => (
                <CartItem
                key={prod.item.name}
                product={prod}
                deleteItem={deleteItem}
                />
            ))}
        </div>
        </>
    );
};

export default Cart;
