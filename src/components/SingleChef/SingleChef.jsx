import React from 'react';
import './SingleChef.css'
import { Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const SingleChef = ({ singleChef }) => {


    return (

        <Col lg={3} md={1} className='card  p-3  lg:ms-5 me-4 mb-5'>
            <LazyLoad height={300} offset={300}>
                <img className='img-fluid w-100 h-75' src={singleChef.image} />
            </LazyLoad>


            <h3 className="card-title">{singleChef.food}</h3>
            <h5 className="card-title text-primary">{singleChef.name}</h5>
            <p className="card-text">{singleChef.yearsOfExperience} years of experience</p>
            <p className="card-text">{singleChef.likes} people like it</p>
            <p className="card-text">{singleChef.number} Recipes</p>
            <Link to={`/details/${singleChef.id}`} className="btn btn-success">View Recipes</Link>
        </Col>




    );
};

export default SingleChef;