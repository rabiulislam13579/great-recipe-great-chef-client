import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { FaSadCry } from 'react-icons/fa';

const Error = () => {
    const {error, status} = useRouteError();
    console.log(error.message);
    return (
        <div className='d-flex flex-column mt-5 pt-5 align-items-center justify-content-center'>
            <h1 className='text-warning'><FaSadCry/></h1>
            <h1 className='text-danger'>Error: {status || 404}</h1>
            <h4 className='text-info'>{error.message}</h4>
            <Link to='/' className='btn btn-primary'>Back To Home Page</Link>
        </div>
    );
};

export default Error;