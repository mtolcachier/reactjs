import React from "react";

const ItemDetail = ({
    product: { name, brand, price, img1, description, category },
    }) => {


    return (
        <div className="row px-4 py-5">
            <div className="col px-5">
                <div className="card text-bg-dark mb-3">
                    <div className="row g-0 align-items-center">
                        <div className="col-md-4 ">
                            <img src={img1} className="img-fluid mx-auto d-block rounded-start " alt={name} />
                        </div>
                        <div className="col-md-8 px-4">
                            <div className="card-body ">
                                <h5 className="card-title"><u>{name}</u></h5>
                                <p className="text-secondary">{brand}, {category} </p>
                                <p className="card-text text-lowercase">
                                    {description}
                                </p>
                                <p className="fs-4">USD {price} </p>
                                <p className="card-text">ADD BUTTON</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
