import { useContext, useState } from 'react';
import ContentModal from '../Content/ContentModal';
import { Button } from 'react-bootstrap';
import { ThemeContext } from '../../App';
import { Table } from 'reactstrap';
import { GiCheckMark } from 'react-icons/gi';
import { useDispatch, useSelector } from "react-redux";
import Paginate from '../Paginate/Paginate';
import { getContentCode } from '../../store/contentCodeSlice';

const ITEMS_PER_PAGE = 20;

const ContentTable = () => {

    const { user } = useSelector((state) => state.auth);
    const [selectedContentTitle, setSelectedContentTitle] = useState("");
    const { theme } = useContext(ThemeContext);
    const [modalShow, setModalShow] = useState(false);
    const dispatch = useDispatch()

    const contentList = useSelector((state) => {
        return state.content;
    })

    //const { contentList } = useContext(ContentContext);

    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the total number of pages based on the data length and items per page
    const totalPages = Math.ceil(contentList?.content?.length / ITEMS_PER_PAGE);

    // Calculate the starting and ending indices of the current page's data
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    // Get the current page's data
    const currentPageData = contentList?.content?.slice(startIndex, endIndex);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const showPagination = contentList?.content?.length > ITEMS_PER_PAGE;

    // send contenteId to api and get data
    const handleButtonClick = async (contentID, contentTitle) => {
        setModalShow(true)
        await dispatch(getContentCode({
            ID: contentID,
            UniqueID: user.uniqueID
        }));
        setSelectedContentTitle(contentTitle);
    };


    if (!contentList?.content || contentList?.content?.length === 0) return <div className="align-self-center mt-5 bold-text" style={{ color: "#FB9678" }}> <p>رکوردی برای نمایش وجود ندارد.</p></div>

    return (
        <>
            <div className="table-container mt-4 " style={{ overflowX: "auto", width: "100%" }}>
                <Table size="sm" className={`mt-3 text-center ${theme === "dark" ? "dark-table" : ""}`}>
                    <thead>
                        <tr className={theme === "dark" ? "text-light" : ""}>
                            <th className="id">ردیف</th>
                            <th>عنوان فارسی</th>
                            <th>عنوان لاتین</th>
                            <th>زبان</th>
                            <th>وضعیت</th>
                            <th>سال انتشار</th>
                            <th>جزییات</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentPageData && currentPageData.map((item, index) => (
                            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? 'rgba(0,203,215,0.10)' : '' }} className="mt-2">
                                <td className="id">{item.row}</td>
                                <td>{item.contentTitle}</td>
                                <td>{item.contentEnName}</td>
                                <td>{item.language}</td>
                                <td style={{ width: "90px" }}>
                                    {item.contentState === 'فعال' ? (
                                        <GiCheckMark size="22" color={theme === "dark" ? "rgb(59 235 12)" : "#009933"} />
                                    ) : (
                                        item.contentState
                                    )}
                                </td>
                                <td style={{ width: "90px" }}>{item.releaseYear}</td>
                                <td style={{ width: "110px" }}>
                                    <Button
                                        variant={theme === "dark" ? "dark" : "light"}
                                        className="my-1 py-1"
                                        style={{
                                            border: "1px solid #03C9D7", fontSize: "13px"
                                        }} onClick={() => handleButtonClick(item.contentID, item.contentTitle)}>
                                        مشاهده کدها
                                    </Button>
                                </td>
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
            <ContentModal show={modalShow} close={() => setModalShow(false)} setModalShow={setModalShow} contentTitle={selectedContentTitle} />
        </>
    )
}

export default ContentTable;