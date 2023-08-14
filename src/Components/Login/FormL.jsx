 import { Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from '../../store/authSlice';
import { API_BASE } from "../../data/apiConfig";
import axios from "axios";
 
const FormL = () => {
   
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const [msg, setMsg] = useState();
    const dispatch = useDispatch();
    const { isLoogedIn } = useSelector((state) => state.auth)

    useEffect(() => {
        if (isLoogedIn) {
            navigate("/");
        }
        else {
            navigate("/login");
        }
    }, [isLoogedIn]);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;
        try {

            if (!username && !password) {
                setMessage("هیچ مقداری درج نشده است.")
            }
            else {

            const res = await axios
                .post(`${API_BASE}/login`, {
                    username,
                    password,
                })
            if (res.data && res.data.status === 0) {
                dispatch(login(res?.data))
                navigate("/");
                setMsg("");
            } else {
                setMsg(res.data.message);
            }
            }
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <>
            <Form className="primary-color login-width" onSubmit={handleFormSubmit} style={{fontWeight:"bold"} }>
                <div className="my-2" style={{ width: "100%" }}>
                    <Form.Group controlId="formUsername">
                        <Form.Label className="login-text">نام کاربری</Form.Label>
                        <Form.Control type="text" name="username" autoComplete="username"  />
                    </Form.Group>
                </div>
                <Form.Group controlId="formPassword">
                    <Form.Label className="login-text">رمز عبور</Form.Label>
                    <Form.Control type="password" name="password" autoComplete="current-password" />
                  </Form.Group>

                {(msg && !message) && < div className="text-danger mt-3">{msg}</div>}
                {message && <div className="text-danger mt-3">{message}</div>}

                <button type="submit" className="my-5 py-2 text-white w-100 custom-login-button" >
                    ورود به پنل
                </button>
            </Form>
        </>
    );
};

export default FormL;