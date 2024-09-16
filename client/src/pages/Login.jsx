import Container from 'react-bootstrap/Container';
import { LoginCard } from '../components/Login Cards/LoginCard';


export const Login = () => {

    return (
        <>

            <Container lg>
                <Row>
                    <Col lg={12}>
                        <LoginCard/>
                    </Col>
                </Row>
            </Container>

        </>
    )
}