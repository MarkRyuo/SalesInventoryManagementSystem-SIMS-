import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom' ;


export const Login = () => {

    return (
        <>

            <Container lg>
                
                <Router>
                    <Switch>
                        <Route path=''/>
                    </Switch>
                </Router>
            </Container>

        </>
    )
}