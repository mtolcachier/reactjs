import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import useFirebase from '../../hook/useFirebase'
import ItemDetail from '../ItemDetail/ItemDetail'
import Loading from '../Loading/Loading'

const ItemDetailContainer = () => {

    const {id} = useParams()

    const {getProduct,product, isLoading} = useFirebase()

    useEffect(() => {
        getProduct({id})
        // eslint-disable-next-line
    }, [])

    return (
        <div className='container-fluid'>
            {isLoading ? <Loading/> : product && <ItemDetail product={product} /> }
        </div>
    )
}

export default ItemDetailContainer