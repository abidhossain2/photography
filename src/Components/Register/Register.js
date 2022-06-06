// import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { ImGoogle2 } from 'react-icons/im'
import auth from '../../firebase.init'
import './Register.css'
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const [user] = useAuthState(auth)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth)
    const [sendEmailVerification] = useSendEmailVerification(auth)
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const nameText = e => {
        setName(e.target.value)
    }
    const emailText = e => {
        setEmail(e.target.value)
    }
    const passwordText = e => {
        setPassword(e.target.value)
    }
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        await createUserWithEmailAndPassword(email, password)
        await sendEmailVerification();
        toast('Email verification sent')
    }
    useEffect( () => {
        if (user) {
            navigate(from, { replace: true })
        }
    },[from, navigate, user])
    return (
        <div className='register'>
            <div className='register-container'>
                <h2>Please Register</h2>
                <form onSubmit={handleSubmit}>
                    <input onChange={nameText} className='name-register' value={name} type="text" placeholder='Enter your name' /> <br />
                    <input onChange={emailText} className='email-register' value={email} type="email" placeholder='Enter your email' /> <br />
                    <input onChange={passwordText} className='password-register' value={password} type="password" placeholder='Enter your password' /> <br />
                    <button className='submit-register'>Register</button>
                    <ToastContainer />
                    <p className='exist'>Already have an account? <Link to="/signin" className='signin'>Login</Link></p>
                </form>
                <button className='google-signin' onClick={() => signInWithGoogle()}>
                    <ImGoogle2 className='google-icon'></ImGoogle2><span className='signin-txt'>Sign in with google</span>
                </button>
            </div>
        </div>
    );
};

export default Register;