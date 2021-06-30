import React, { useState } from 'react'
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
// import { NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './../../assets/css/nav_bar.css'
import { PlusLg } from 'react-bootstrap-icons';
import VerticallyCenteredModal from './VerticallyCenteredModal'
import AddBranchForm from '../Forms/AddBranchForm';
import db from './../../firebaseConfig'
import { useAlert } from 'react-alert'

const SiteNavBar = () => {
  const [modalShow, setModalShow] = useState(false);
  const alert = useAlert()
  const handleSubmit = async (values) => {
    await db.collection('branches').add(values)
    setModalShow(false)
    alert.success('Congrats you have added a new Branch!')
    // setAlert('user added successfully , you are being redirected to users')
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="custom" variant="custom" className="fixed-nav">
        <Container>
          <Navbar.Brand className="secondary-font customs-logo"><Link to="/">MMS</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {/* <Nav.Link> <Link to="/">Home</Link></Nav.Link> */}
              <Link className="link-item" to="/about">how wae are?</Link>
              <Link className="link-item" to="/contact">Keep in touch!</Link>
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
            </Nav>
            <Nav>
              {/*  className="d-none d-lg-block" */}
              <Button onClick={() => setModalShow(true)} className="bg-dark btn-custom">
                <div>
                  <div className="flex align-center justify-center">
                    <PlusLg /><span className="btn-text">Branch</span>
                  </div>
                </div>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>

      </Navbar>
      <VerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title="Add a new Branch"
      >
        <AddBranchForm postData={handleSubmit} />
      </VerticallyCenteredModal>
    </>
  )
}

export default SiteNavBar
