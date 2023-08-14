import Container from 'react-bootstrap/Container';

const ErrorPage = ({error }) => {
   
    return (
        <Container>
            <div className="d-flex justify-content-center align-item-center " id="overlay1"  >
                <div className="mt-5 pt-5 "   >
                    <div className="error-box">
                    <p>متاسفانه مشکلی پیش آمده است. </p>
                        <span>{error.message}</span>
                    </div>
            </div>
            </div>
        </Container>
    )
}

export default ErrorPage;