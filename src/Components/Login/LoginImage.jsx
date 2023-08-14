import Sign from '../../assets/image/Mobile.png';
import Col from 'react-bootstrap/Col';
import { useContext } from 'react';
import { ThemeContext } from '../../App';

const LoginImage = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <>
            <Col lg={6} md={12} sm={12} xs={12} className={theme === 'dark' ? 'login-color' : 'bg-white'}>
                <div className="login-img d-flex justify-content-center">
                    <div className="d-flex justify-content-center align-items-center h-100 flex-column">
                        <img src={Sign} alt="" width="80%" className="image" />
                    </div>
                </div>
            </Col>
        </>
    )
}

export default LoginImage;