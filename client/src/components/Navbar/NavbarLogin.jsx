import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { BsBox } from "react-icons/bs";


export const NavbarLogin = () => {

    return (
        <>
                <Navbar className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="#home">
                            <BsBox size={50}/>
                            React Bootstrap
                        </Navbar.Brand>
                    </Container>
                </Navbar>
        </>
    )
}