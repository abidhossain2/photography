import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const navigate = useNavigate()
    const {img, name, detail, price, id} = props.photo;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <p className='name'>{name}</p>
            <p className='detail'>{detail}</p>
            <p className='price'>Price: {price}</p>
            <button onClick={() => navigate(`/wildphoto/${id}`)}>Checkout</button>
        </div>
    );
};

export default Service;