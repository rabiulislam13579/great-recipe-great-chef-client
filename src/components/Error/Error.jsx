import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSadCry } from '@fortawesome/free-solid-svg-icons'

const Error = () => {
    const {error, status} = useRouteError();
    console.log(error.message);
    return (
        <div className='d-flex flex-column mt-5 pt-5 align-items-center justify-content-center'>
            <h1 className='text-warning'><FontAwesomeIcon icon={faSadCry} /></h1>
            <h1 className='text-danger'>Error: {status || 404}</h1>
            <h4 className='text-info'>{error.message}</h4>
            <Link to='/' className='btn btn-primary'>Back To Home Page</Link>
        </div>
    );
};

export default Error;