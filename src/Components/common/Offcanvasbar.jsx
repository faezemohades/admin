import React, { useContext } from "react";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { sideBar } from '../../data/dummy'
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from "../../App";
 import { BsPersonCircle } from 'react-icons/bs';
import { useSelector } from "react-redux";

const  Offcanvasbar=({ show, handleClose, setShow })=> {

    const { theme } = useContext(ThemeContext);
    const { user } = useSelector((state) => state.auth);

     return (
        <Offcanvas show={show} onHide={handleClose} placement="end" style={{ width: "265px" }} className={theme === "dark" ? "offcanvas-dark" : "offcanvas-light"} >

            <Offcanvas.Body>
                <Navbar className="flex-column">

                    <Navbar.Collapse id="basic-navbar-nav">

                        <div className="d-flex flex-column align-items-start justify-content-start w-100">
                            <div className="d-flex w-100" style={{ backgroundColor: theme === 'dark' ? '#393E46' : '#e6e5e8', padding: '20px', borderRadius: '10px' }}>
                                <div>
                                    <BsPersonCircle size={25} color={theme === 'dark' ? '#fff' : 'gray'} />
                                </div>
                                <div className="d-flex justify-content-between align-items-cemnter  flex-wrap profile-title mx-3" >
                                    <div><span> {user?.fName} {user?.lName} </span></div> <div><span></span></div>
                                </div>
                            </div>
                            {sideBar.map((link, index) => (
                                <div key={index} className="">
                                    <h6 className="side-title pb-2">{link.title}</h6>
                                    {link.links.map((item, id) => (
                                        <div key={id} style={{ width: "230px" }}>
                                            <NavLink activeclassname="active" to={item.link} className="link sub-menu" onClick={() => setShow(false)}>
                                                <div className={theme === "dark" ? "text-light icon" : "icon"}> <item.icon size={20} /></div>
                                                <span className={theme === "dark" ? "text-light" : ""}>{item.name}</span>
                                            </NavLink>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default Offcanvasbar;