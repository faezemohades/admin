import { useContext, useState } from 'react';
import { ThemeContext } from '../../App';
import {Table } from 'reactstrap';
import { FaTimes } from 'react-icons/fa';
import { GiCheckMark } from 'react-icons/gi';
import { Row, Col } from 'react-bootstrap';
import { useSelector} from "react-redux";
import Paginate from '../Paginate/Paginate';

 const ITEMS_PER_PAGE = 20;

const HostTable = ({ hostList }) => {

    const { theme } = useContext(ThemeContext);

    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const data = useSelector((state) => {
         return state.host;
    })


    // Pagination constants
    const itemsPerPage = 15; // Number of items to show per page
    const totalPages = Math.ceil(data?.host?.length / itemsPerPage);

    // Calculate the start and end index of the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Get the items for the current page
    const currentPageItems = data?.host?.slice(startIndex, endIndex);
    const showPagination = data?.host?.length > ITEMS_PER_PAGE;

    //if (hostList?.length === 0) return <div className="align-self-center mt-5 bold-text" style={{ color: "#FB9678" }}> <p>رکوردی برای نمایش وجود ندارد.</p></div>

    return (
        <>
            <Row>
                <Col className="box profile-col " style={{ overflowX: 'auto' }}>

                    <Table size="sm" className={`mt-1  ${theme === "dark" ? "dark-table" : ""}`}>
                        <thead>
                            <tr className={theme === "dark" ? "text-light" : ""}>
                                {/*<th className="id">ردیف</th>*/}
                                <th>نام هاست</th>
                                <th>ای پی</th>
                                <th>مدیر</th>
                                <th >وضعیت</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentPageItems?.map((item, index) => (
                                <tr key={index} style={{ backgroundColor: index % 2 === 0 ? 'rgba(0,203,215,0.10)' : '' }} >
                                    {/*<td className="id">{index+1}</td>*/}
                                    <td>{item.name}</td>
                                    <td>{item.ip}</td>
                                    <td>{item.adminName}</td>
                                    <td>{item.isDisable ? <FaTimes size={22} color="#d52424" /> : < GiCheckMark size={22} color={theme === "dark" ? "rgb(59 235 12)" : "#009933"} />}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    {showPagination && (
                        <div className="d-flex justify-content-end">
                            <Paginate totalPages={totalPages} handlePageChange={handlePageChange} currentPage={currentPage} />

                        </div>)}
                </Col>
            </Row>
        </>
    )
}

export default HostTable;