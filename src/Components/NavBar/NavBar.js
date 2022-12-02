import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../NavBar/navBar.css'
import { Link } from 'react-router-dom';
import Icono from '../../img/Iconos/conciertoMax.png'

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className='navBar'>
      <Container>
       <Link to='/'><img src={Icono} className="icono" alt='tuRecital' /> <Navbar.Brand>TuRecitalHoy</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Link to='nosotros'> <Nav.Link href="/nosotros">Nosotros</Nav.Link> </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;