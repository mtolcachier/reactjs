import React, {useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import useFirebase from '../../hook/useFirebase'
import ItemDetail from '../ItemDetail/ItemDetail'
import Loading from '../Loading/Loading'

const ItemDetailContainer = () => {

    const {id} = useParams()

    const {getProduct,product, isLoading} = useFirebase()
    const {addToCart} = useContext(CartContext)

    useEffect(() => {
        getProduct({id})
        // eslint-disable-next-line
    }, [])

    const onAdd = (count) => {
        addToCart(product,count)
    }

    return (
        <div className='container-fluid'>
            {isLoading ? <Loading/> : product && <ItemDetail product={product} onAdd={onAdd} /> }
        </div>
    )
}

export default ItemDetailContainer