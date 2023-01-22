import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CartForm from "../CartForm/CartForm";
import CartItem from "../CartItem/CartItem";

const CartContainer = () => {
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
        <div className="container-fluid px-4 py-5 text-center ">
            <div className="row row-cols-1 row-cols-lg-2 align-items-center">
                <div className="col" style={{maxHeight:'75vh',overflowY:'auto'}}>
                    {cartArray.map((prod) => (
                        <CartItem
                        key={prod.item.name}
                        product={prod}
                        deleteItem={deleteItem}
                        />
                    ))}
            </div>
            <div className="col">
                <CartForm />
            </div>
            </div>
        </div>
        </>
    );
};

export default CartContainer;
