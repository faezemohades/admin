import { Container, Row, Col } from 'react-bootstrap';
import TraficList from '../Components/TrafficReport/TraficList';
import { useEffect, useState } from 'react';
import Spinner from '../Components/Other/Spinner';

const TraficReport = () => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading(false);
            }, 300);
        }
    }, [loading]);

    return (
         <>
            {loading ? <Spinner /> : (
                <Container fluid className="">
                    <Row> <Col className="mx-3 mt-4"> <h4 className="mb-0 title-theme">گزارش ترافیک</h4></Col> </Row>
                    <Row className="g-3 profile-row" style={{ marginTop: "1px" }}>
                        <Col className="box profile-col">
                            <TraficList />
                        </Col>
                    </Row>
                </Container>)}
                </>
    )
}

export default TraficReport;