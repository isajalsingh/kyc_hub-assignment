import React from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';
import '../App.css';




const Profile = () => {
    
    return (
        <div className="profile-container">
            <Card className="profile-card">
                {/* <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Profile Image" /> */}
                <Card.Body>
                    <Card.Title>Sajal Kr Ujjwal</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Web Developer</Card.Subtitle>
                    <Card.Text>
                        I am a driven and detail-oriented Computer Science and Engineering graduate from KIIT University,
                        with a strong academic foundation and hands-on experience in cloud infrastructure, software
                        development, and web technologies.
                    </Card.Text>
                    <ListGroup variant="flush" className='aligned-list'>
                        <ListGroup.Item><strong>Birthday</strong> : 18 March 2001</ListGroup.Item>
                        <ListGroup.Item><strong>Phone</strong> : +91 8877127899</ListGroup.Item>
                        <ListGroup.Item><strong>Address</strong> : Ranchi, Jharkhand</ListGroup.Item>
                        <ListGroup.Item><strong>Degree</strong> : B. Tech.</ListGroup.Item>
                        <ListGroup.Item><strong>Email</strong> : sajalkr2011@gmail.com</ListGroup.Item>
                    </ListGroup>
                    <Card.Title className="mt-4">Education</Card.Title>
                    <Card.Text>
                        <strong>Bachelor of Technology in Computer Science and Engineering</strong><br />
                        2020 - 2024<br />
                        Kalinga Institute of Industrial Technology<br />
                        <strong>Location:</strong> Bhubaneswar, Odisha<br />
                        <strong>Cumulative GPA:</strong> 8.68/10<br />
                        <strong>Coursework:</strong> Artificial Intelligence, Cloud Computing, Computer Network, Database Management System,
                        Machine Learning, Object-oriented Programming, Data Structures and Algorithms, Operating Systems, Web Technology
                    </Card.Text>
                    <Card.Title className="mt-4">Professional Experience</Card.Title>
                    <Card.Text>
                        <strong>Cloud Infrastructure & Security Department - Intern</strong><br />
                        May 2023 - Jul 2023<br />
                        Celebal Technologies<br />
                        <ul>
                            <li>Orchestrated a fluid hybrid cloud network, fusing on-premises and Azure resources for peak connectivity.</li>
                            <li>Spearheaded a centralized Hub and Spoke network, optimizing traffic flow and network oversight.</li>
                            <li>Efficiently governed Azure resources through strategic resource group management, refining deployment.</li>
                            <li>Directed thorough configuration and testing for successful Azure resource deployment and seamless network communication.</li>
                        </ul>
                    </Card.Text>
                    <Card.Title className="mt-4 ">Technical Skills</Card.Title>
                    <ListGroup variant="flush" className='aligned-list1'>
                        <ListGroup.Item><strong>Languages</strong> : C, C++, Java, Python, HTML, CSS, JavaScript, SQL, EJS</ListGroup.Item>
                        <ListGroup.Item><strong>Libraries</strong> : React, Mongoose, Redux</ListGroup.Item>
                        <ListGroup.Item><strong>Frameworks</strong> : Next.js, Node.js, Express.js, Bootstrap, Tailwind CSS</ListGroup.Item>
                        <ListGroup.Item><strong>Database</strong> : MongoDB, SQLite, MySQL, AWS (Amazon Web Services), Microsoft Azure</ListGroup.Item>
                        <ListGroup.Item><strong>Tools</strong> : Git, GitHub, Postman, APIs, Docker, Salesforce, WordPress, VS Code, Eclipse, IntelliJ IDEA</ListGroup.Item>
                    </ListGroup>
                    <Card.Title className="mt-4">Certifications</Card.Title>
                    <Card.Text>
                        <ul>
                            <li>Celebal Summer Internship Program</li>
                            <li>Salesforce Developer Virtual Internship</li>
                            <li>Cognite Game v4.5</li>
                            <li>AWS - Introduction To Cloud</li>
                        </ul>
                    </Card.Text>
                    <Card.Title className="mt-4">Projects</Card.Title>
                    <Card.Text>
                        <strong>Password Manager</strong><br />
                        A React-based web app for securely storing, managing, and editing passwords, with features for saving,
                        copying, and toggling visibility, plus real-time notifications.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Profile;
