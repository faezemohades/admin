//import { useContext } from 'react';
//import { HiCurrencyDollar } from 'react-icons/hi';
//import { AuthContext } from '../context/AuthProvider';

//const Entity = () => {
 
//    const authContext = useContext(AuthContext);
//    const { user } = authContext;

//    return (
//        <>
//            <div className="box d-flex justify-content-start align-items-start profile-col mt-5" 
//                style={{ height: "150px", backgroundColor: "rgba(251,150,120,0.93)", color: "#fff"}}>
//                <div className="profile-box w-100" >
//                    <div className="d-flex justify-content-between">
//                        <div><h5 className="profile-title"> موجودی</h5></div>
//                        <div><HiCurrencyDollar size={40} fill="white" /></div>
//                    </div>
//                    <div>
//                        <div className="ent-div d-flex justify-content-start align-items-center my-3">
//                            <h5 className="px-1">{user?.balance || 0} </h5> <h6>تومان</h6>
//                        </div>
//                    </div>

//                </div>
//            </div>
//        </>
//    )

//}

//export default Entity;