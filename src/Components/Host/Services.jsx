import React, {useEffect, useState } from 'react';
import { Row, Col} from 'react-bootstrap';
import Spinner from '../Other/Spinner';
import HostTable from '../Host/HostTable';
import { useSelector, useDispatch } from "react-redux";
import { getHost } from '../../store/hostSlice';

const Services = () => {

    const { user, isLoggedIn } = useSelector((state) => state.auth)
    const [uniqueID, setUniqueID] = useState("");
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isLoggedIn) {
            setUniqueID(user.uniqueID);
        }
    }, [isLoggedIn]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            await dispatch(getHost(user.uniqueID));
            setLoading(false);
        };
        if (isLoggedIn) {
            fetchData();
        }
    }, []);

    return (
        <>
            <Row>
                <Col className="mx-3 mt-4">
                    <h4 className="mb-0 title-theme">سرویس های من</h4>
                </Col>
            </Row>
            {loading ? <Spinner /> : <HostTable />}
        </>

    );
};

export default Services;

