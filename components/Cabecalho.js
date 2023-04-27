import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Cabecalho = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavDropdown title="Filmes" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/filmes">Populares</NavDropdown.Item>
                            <NavDropdown.Item href="/filmes/lancamentos">Lançamentos</NavDropdown.Item>
                            <NavDropdown.Item href="/filmes/cartaz">Em cartaz</NavDropdown.Item>
                            <NavDropdown.Item href="/filmes/top">Top Rated</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Séries" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/series">Populares</NavDropdown.Item>
                            <NavDropdown.Item href="/series/ar">No Ar</NavDropdown.Item>
                            <NavDropdown.Item href="/series/estreias">Estreias</NavDropdown.Item>
                            <NavDropdown.Item href="/series/top">Top Rated</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/atores">Atores</Nav.Link>
                        <Nav.Link href="/generos">Gêneros</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Cabecalho