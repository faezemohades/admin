//import { useContext, useState } from 'react';
//import { AuthContext } from '../context/AuthProvider';
//import ChangePass from './ChangePass';
//import { ToastContainer } from 'react-toastify';
//import "react-toastify/dist/ReactToastify.css";
//import { ThemeContext } from '../App';

//const Info = () => {

//    const { theme } = useContext(ThemeContext);
//    const [modalShow, setModalShow] = useState(false);
//    const authContext = useContext(AuthContext);
//    const { user } = authContext;
   
//    return (
//        <>
//            <div className="box profile-col" style={{ height: "90px", backgroundColor: "rgba(251,150,120,0.93)", color: "#fff", minWidth: "150px", maxWidth:"310px" }}  >
//                <div className="profile-box d-flex justify-content-between">
          
//                        <div className="d-flex justify-content-between align-items-cemnter  flex-wrap profile-title" >
//                            <div><span> {user?.fName} {user?.lName} </span></div> <div><span></span></div>
//                    </div>
                  
//                    <div className=" change-pass" onClick={() => setModalShow(true)} >
//                        <span>تغییر کلمه عبور</span>
//                        </div>
//                </div>
//                <ToastContainer
//                    position="top-center"
//                    autoClose={2000}
//                    hideProgressBar={false}
//                    newestOnTop={false}
//                    closeOnClick
//                    rtl
//                    pauseOnFocusLoss
//                    draggable
//                    pauseOnHover
//                    theme={theme === "dark" ? "dark" : "light"}
//                    style={{ fontSize: "19px", fontFamily: "Gandom" }}
//                 />
//            </div>
//            <ChangePass show={modalShow} close={() => setModalShow(false)} setModalShow={setModalShow} />
//        </>
//    )
//}

//export default Info;