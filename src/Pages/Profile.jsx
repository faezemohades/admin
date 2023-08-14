import { Row, Col, Container } from 'react-bootstrap';
import Services from '../Components/Host/Services';
import Spinner from '../Components/Other/Spinner';
import { useEffect, useState } from 'react';
import ChartLine from '../Components/Charts/ChartLine';
import ChartBar from '../Components/Charts/ChartBar';
 
const Profile = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading(false);
            }, 300);
        }
    }, [loading]);

    return (
        <>
            {loading ? <Spinner /> :
                (<Container fluid className="profile profile-container" >
                    <Row className="mt-1 g-3 profile-row ">
                        <Col lg={6} md={12} sm={12} xs={12}>
                            {/*<Info />*/}
                                <ChartBar/>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <ChartLine />
                        </Col>
                    </Row>
                    <Services />
            </Container>)}
        </>
    )
}

export default Profile;