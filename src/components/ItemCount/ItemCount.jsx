import React from 'react'
import useCount from '../../hook/useCount'

const ItemCount = ({onAdd}) => {

    const {count,increase,decrease} = useCount()

    return (
        <div>
            <div className='row align-items-center px-3 text-center'>
                
                <div className='col'>
                    <button className='btn btn-warning' onClick={decrease}>
                        -
                    </button>
                </div>
                <div className='col'>
                    <div className='col px-2'>{count}</div>
                </div>
                <div className='col'>
                <button className='col btn btn-warning px-2' onClick={increase}>
                    +
                </button>
                </div>
                <div className='col'>
                <button onClick={()=> onAdd(count)} className="col btn btn-success px-2">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount