import React from 'react';
import { useNavigate } from 'react-router-dom';
import {AiFillCaretLeft} from 'react-icons/ai'
import './Blog.css'
const Blog = () => {
    const navigate = useNavigate()
    return (
        <div className='FAQ'>
            <button className='back' onClick={()=>navigate(-1)}><AiFillCaretLeft className='back-icon'></AiFillCaretLeft></button>
            <div>
                <h5>Difference between authorization and authentication</h5>
                <p>Authentication: The process or action of proving or showing something to be true, genuine or valid. For example when any user enter his / her wrong password in form and tries to submit it then some error message is displayed. Beacause identity does not match. It is authentication. </p>
                <p>Authorization: When any user's identity successfully authenticated it is called authorization. It is the process of verifying what specific applications, fiels and data a user access to. It works after authentication is done.</p>
            </div>
            <hr />
            <div>
                <h5> Why are you using firebase? What other options do you have to implement authentication?</h5>
                <p>By using firebase we do not have to worry about the complexities behind implementing. 
                    It gives us prepared authentication system. We implement authentication system by using email, password or google etc. <br /> There are other sites besides firebase for authentication. NHost, Deployed, Hoodie, AmpoifyJS etc</p>    
            </div>
            <hr />
            <div>
                <h5> What other services does firebase provide other than authentication?</h5>
                <p>Besides authentication firebase hepls us for hosting. It provides some other functions such as realtime data base, cloud firestore, cloud functions, cloud messaging etc. Microservers and web apps are also made by firebase.</p>
            </div>
        </div>
    );
};

export default Blog;