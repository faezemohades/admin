import { useContext, useState } from 'react';
 import { ThemeContext } from '../../App';
import { Table } from 'reactstrap';
import Paginate from '../Paginate/Paginate';
import { useSelector } from 'react-redux';
import ReusableTable from '../common/ReusableTable';

const ITEMS_PER_PAGE = 20;
const tableColumns = ['ردیف', 'نوع حساب', 'شرح', 'تاریخ', 'بدهکار', 'بستانکار','مانده'];
const BillTable2 = () => {

    const { theme } = useContext(ThemeContext);
    const [currentPage, setCurrentPage] = useState(1);

    const billList = useSelector((state) => {
        return state.bill;
    })

    // Calculate the total number of pages based on the data length and items per page
    const totalPages = Math.ceil(billList?.bill?.length / ITEMS_PER_PAGE);

    // Calculate the starting and ending indices of the current page's data
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    // Get the current page's data
    const currentPageData = billList?.bill?.slice(startIndex, endIndex);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const showPagination = billList?.bill?.length > ITEMS_PER_PAGE;

    if (!billList?.bill || billList?.bill?.length === 0) return <div className="align-self-center mt-5 bold-text" style={{ color: "#FB9678" }}> <p>رکوردی برای نمایش وجود ندارد.</p></div>

    return (
        <>
            <div className="table-container rounded mt-4" style={{ overflowX: "auto", width: "100%" }}>
                {currentPageData ?
                    <>
                        <ReusableTable data={currentPageData} columns={tableColumns} />

                    </>: ""}
                {/*pagination*/}
                {showPagination && (
                    <div className="d-flex justify-content-end mx-1">
                        <Paginate totalPages={totalPages} handlePageChange={handlePageChange} currentPage={currentPage} />
                    </div>)}
            </div>
        </>
    )
}

export default BillTable2;