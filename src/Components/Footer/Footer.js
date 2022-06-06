import React from 'react';
import './Footer.css'
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from 'react-icons/ai'
const Footer = () => {
    return (
        <div>
            <div className='footer'>
                <div className='footer-info'>
                    <div className='phone'>
                        <h6>Phone & Mail</h6>
                        <p>+5327940</p>
                        <p>wildshoot@gmail.com</p>
                    </div>
                    <div className='address'>
                        <h6>Reach Me</h6>
                        <p>Moulvibazar-3300</p>
                        <p>Kodom Market, 1st Floor</p>
                    </div>
                    <div className='time'>
                        <h6>Check-in Hours</h6>
                        <p>Mon-Fri; 09:00 - 22:00</p>
                        <p>Sat-Sun; 08:00 - 21:00</p>
                    </div>
                    <div className='subscribe'>
                        <h6>Subscribe to know the latest deals</h6>
                        <input type="text" placeholder='Email address' /><br />
                        <button>Subscribe</button>
                    </div>
                </div>
                <div className='social'>
                    <div className='social-icon'>
                        <AiFillFacebook className='fa-icon social-link'></AiFillFacebook>
                        <AiFillTwitterSquare className='twit-icon social-link'></AiFillTwitterSquare>
                        <AiFillInstagram className='inst-icon social-link'></AiFillInstagram>
                    </div>
                </div>
                        <p className='copy-right'>Copyright &copy;2022</p>
            </div>
        </div>
    );
};

export default Footer;