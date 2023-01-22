import React, {useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import useFirebase from '../../hook/useFirebase'
import Error from '../Error/Error'
import ItemDetail from '../ItemDetail/ItemDetail'
import Loading from '../Loading/Loading'


const ItemDetailContainer = () => {

    const {id} = useParams()
    const {getProduct,product, isLoading, products, getProducts} = useFirebase()
    const {addToCart} = useContext(CartContext)

    useEffect(() => {
        getProduct({id})
        getProducts()
        // eslint-disable-next-line
    }, [])

    const onAdd = (count) => {
        addToCart(product,count)
    }
    
    const ids = products.map( i => i.id)

    if (isLoading) {
        return <Loading /> 
    }

    return (
        <div className='container-fluid'>
        {
            !ids.includes(id) ? <Error /> : product && <ItemDetail product={product} onAdd={onAdd} />
        }
        </div>
    )
}

export default ItemDetailContainer