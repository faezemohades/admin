import loader from '../../assets/image/loader1.gif';

const Spinner = () => {
    
    return (
        <>
            <div >
                <img src={loader} alt='loader' width="60px" className="spinner" />
             </div>
        </>
    )

}

export default Spinner;