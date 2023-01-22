import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div className='text-center py-5'>
            <h1 className='py-4'>Oops! Its seems an error has ocurred... Please try later</h1>
            <Link to={`/`} className='btn btn-dark'>Back to Home Page</Link>
        </div>
    )
}

export default Error