import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/image/logo.png'
import { GiUbisoftSun } from 'react-icons/gi';
import { RiMoonFill } from 'react-icons/ri';
import { IoMdExit } from 'react-icons/io';
import { TiThMenu } from 'react-icons/ti';
import Offcanvasbar from "../common/Offcanvasbar";
import {Link } from 'react-router-dom';
import { ThemeContext } from "../../App";
import { logoutStatic } from "../../store/authSlice";
import { useDispatch } from "react-redux";

function Header(  ) {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [show,setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutStatic());
    };

    return (
        <Navbar className="box header" fixed="top" style={{zIndex:"2"} }>
            <Container gap={3} fluid>
                <div className="d-flex justify-content-start align-items-center">
                    <div className="icon-shadow mx-1">
                        <TiThMenu className="toggle" onClick={handleShow} size={24} color="gray" />
                    </div>
                    {/*<Navbar.Brand href="/" className="px-1"><img src={logo} className="logo" /></Navbar.Brand>*/}
                    <Link to="/" className="px-1"><img src={logo} className="logo" /></Link>
                </div>
                <Nav className="me-auto d-flex justify-content-center align-items-center">
                    <button className={`toggle-button ${theme}`} onClick={toggleTheme}>
                        {theme === "light" ? <GiUbisoftSun /> : <RiMoonFill />}
                    </button>
                    <IoMdExit size={24} className="mx-2" color="gray" onClick={handleLogout} style={{cursor:"pointer"} } />
                 </Nav>
             <Offcanvasbar show={show} handleClose={handleClose} setShow={setShow} theme={theme } />
            </Container>
        </Navbar>
    );
}

export default Header; 