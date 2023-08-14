import { Form } from 'react-bootstrap';
import moment from "moment-jalaali";
import BillTable2 from '../BillReport/BillTable2';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE } from '../../data/apiConfig';
import Spinner from '../Other/Spinner';
import { useSelector } from "react-redux";
import { languages } from '../../data/dummy'
import SelectInput from '../common/SelectInput';
import JalaliDatePicker from '../common/JalaliDatePicker';

const FactureList = () => {

    const { user } = useSelector((state) => state.auth);
    const [uniqueID, setUniqueID] = useState("");
    const [billList, setBillList] = useState();
    const [loading, setLoading] = useState(false);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [language, setLanguage] = useState("");

    const startHandle = (unix, formatted) => {
        setStartDate(formatted);
    };

    const endHandle = (unix, formatted) => {
        setEndDate(formatted);
    };

    const handleOptionChange = (event) => {
        const selectedLanguage = event.target.value;
        setLanguage(selectedLanguage);
    };

    const currentDate = moment().format("jYYYY/jMM/jDD");
    const oneDaysAgo = moment().subtract(1, 'days').format("jYYYY/jMM/jDD");

    useEffect(() => {
        setLoading(true);
        if (user) {
            setUniqueID(user.uniqueID);
            const fetchData = async () => {
                try {
                    const response = await axios.post(`${API_BASE}/Report`, {
                        UniqueID: user.uniqueID,
                        StartDate: oneDaysAgo,
                        EndDate: currentDate
                    });
                    setBillList(response.data);

                } catch (error) {

                }
                setLoading(false);
            };
            fetchData();
        }
    }, [user]);

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
        const response = await axios.post(`${API_BASE}/Report`, {
            UniqueID: user.uniqueID,
            StartDate: startDate,
            EndDate: endDate
        });
        setBillList(response.data);
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
                                id="datePicker5" />
                            <JalaliDatePicker
                                label="تا تاریخ:"
                                value={currentDate}
                                preSelected={currentDate}
                                onChange={endHandle}
                                id="datePicker6" />
                            <SelectInput label="نماینده:" options={languages} value={language} onChange={handleOptionChange} />
                        </div>
                        <div className="">
                            <button type="submit" className="mt-4 mx-5 custom-button">
                                جستجو
                            </button>
                        </div>
                    </div>
                </Form>
                {/*<BillTable1 />*/}
                {loading ? <Spinner /> : <BillTable2 billList={billList} />}
            </div>
        </>
    )
}

export default FactureList;