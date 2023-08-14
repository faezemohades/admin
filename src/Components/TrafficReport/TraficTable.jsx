import { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'reactstrap';
import { ThemeContext } from '../../App';
import Paginate from '../Paginate/Paginate';
 
// Define the number of items per page
const ITEMS_PER_PAGE = 20;

const TraficTable = () => {
    const { theme } = useContext(ThemeContext);
    const [currentPage, setCurrentPage] = useState(1);

    const traficList = useSelector((state) => {
        return state.traffic;
    })

    // Calculate the total number of pages based on the data length and items per page
    const totalPages = Math.ceil(traficList?.traffic?.traffic?.length / ITEMS_PER_PAGE);

    // Calculate the starting and ending indices of the current page's data
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    // Get the current page's data
    const currentPageData = traficList?.traffic?.traffic?.slice(startIndex, endIndex);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const showPagination = traficList?.traffic?.traffic?.length > ITEMS_PER_PAGE;

    const sumTrafic = traficList?.traffic?.sum;

    if (!traficList?.traffic?.traffic || traficList?.traffic?.traffic?.length === 0) return <div className="align-self-center mt-5 bold-text" style={{ color: "#FB9678" }}> <p>رکوردی برای نمایش وجود ندارد.</p></div>

    return (
        < >
            < div className="table-container rounded mt-1" style={{ overflowX: "auto", width: "100%" }}>
                <div className={`sum-trafic px-2 py-2  rounded ${theme === "dark" ? "text-light" : "text-dark"}`} >
                    <div style={{ border: "1px solid rgba(251,150,120,0.45)", borderRadius: "10px", backgroundColor: "rgba(251,150,120,0.40)", width: "200px" }} className="d-flex justify-content-start p-2">
                        <p style={{ width: "85px" }}>جمع ترافیک:</p>
                        <p>{sumTrafic}</p>
                    </div>
                </div>
                <Table size="sm" className={`mt-3 text-center ${theme === "dark" ? "dark-table" : ""}`}>
                    <thead>
                        <tr>
                            <th className="id">ردیف</th>
                            <th>هاست</th>
                            <th>نام محتوا</th>
                            <th>ترافیک(گیگ)</th>
                            <th> تاریخ</th>
                            <th>نوع درآمد</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentPageData && currentPageData.map((item, index) => (
                            <tr key={item.row} style={{ backgroundColor: index % 2 === 0 ? 'rgba(0,203,215,0.10)' : '' }}>
                                <td className="id">{startIndex + index + 1}</td>
                                <td>{item.host}</td>
                                <td>{item.contentTitle}</td>
                                <td>{item.traffic}</td>
                                <td>{item.trafficDate}</td>
                                <td>{item.trafficSource}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                {/* Pagination */}
                {showPagination && (
                    <div className="d-flex justify-content-end mx-1">
                        <Paginate totalPages={totalPages} handlePageChange={handlePageChange} currentPage={currentPage} />
                    </div>)}
            </div>
        </ >
    );
};

export default TraficTable;
