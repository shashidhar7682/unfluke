import React from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FaHome, FaUsers, FaGraduationCap , FaFileSignature , FaAddressBook, FaUser, FaSearch } from 'react-icons/fa'; // 

function ProfileNavBar() {
  return (
    <div>
        <Navbar expand="lg" variant="light" className="shadow-sm fixed-top" style={{ background: '#010314', borderBottom: 'none' }}>
            <Container>
                <Navbar.Brand href="/" className="fw-bold" style={{ color: '#fff' }}><img src="assets/brand.jpg"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                {/* <Form className="d-flex ms-auto align-items-center position-relative">
                    <Button variant="Nav.Link" className="search-icon">
                    <FaSearch style={{ color:'white' }} />
                    </Button>
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className={`search-field `}
                    aria-label="Search"
                    style={{ color: 'white', backgroundColor: 'white', borderColor: 'white' }}
                    />
                </Form> */}
                <Nav className="ms-auto align-items-center">
                <Nav.Link to="/" className="fw-bold nav-Nav.Link" style={{ color: '#fff' }}><FaHome className="me-1" /> Home</Nav.Link>
                {/* <Nav.Link to="/network" className="fw-bold nav-Nav.Link" style={{ color: '#fff' }}><FaUsers className="me-1" /> Network</Nav.Link> */}
                {/* <Nav.Link to="/learning" className="fw-bold nav-Nav.Link" style={{ color: '#fff' }}><FaGraduationCap className="me-1" /> Learning</Nav.Link> */}
                {/* <Nav.Link to="/profile" className="fw-bold nav-Nav.Link" style={{ color: '#fff' }}><FaUser className="me-1" /> Profile</Nav.Link> */}
                
                <>
                <Nav.Link to="/login" className="fw-bold nav-Nav.Link" style={{ color: '#fff' }}><FaFileSignature className="me-1" /> Login</Nav.Link>
                <Nav.Link to="/signup" className="fw-bold nav-Nav.Link" style={{ color: '#fff' }}><FaAddressBook className="me-1" /> Sign Up</Nav.Link>
                </>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default ProfileNavBar