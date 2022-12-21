import React from "react";
import './Item.css'
import { Link } from "react-router-dom";

const Item = (props) => {
    const { id, name, src, price } = props;
    return (
        <Link key={id} to={`/item/detail/${id}`} className="group col text-black">
            <div className="card mx-auto h-100" style={{width: "18rem"}}>
                <div>
                    <img src={src} className="card-img-top" alt={name} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">U$D {price}</p>
                </div>
            </div>
        </Link>
    );
};

export default Item;
