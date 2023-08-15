import React, { useContext} from 'react';
import Modal from 'react-bootstrap/Modal';
import { Table } from 'reactstrap';
import { MdClose } from 'react-icons/md';
import { ThemeContext } from '../../App';
import { useSelector } from 'react-redux';

const ContentModal = ({ show, close, contentTitle }) => {

    const { theme } = useContext(ThemeContext);
    const modalClassName = theme === "dark" ? "dark-modal" : "light-modal";
    const codes = useSelector((state) => {
        return state.contentCode;
    })
    return (

        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className={`modal ${modalClassName}`} onHide={close}  >

            <Modal.Header>

                <Modal.Title id="contained-modal-title-vcenter" className={theme === "dark" ? "text-light" : "text-dark"} style={{ fontSize: "16px" }} >
                    {contentTitle}
                </Modal.Title>
                <MdClose size={27} onClick={close} color="#6f7286" style={{ cursor: "pointer" }} />
            </Modal.Header>
            <Modal.Body className=" ">
                <div className="table-container" style={{ overflowX: "auto" }}>
                    <Table size="sm" className={`mt-3 text-center ${theme === "dark" ? "dark-table" : ""}`}>
                        <thead>
                            <tr>
                                <th style={{ width: "50px" }}>ردیف</th>
                                <th>توضیحات</th>
                                <th>آدرس</th>
                            </tr>
                        </thead>
                        <tbody>
                            {codes &&
                                codes?.contentCode?.map((item, index) => (
                                    <tr key={index} style={{ backgroundColor: index % 2 === 0 ? 'rgba(0,203,215,0.23)' : '' }}  >
                                        <td style={{ width: "50px" }} className={`url ${theme === "dark" ? "text-light" : ""}`}>{index + 1}</td>
                                        <td className={`url ${theme === "dark" ? "text-light" : ""}`}>{item.qualityTitle}</td>
                                        <td className={`url ${theme === "dark" ? "text-light" : ""}`}>
                                            {item.url ? (
                                                <a href={item.url} target="_blank" rel="noopener noreferrer" className={`url ${theme === "dark" ? "dark-url" : ""}`}>
                                                    {item.url}
                                                </a>
                                            ) : (
                                                item.qualityID
                                            )}
                                        </td>
                                    </tr>
                                ))}
                        </tbody>

                    </Table>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default ContentModal;