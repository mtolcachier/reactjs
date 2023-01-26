import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import useFirebase from "../../hook/useFirebase";
import Swal from "sweetalert2";

const CartForm = () => {
    const { totalPrice, clearCart } = useContext(CartContext);
    const { sendOrder } = useFirebase();
    const [buyerInfo, setBuyerInfo] = useState({
        firstName:'',
        lastName:'',
        email:'',
        emailConfirm:'',
    });

    const [emailCheck,setEmailCheck] = useState(false)

    const handleChange = (e) => {
        setEmailCheck(false)
        const name = e.target.name;
        const value = e.target.value;
        setBuyerInfo({...buyerInfo,[name]:value});
        
    };

    const handleBlur = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setBuyerInfo({...buyerInfo,[name]:value});
        let email1 = buyerInfo.email
        let email2 = buyerInfo.emailConfirm
        if (email1 === email2) {
            setEmailCheck(true)
        } else{
            setEmailCheck(false)
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation()
        if (emailCheck !== true) {
            Swal.fire({
                title: "Something's wrong!",
                text: "Please check your info",
                icon: "error",
                });
            return;
        }
        sendOrder({info: buyerInfo})
        setTimeout(() => {
            clearCart()
        }, 4000);
    };

    return (
        <>
        <div className="row row-cols-1 row-cols-lg py-3">
            <div className="col d-flex align-items-center justify-content-evenly fs-3">
            <p className="px-2">Order total: </p>
            <p className="text-danger px-2"> USD {totalPrice}</p>
            </div>
            <div className="col ps-5">
            <form onSubmit={onSubmit}>
                <div className="py-3">
                <label htmlFor="firstName">First Name: </label>
                <input 
                    type="text" 
                    name='firstName'
                    id="firstName"
                    value={buyerInfo.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required />
                </div>
                <div className="py-3">
                <label htmlFor="lastName">Last Name: </label>
                <input 
                    type="text" 
                    name="lastName"
                    id="lastName" 
                    value={buyerInfo.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required />
                </div>
                <div className="py-3">
                <label htmlFor="email">E-mail: </label>
                <input 
                    type="email"
                    name="email"
                    value={buyerInfo.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="email"
                    required />
                </div>
                <div className="py-3">
                <label htmlFor="emailConfirm">Confirm E-mail: </label>
                <input 
                    type="email"
                    name="emailConfirm"
                    value={buyerInfo.emailConfirm}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="emailConfirm"
                    required />
                </div>
                <div className="d-flex justify-content-center py-3">
                    <button type='sumbit' className="btn btn-danger" >Buy!</button>
                </div>
            </form>
            </div>
        </div>
        </>
    );
};

export default CartForm;
