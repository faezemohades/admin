import { Form } from 'react-bootstrap';
import moment from "moment-jalaali";
import BillTable2 from '../BillReport/BillTable2';
import { useState, useEffect } from 'react';
import Spinner from '../Other/Spinner';
import { useDispatch, useSelector } from "react-redux";
import { getBill } from '../../store/billSlice';
import JalaliDatePicker from '../common/JalaliDatePicker';

const BillList = () => {
    const { user, isLoggedIn } = useSelector((state) => state.auth);
    const [uniqueID, setUniqueID] = useState("");
    const [loading, setLoading] = useState(false);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const dispatch = useDispatch()

    const startHandle = (unix, formatted) => {
        setStartDate(formatted);
    };

    const endHandle = (unix, formatted) => {
        setEndDate(formatted);
    };

    const currentDate = moment().format("jYYYY/jMM/jDD");
    const oneDaysAgo = moment().subtract(1, 'days').format("jYYYY/jMM/jDD");

    useEffect(() => {
        if (isLoggedIn) {
            setUniqueID(user.uniqueID);
            const fetchData = async () => {
                setLoading(true);
                await dispatch(getBill({
                    UniqueID: user.uniqueID,
                    StartDate: oneDaysAgo,
                    EndDate: currentDate
                }));
                setLoading(false);
            }
            fetchData();
        }
    }, [isLoggedIn]);

    useEffect(() => {
        if (!startDate || !endDate) {
            // Set current date as the default value
            setStartDate(oneDaysAgo);
            setEndDate(currentDate);
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        await dispatch(getBill({
            UniqueID: user.uniqueID,
            StartDate: startDate,
            EndDate: endDate
        }));
        setLoading(false);
    };

    return (
        <>
            <div className="mb-4 content-list d-flex flex-column align-items-start">
                <Form onSubmit={handleSubmit}>
                    <div className="d-flex justify-content-center align-items-center flex-wrap mb-2">
                        <div className="d-flex justify-content-center align-items-center flex-wrap">
                            <JalaliDatePicker
                                label="از تاریخ:"
                                value={oneDaysAgo}
                                preSelected={oneDaysAgo}
                                onChange={startHandle}
                                id="datePicker3"/>
                            <JalaliDatePicker
                                label="تا تاریخ:"
                                value={currentDate}
                                preSelected={currentDate}
                                onChange={endHandle}
                                id="datePicker4" />
                        </div>
                        <div className="">
                            <button type="submit" className="mt-4 mx-5 custom-button">
                                جستجو
                            </button>
                        </div>
                    </div>
                </Form>
                {/*<BillTable1 />*/}
                {loading ? <Spinner /> : <BillTable2 />}
            </div>
        </>
    )
}

export default BillList;