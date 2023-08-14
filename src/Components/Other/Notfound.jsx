import notFound from "../../assets/image/404.jpg";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const Notfound = () => {

    const navigate = useNavigate()
    const handleButtonClick = () => {
        navigate("/");
     };

    return (
       <>
        <div  className="d-flex justify-content-center align-item-center " id="overlay"  >

                <div >
                    <img src={notFound} alt='error' width="600px" />
                    <div className="d-flex justify-content-center">
                        <Button
                            onClick={handleButtonClick}
                            style={{ borderColor:"#8DD1DA",paddingInline:"18px" } }
                            variant="light"
                    >
                        بازگشت
                        </Button> 

                    </div>
            </div>
            </div>
        </>
      )

}

export default Notfound;