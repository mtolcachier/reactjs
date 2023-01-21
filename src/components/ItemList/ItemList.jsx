import React from 'react'
import Item from '../Item/Item'

const ItemList = ({products}) => {

  return (
    <>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 py-3'>
      {products.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}

export default ItemList