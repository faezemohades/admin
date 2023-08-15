import { useContext, useState } from 'react';
import { ThemeContext } from '../../App';
import { FaTimes } from 'react-icons/fa';
import { GiCheckMark } from 'react-icons/gi';
import { Row, Col } from 'react-bootstrap';
import { useSelector} from "react-redux";
import Paginate from '../Paginate/Paginate';
import { hostColumns } from '../../data/dummy';
import ReusableTable from '../common/ReusableTable';

 const ITEMS_PER_PAGE = 20;

const HostTable = () => {

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

                    <ReusableTable data={currentPageItems.map(item => (
                        [
                            item.name,
                            item.ip,
                            item.adminName,
                            item.isDisable ? <FaTimes size={22} color="#d52424" /> : < GiCheckMark size={22} color={theme === "dark" ? "rgb(59 235 12)" : "#009933"} /> 
                        ]
                    ))} columns={hostColumns} />
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