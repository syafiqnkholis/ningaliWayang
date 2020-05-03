import React from 'react'
import {Navbar,Nav, NavDropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const NavKategori = () => {
    return(
        <div>
            <Navbar bg="light" variant="light">
                <Nav className="ml-auto mr-5">
                    <Nav.Link href="#">semua</Nav.Link>
                    <NavDropdown title="Golongan" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/">Pandawa</NavDropdown.Item>
                        <NavDropdown.Item href="">Ponokawan</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Kasta" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Ksatria</NavDropdown.Item>
                        <NavDropdown.Item href="#">N/A</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavKategori