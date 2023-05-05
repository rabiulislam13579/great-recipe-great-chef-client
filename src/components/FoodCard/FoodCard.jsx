import React, { useState } from 'react';
import { Col, Container } from 'react-bootstrap';
import './FoodCard.css';
import { FaHeart } from 'react-icons/fa';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FoodCard = ({ s }) => {

    const [fav, setFav] = useState(true)

    const toastHandle = (e) => {
        setFav(false)
        toast('added to favorite')
    }
    return (
        <Col lg={3} md={1} className=' my-3 p-3 ms-5 me-4'>

            <img className='s-img' src={s.img} alt="" />
            <h3 className="card-title">{s.name}</h3>
            <p>{s.method.length > 250 ? s.method.slice(0, 250) : s.method}  .....</p>
            <p>{s.rating}  <button disabled={!fav} onClick={toastHandle}><FaHeart></FaHeart></button></p>
            <ToastContainer></ToastContainer>
        </Col>
    );
};

export default FoodCard;