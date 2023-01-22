import React from 'react'
import { Link } from 'react-router-dom'

const Error = (message) => {
    return (
        <div className='text-center py-5'>
            <h1 className='py-5'>Oops! </h1>
            <h2 className='py-3'>Its seems we don't have what you are looking for... </h2>
            <h3 className='py-5'>Please try later</h3>
            <Link to={`/`} className='btn btn-dark'>Back to Home Page</Link>
        </div>
    )
}

export default Error