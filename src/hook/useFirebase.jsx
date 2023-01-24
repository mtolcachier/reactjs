import { db } from "../firebase";
import { useState } from "react";
import { collection, getDocs, doc, getDoc, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";

const useFirebase = () => {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const getProducts = async () => {
        setIsLoading(true);
        try {
            const fetchItems = await getDocs(collection(db, "products"));
            const response = fetchItems.docs.map((doc) => {
                const data = doc.data();
                return { id: doc.id, ...data };
            });
            setProducts(response);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    const getProduct =  async ({id}) => {
        setIsLoading(true)
        try {
            const document = doc(db,"products",id)
            const response = await getDoc(document)
            let result =response.data()
            setProduct({id:response.id,...result})
            setIsLoading(false)
    
        } catch (error) {
            console.log(error)
        }
    };

    const sendOrder = async ({info}) => {
        try {
            const col = collection(db,"orders")
            const order =  await addDoc(col,info)
            console.log(order.id)
            return (
                Swal.fire({
                    title: "Thank you for shopping!",
                    text: `You order is ${order.id}`,
                    icon: "success",
                }))
        } catch (error) {
            console.log(error)
    }
}

    return { 
        products,
        getProducts,
        isLoading,
        product,
        getProduct,
        sendOrder
    };
};

export default useFirebase;
