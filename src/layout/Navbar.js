import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Navi = () => {
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand className="ml-4">ningaliwayang</Navbar.Brand>
                <Nav className="ml-auto mr-4">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/Tentang">Tentang</Nav.Link>
                    <Nav.Link href="/Wayang">Wayang</Nav.Link>
                    <Nav.Link href="/Pagelaran">Pagelaran</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Navi