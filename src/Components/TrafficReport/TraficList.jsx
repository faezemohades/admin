import { Form } from 'react-bootstrap';
import moment from "moment-jalaali";
import { useState, useEffect } from 'react';
import Spinner from '../Other/Spinner';
import TraficTable from '../TrafficReport/TraficTable';
import { typeIncome } from '../../data/dummy';
import { useDispatch, useSelector } from "react-redux";
import SelectInput from '../common/SelectInput';
import { getTraffic } from '../../store/trafficSlice';
import JalaliDatePicker from '../common/JalaliDatePicker';

const TraficList = () => {

    const currentDate = moment().format("jYYYY/jMM/jDD");
    const oneDaysAgo = moment().subtract(1, 'days').format("jYYYY/jMM/jDD");
    const { user, isLoggedIn } = useSelector((state) => state.auth);
    const [uniqueID, setUniqueID] = useState("");
    const [income, setIncome] = useState("");
    const [loading, setLoading] = useState(false);
    const [startDate, setStartDate] = useState(oneDaysAgo);
    const [endDate, setEndDate] = useState(currentDate);
    const dispatch = useDispatch()

    const DatePickerInput = props => {
        return <input {...props} readOnly />;
    };

    const handleOptionChange = (event) => {
        const selectedIncome = event.target.value;
        setIncome(selectedIncome);
    };

    const startHandle = (unix, formatted) => {
        setStartDate(formatted);
    };

    const endHandle = (unix, formatted) => {
        setEndDate(formatted);
    };

    useEffect(() => {
        if (!startDate || !endDate) {
            // Set current date as the default value
            setStartDate(oneDaysAgo);
            setEndDate(currentDate);
        }
    }, [])

    //api fetch in load page
    useEffect(() => {
        setLoading(true);
        if (isLoggedIn) {
            setUniqueID(user.uniqueID);
            const fetchData = async () => {
                await dispatch(getTraffic({
                    UniqueID: user.uniqueID,
                    StartDate: startDate,
                    EndDate: endDate,
                    Source: income,
                }));
                setLoading(false);
            }
            fetchData();
        }
    }, [isLoggedIn]);

    //api fetch in submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        await dispatch(getTraffic({
            UniqueID: user.uniqueID,
            StartDate: startDate,
            EndDate: endDate,
            Source: income,
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
                                id="datePicker1" />
                            <JalaliDatePicker
                                label="تا تاریخ:"
                                value={currentDate}
                                preSelected={currentDate}
                                onChange={endHandle}
                                id="datePicker2" />
                            <SelectInput label="نوع درآمد:" options={typeIncome} value={income} onChange={handleOptionChange} />
                        </div>
                        <div className="">
                            <button type="submit" className="mt-4 mx-5 custom-button">
                                جستجو
                            </button>
                        </div>
                    </div>
                </Form>
                {loading ? <Spinner /> : <TraficTable />}
            </div>
        </>
    )
}

export default TraficList;