import React from 'react';
import { Navbar, Container, Nav, Form, Button, Row, Col } from 'react-bootstrap';
import '../App.css';

const Navigationbar = () => (

    <Navbar expand="lg" className="bg-body-tertiary navbar-container" bg="dark" data-bs-theme="dark" fixed='top'>
        <Container>
        <Navbar.Brand href="/products" style={{ display: 'flex', alignItems: 'center' }}>
    <img src="logo.jpeg" alt="Icon" style={{ width: '20px', marginRight: '8px', borderRadius: '50%' }} />
    KYC HUB_
</Navbar.Brand>


            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <a href="https://github.com/isajalsingh/kyc_hub-assignment.git" target="_blank" rel="noopener noreferrer" className="no-underline text-black">
                <button className='black bg-white my-2 mx-2 rounded-full flex justify-between items-center ring-white ring-1'>
                    <img className='invert w-10 p-1' src='/Git.png' alt='GitHub Logo' />
                    <span className='font-bold px-2'>GitHub</span>
                </button>
            </a>

        </Container>
    </Navbar>
);

export default Navigationbar;