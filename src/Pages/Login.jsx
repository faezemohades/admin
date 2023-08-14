import { Container, Row} from 'react-bootstrap';
import LoginForm from '../Components/Login/LoginForm';
import LoginImage from '../Components/Login/LoginImage';
import React, { useEffect} from "react";
import { useNavigate } from "react-router-dom";
 
const Login = () => {
 
    const navigate = useNavigate()

    useEffect(() => {
        const usert = localStorage.getItem("user")
        if (usert != null) {
            navigate('/');
        }
    }, []);

    return (
          <>
                 <Container fluid className="login-container">
                    <Row className="login-row">

                        {/*Right of Page*/}

                        <LoginForm />

                        {/*left of Page*/}

                        <LoginImage />

                    </Row>

                </Container> </>
    )
}

export default Login;