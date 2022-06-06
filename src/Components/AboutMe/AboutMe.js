import React from 'react';
import { useNavigate } from 'react-router-dom';
import {AiFillCaretLeft} from 'react-icons/ai'
import './AboutMe.css'
const AboutMe = () => {
    const navigate = useNavigate();
    return (
            <div className='goal-container'>
            <button className='back' onClick={()=>navigate(-1)}><AiFillCaretLeft className='back-icon'></AiFillCaretLeft></button>
            <h3 className='goal-header'>My Goal</h3>
            <div className='aboutme'>
                <div className='goal'>
                    <p> I liked coding and that's what made me want to be a web developer. I want to be a successful full stack web developer in the next 3/4 months. And I will do my best for this.   To achieve this goal I will work hard to learn programming languages so that I will diversity my skills and sharpen my talent in the web developer field. </p>
                </div>
            </div>
        </div>

    );
};

export default AboutMe;