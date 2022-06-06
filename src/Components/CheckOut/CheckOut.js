import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { BsHandThumbsUpFill } from 'react-icons/bs'
import {AiFillCaretLeft} from 'react-icons/ai'
import './CheckOut.css'

const CheckOut = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const { photoid } = useParams();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [fill, setFill] = useState(false)
    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}

                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body style={{ height: '300px' }}>
                    <h3 style={{ textAlign: 'center' }}>Thank you for booking</h3>
                    <BsHandThumbsUpFill className='thumbsup'></BsHandThumbsUpFill>
                </Modal.Body>
            </Modal>
        );
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setModalShow(true)
    }
    const navigate = useNavigate()
    return (
        <div className='checkout'>
                <button className='back' onClick={()=>navigate(-1)}><AiFillCaretLeft className='back-icon'></AiFillCaretLeft></button>
            <h2>CheckOut</h2>
            <div className='checkout-detail'>
                <div className='checkout-info'>
                    <p>You selected service no. {photoid}. For confirm booking please fill up this form and confirm</p>
                </div>
                <div className='client-info'>
                    <p>Your Information</p>
                    <form onSubmit={handleSubmit} >
                        <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} onInput={()=>setFill(!fill)} required /><br />
                        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} onInput={()=>setFill(!fill)} required /><br />
                        <input type="text" placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)} onInput={()=>setFill(!fill)} required /><br />
                        <input type="text" placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)}onInput={()=>setFill(!fill)} required /><br />
                        <button disabled={!fill} style={{backgroundColor: !fill? '#413939' : 'black', color: !fill? 'black' : 'white'}}>Book</button>
                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;