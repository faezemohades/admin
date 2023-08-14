import { Container, Row, Col } from 'react-bootstrap';
import Spinner from '../Components/Other/Spinner';
import React, { useContext, useEffect, useState } from 'react';
import FormPassword from '../Components/Password/FormPassword';
import { ToastContainer } from 'react-toastify';
import { ThemeContext } from '../App';

const ChangePassword = () => {
    const [loading, setLoading] = useState(false);
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading(false);
            }, 400);
        }
    }, [loading]);

     return (
        <>
            {loading ? <Spinner /> :
                <Container fluid className="login-container">
                    <Row> <Col className="mx-3 mt-4"> <h4 className="mb-0 title-theme">تغییر رمز عبور </h4></Col> </Row>
                    <Row className="login-row box profile-col d-flex justify-content-center">
                        <Col className="" lg={4} style={{ overflowX: 'auto' }}>
                            <FormPassword/>
                        </Col>
                    </Row>
                    <ToastContainer
                        position="top-center"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme={theme === "dark" ? "dark" : "light"}
                        style={{ fontSize: "19px", fontFamily: "Gandom" }}
                    />
                </Container>} </>
    )
}

export default ChangePassword;