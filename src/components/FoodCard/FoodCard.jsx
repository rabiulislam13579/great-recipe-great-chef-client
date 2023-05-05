import React, { useState } from 'react';
import { Col, Container } from 'react-bootstrap';
import './FoodCard.css';
import { FaHeart, FaRegStar, FaStar } from 'react-icons/fa';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Rating from 'react-rating';

const FoodCard = ({ s }) => {

    const [fav, setFav] = useState(true)

    const toastHandle = (e) => {
        setFav(false)
        toast('added to favorite')
    }
    return (
        <Col lg={3} md={1} className=' my-3 p-3 ms-5 me-4 border border-3 rounded-4 '>

            <img className='s-img img-fluid rounded-4' src={s.img} alt="" />
            <h3 className="card-title">{s.name}</h3>
            <p>{s.method.length > 250 ? s.method.slice(0, 250) : s.method}  .....</p>
            <div className='d-flex justify-content-between'>
                <div>
                    <span className='text-warning'>
                        <Rating
                            placeholderRating={s.rating}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        />
                    </span>
                    <span className='ms-2'>{s.rating} </span>
                </div>
                <div>
                    <button disabled={!fav} onClick={toastHandle}><FaHeart></FaHeart></button>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </Col>
    );
};

export default FoodCard;