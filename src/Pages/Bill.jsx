import { Container, Row, Col } from 'react-bootstrap';
import BillList from '../Components/BillReport/BillList';
import { useState, useEffect } from 'react';
import Spinner from '../Components/Other/Spinner';

const Bill = () => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading(false);
            }, 300);
        }
    }, [loading])

    return (
        <>
            {loading ? <Spinner /> : (
                <Container fluid className="">
                    <Row> <Col className="mx-3 mt-4"> <h4 className="mb-0 title-theme"> گزارش مالی</h4></Col> </Row>
                    <Row className="g-3 profile-row" style={{ marginTop: "1px" }}>
                        <Col className="box profile-col">
                            <BillList />
                        </Col>
                    </Row>
                </Container>)}
                </>
    )
}

export default Bill;