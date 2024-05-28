import React from 'react';
import { Navbar, Container, Nav, NavDropdown, FormControl, Button } from 'react-bootstrap';
import { FaCoins, FaGraduationCap , FaRegBell  , FaFileSignature , FaAddressBook, FaUser, FaSearch } from 'react-icons/fa'; // 
import { BsPersonLinesFill } from "react-icons/bs";

function ProfileNavBar() {
  return (
    <div>
        <Navbar expand="lg" variant="dark" className="shadow-sm " style={{ background: '#59045e', borderBottom: 'none', height: "10vh" }}>
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
                <NavDropdown
                    title={<FaRegBell  style={{ color: '#fff' }} className='me-1'/>}
                    className="fw-bold nav-Nav.Link" style={{ color: '#fff' }}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    {/* <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item> */}
                </NavDropdown>
                {/* <Nav.Link to="/network" className="fw-bold nav-Nav.Link" style={{ color: '#fff' }}><FaUsers className="me-1" /> Network</Nav.Link> */}
                {/* <Nav.Link to="/learning" className="fw-bold nav-Nav.Link" style={{ color: '#fff' }}><FaGraduationCap className="me-1" /> Learning</Nav.Link> */}
                {/* <Nav.Link to="/profile" className="fw-bold nav-Nav.Link" style={{ color: '#fff' }}><FaUser className="me-1" /> Profile</Nav.Link> */}
                
                <>
                <Nav.Link to="/login" className="fw-bold nav-Nav.Link" style={{ color: '#fff' }}><FaCoins /></Nav.Link>
                <NavDropdown
                    title={<BsPersonLinesFill  style={{ color: '#fff' }} className='me-1'/>}
                    className="fw-bold nav-Nav.Link" style={{ color: '#fff' }}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    {/* <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item> */}
                </NavDropdown>
                </>                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default ProfileNavBar