import React from "react";
import { Link } from "react-router-dom";

const Item = ({product: {img1,id,price,brand,category}}) => {
    return (
        <div className="col px-5 py-4">
            <div className="card text-bg-dark h-100">
                <img src={img1} className="card-img-top" alt={id} />
                <div className="card-body">
                    <h5 className="card-title fs-6">{id}</h5>
                    <div className="card-text">
                        <p className="text-secondary">brand: {brand} </p>
                        <p>USD {price}</p>
                    </div>
                </div>
                <div className="card-footer mb-2">
                    <Link to={`/item-detail/${id}`} className="btn btn-danger ">See More Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Item;
