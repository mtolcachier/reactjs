import React, {useEffect} from "react";
import ItemList from "../ItemList/ItemList";
import Loading from '../Loading/Loading'
import useFirebase from "../../hook/useFirebase";
import { useParams } from "react-router-dom";


const ItemListContainer = ({ greeting }) => {

    const {products, getProducts, isLoading} = useFirebase()
    const {category} = useParams()

    useEffect(() => {
        getProducts()
        // eslint-disable-next-line
    }, []);

    const filtered = category ? products.filter((p) => p.category === category ) : products;

    return (
        <>
        {isLoading ? <Loading/> : 
            <div className="container-fluid text-center">
                <h1 className="py-5">{greeting}</h1>
                <ItemList products={filtered} />
            </div>
        }
        </>
    );
};

export default ItemListContainer;
