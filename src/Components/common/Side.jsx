import React, { useContext }  from "react";
import Navbar from 'react-bootstrap/Navbar';
import { sideBar } from '../../data/dummy'
import { NavLink } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';
import { ThemeContext } from "../../App";
import { useSelector } from "react-redux";

const Side = () => {
    const { user } = useSelector((state) => state.auth);
    const { theme } = useContext(ThemeContext);

    return (
        <div className="Sidebar box" style={{ overflowY:"auto" }}>

            <Navbar className="flex-column">

                <Navbar.Collapse id="basic-navbar-nav">
                    
                    <div className=" d-flex flex-column align-items-start justify-content-start w-100">
                        <div className="d-flex w-100" style={{ backgroundColor: theme === 'dark' ? '#393E46' : '#e6e5e86e', padding: '20px', borderRadius: '10px' }}>
                        <div>
                                <BsPersonCircle size={25} color={theme === 'dark' ? '#fff' : 'gray'} />
                        </div>
                        <div className="d-flex justify-content-between align-items-cemnter  flex-wrap profile-title mx-3" >
                            <div><span> {user?.fName} {user?.lName} </span></div> <div><span></span></div>
                            </div>
                         </div>
                        {sideBar.map((link, index) => (
                            <div key={index} className="">
                                <h6 className="side-title">{link.title}</h6>
                                {link.links.map((item, id) => (
                                    <div key={id} style={{width:"230px"}}>
                                        <NavLink activeclassname="active" to={item.link} className="link sub-menu">
                                            <div className="icon"> < item.icon size={20} /></div>
                                            <span style={{ fontSize:"14px" }}>{item.name}</span>
                                        </NavLink>
                                    </div>
                                ))}
                            </div> 
                        ))}
                        </div>
                </Navbar.Collapse>
            </Navbar>
            <div style={{ width: "100%", height: "60%" ,fontSize:"13px"}} className="d-flex flex-column align-items-end justify-content-end">
                <div className="date" ><p>{user?.today}</p></div>
            </div>
        </div>

    );
};

export default Side;