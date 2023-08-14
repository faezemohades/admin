import Col from 'react-bootstrap/Col';
import logo from '../../assets/image/logo.png';
import FormL from '../Login/FormL';
 
const LoginForm = () => {
   
    return (
        <>
            <Col className="primary-color" lg={6} md={12} sm={12} xs={12} style={{ height: "auto" }}>
                <div className="login-form">
                    <div className="d-flex justify-content-center align-items-center flex-column login-div">
                        <div className="d-flex justify-content-center align-items-center flex-column mb-5 pb-5" >
                        {/*logo*/}
                            <div className="d-flex justify-content-center align-items-center">
                                <img src={logo}   alt="logo" className="pb-3 mt-4 mb-3 login-logo" />
                            </div>
                        {/*login form*/}
                           <FormL/>
                        </div>
                    </div>
                </div>
            </Col>
        </>
    )
}

export default LoginForm;