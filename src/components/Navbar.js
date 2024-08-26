import React from 'react';
import { Navbar, Container, Nav, Form, Button, Row, Col } from 'react-bootstrap';
import '../App.css';

const Navigationbar = () => (
    //   <nav>
    //     <div className="logo">My Logo</div>
    //     <div className="user-profile">
    //       <img src="user-profile-pic.jpg" alt="User" />
    //     </div>
    //   </nav>
    <Navbar expand="lg" className="bg-body-tertiary navbar-container" bg="dark" data-bs-theme="dark" fixed='top'>
        <Container>
        <Navbar.Brand href="/products" style={{ display: 'flex', alignItems: 'center' }}>
    <img src="logo.jpeg" alt="Icon" style={{ width: '20px', marginRight: '8px', borderRadius: '50%' }} />
    KYC HUB
</Navbar.Brand>


            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            {/* <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>

                </Nav>
            </Navbar.Collapse> */}
            <a href="https://github.com/isajalsingh/kyc_hub-assignment.git" target="_blank" rel="noopener noreferrer" className="no-underline text-black">
                <button className='black bg-white my-2 mx-2 rounded-full flex justify-between items-center ring-white ring-1'>
                    <img className='invert w-10 p-1' src='/Git.png' alt='GitHub Logo' />
                    <span className='font-bold px-2'>GitHub</span>
                </button>
            </a>
            {/* <Form inline>
          <Row>
            <Col xs="auto">
              <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
            </Col>
            <Col xs="auto">
              <Button type="submit">Submit</Button>
            </Col>
          </Row>
        </Form> */}
        </Container>
    </Navbar>
);

export default Navigationbar;