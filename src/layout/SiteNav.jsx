import { useContext } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from "react-router-dom"
import { ThemeContext } from '../context/ThemeContext';
function SiteNav() {
    const theme = useContext(ThemeContext)
    return (
        <Navbar expand="md" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Link to="/" className='nav-link'>Home</Link>
                        <Link to="/todo" className='nav-link'>Todo</Link>
                        <Link to="/personal-data" className='nav-link'>Personal datas</Link>
                        <Link to="/useEffect-explain" className='nav-link'>useEffect explain</Link>
                        <Link to="/products" className='nav-link'>Products</Link>
                    </Nav>
                </Navbar.Collapse>
                <Button variant="primary" onClick={theme.handleTheme}>Change theme</Button>
            </Container>
        </Navbar>
    );
}

export default SiteNav;
