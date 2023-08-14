import { Outlet } from "react-router-dom";
import React, {useState} from "react";
import Side from "./Side";
import Offcanvasbar from "../common/Offcanvasbar";
import Header from "./Header";
 
function Layout() {
 
    const [sideShow] = useState(true);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

     return (
      
           < div style={{ margin: "0 auto" }} >
 
            {/*header*/}

            <Header  />

            <div className="d-flex justify-content-center align-items-center">
             
                <div className="bg-info side-div" >
                     {/*canvas*/}
                    {show ? <div className="canvas">
                        <Offcanvasbar show={show} handleClose={handleClose} setShow={setShow} />
                    </div>
                        : <></>}
                    {/*sidebar*/}
                    {sideShow ? (
                        <Side />
                    ) :
                        <></>}
                </div>

                 {/*main*/}
                 <div className=" main-div mt-5 pt-4"   >
                     <Outlet />
                 </div>
             </div>
           </div >
    );
}

export default Layout;