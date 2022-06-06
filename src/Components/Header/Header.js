import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Gallery from '../Gallery/Gallery';
import Services from '../Services/Services';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth)
    const logout = () => {
        signOut(auth)
    }
    return (
        <div className='main-section'>
            <Navbar sticky='top' collapseOnSelect expand="lg"  variant="dark" className='nav-bar'>
            <Container>
                <Navbar.Brand href="#home">
                    <span className='f-letter'>S</span>plendid <span className='s-letter'>S</span>hot
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to="aboutme" className='link-item'>About me</Link>
                        <Link to="blog" className='link-item'>Blog</Link>
                        {user? 
                        <button onClick={logout} className='logout'>Sign Out</button> :
                        <Link to="signin" className='signin-btn'>Signin</Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <div className="banner">
            <h1>Beautiful Wild</h1>
        </div>
        <div>
            <Services></Services>
        </div>
        <div>
            <Gallery></Gallery>
        </div>
        </div>
    );
};

export default Header;