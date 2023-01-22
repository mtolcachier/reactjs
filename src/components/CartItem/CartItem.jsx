import React from "react";

const CartItem = ({ product, deleteItem }) => {
    const unitPrice = product.item.price;
    const totalItemPrice = unitPrice * product.count;

    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-4 border border-secondary align-items-center py-3">
            <div className="col">
                <img
                className="d-flex mx-auto"
                src={product.item.img1}
                alt={product.item.name}
                style={{ maxWidth: "150px" }}
                />
            </div>
            <div className="col">
                <p>{product.item.name}</p>
            </div>
            <div className="col">
                <p>
                    Units: {product.count} <br/>
                    Price: USD {totalItemPrice}
                </p>
            </div>
            <div className="col">
                <button onClick={() => deleteItem(product.item.name)} className='btn btn-dark' ><i className="fa-solid fa-trash fa-inverse" ></i></button>
            </div>
        </div>
    );
};

export default CartItem;
