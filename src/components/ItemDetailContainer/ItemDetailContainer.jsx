import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = (props) => {
    const {id} = useParams()

    const {name,brand,src,price,details} = props
    console.log(props)
    

    
    return (
        <div className='container-fluid'>
            <div key={id} className='row'>
                <div className='col' id={id}>
                    <img src={src} alt={name} />
                </div>
                <div>
                    <h1>{name} </h1>
                    <span>{brand} </span>
                    <span>${price}</span>
                    <p>{details} </p>
                </div>
            </div>
            <div>Hola</div>
        </div>
    )
}

export default ItemDetailContainer