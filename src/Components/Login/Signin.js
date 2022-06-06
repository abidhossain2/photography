import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from '../../firebase.init';
import './Signin.css'
const Signin = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    })

    const [signInWithEmail, user, errorMsg] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const handleEmailChange = (e) => {
        setUserInfo({ ...userInfo, email: e.target.value })
        setErrors({ ...errors, email: "" })
    }

    const handlePasswordChange = (e) => {
        setUserInfo({ ...userInfo, password: e.target.value });
        setErrors({ ...errors, password: "" });
    }

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmail(userInfo.email, userInfo.password);
    }

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from, {replace:true});
        }
    }, [user, from, navigate]);

    useEffect(() => {
        const error = errorMsg;
        if (error) {
            switch (error?.code) {
                case "auth/invalid-email":
                    toast("Invalid email provided, please provide a valid email");
                    break;

                case "auth/invalid-password":
                    toast("Wrong password. Intruder!!")
                    break;
                default:
                    toast("something went wrong")
            }
        }
    }, [errorMsg])

    return (
        <div>
            <div className="login">
                <div className="login-container">
                    <h2>Please Login</h2>
                    <form className="login-form" onSubmit={handleLogin}>
                        <input type="text" placeholder="Your Email" className='email-field' onChange={handleEmailChange} required />
                        {errors?.email && <p className="error-message">{errors.email}</p>}
                        <input type="password" placeholder="password" className='password-field' onChange={handlePasswordChange} required/>
                        {errors?.password && <p className="error-message">{errors.password}</p>}
                        <button className='submit-login'>Login</button>

                        <ToastContainer />
                        <p className='reset-password' onClick={async () => {
                            await sendPasswordResetEmail(userInfo.email);
                            toast('Reset password sent');
                        }}>Forgot Password</p>
                        <ToastContainer />
                        <p className='exist'>Don't have an account? <Link to="/register" className='signup'>Sign Up</Link> </p>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Signin;