import React, { useContext, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { ThemeContext } from '../../App';
 import axios from 'axios';
import { API_BASE } from '../../data/apiConfig';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const FormPassword = () => {
    const navigate = useNavigate()
    const { user } = useSelector((state) => state.auth);
    const { theme } = useContext(ThemeContext);
    const [uniqueID, setUniqueID] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (user) {
            setUniqueID(user.uniqueID);
        }
    }, [user]);


    const handleCancel = (e) => {
        e.preventDefault();
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
        setMessage("");
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newPassword.length <= 0 || confirmPassword.length <= 0 || oldPassword.length <= 0) {
            setMessage("هیچ مقداری درج نشده است.")
            return;
        }
        if (newPassword !== confirmPassword) {
            setMessage("تکرار رمز عبور جدید یکسان نیست.")
            return;
        }
        if (newPassword.length < 6 || confirmPassword.length < 6) {
            setMessage("رمز عبور باید حداقل شامل 6 کاراکتر باشد.");
            return;
        }
        try {
            const response = await axios.post(`${API_BASE}/ChangePassword`, {
                UniqueID: user.uniqueID,
                Password: newPassword,
                OldPassword: oldPassword,
            });

            if (response.data.status === 0) {
                setMessage(response.data.message);
                setOldPassword("");
                setNewPassword("");
                setConfirmPassword("");
                setMessage("");
                toast.success(response.data.message, {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: theme === "dark" ? "dark" : "light",
                });
            }
            else if (response.data.status === 1) {

                setMessage(response.data.message)
            }
            else if (response.data.status === -1) {

                setMessage(response.data.message)
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Form className="pass-form my-5" onSubmit={handleSubmit} style={{ border: theme === "dark" ? "0.5px solid gray" : "0.5px solid #e6e5e8" , borderRadius: '5px', padding: "40px", backgroundColor:""} }>
                <Form.Group controlId="currentPassword" className="mb-2">
                    <Form.Label className="mb-2">رمز عبور فعلی:</Form.Label>
                    <Form.Control
                        type="password"
                        className={theme === "dark" ? "dark-change-ctrl" : ""}
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="newPassword" className="mb-2">
                    <Form.Label className="mb-2">رمز عبور جدید:</Form.Label>
                    <Form.Control
                        type="password"
                        className={theme === "dark" ? "dark-change-ctrl" : ""}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="confirmPassword" className="mb-2">
                    <Form.Label className="mb-2">تأیید رمز عبور جدید:</Form.Label>
                    <Form.Control
                        type="password"
                        className={theme === "dark" ? "dark-change-ctrl" : ""}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </Form.Group>
                {message && <p className="text-danger" style={{ fontSize: "15px" }}>{message}</p>}
                <div className="d-flex justify-content-start mt-5">
                  
                    <div className="">
                        <button type="submit" className="mt-4 custom-login-button">ثبت تغییرات</button>
                    </div>
                    <div className="mx-3">
                        <Button className="mt-4" variant={theme === 'dark' ? "dark" : 'light'} onClick={handleCancel}>انصراف</Button>
                    </div>
                </div>
                <ToastContainer />

            </Form>
        </>
    )
}

export default FormPassword;