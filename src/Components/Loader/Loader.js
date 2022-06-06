import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Loader.css'
const Loader = () => {
    return (
        <div className='loader'>
            <Spinner animation="border" role="status" className='spinner'>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
};

export default Loader;