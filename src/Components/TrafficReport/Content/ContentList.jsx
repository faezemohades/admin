import { Form} from 'react-bootstrap';
import ContentTable from './ContentTable';
import React, {useEffect, useState } from 'react';
import Spinner from '../Other/Spinner';
import { languages } from '../../data/dummy'
import { useSelector, useDispatch } from 'react-redux'
import { getContent } from '../../store/contentSlice'
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const ContentList = () => {

    const { user, isLoggedIn } = useSelector((state) => state.auth);
    const [uniqueID, setUniqueID] = useState("");
    const [title, setTitle] = useState("");
    const [language, setLanguage] = useState("");
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()

    const handleOptionChange = (event) => {
        const selectedLanguage = event.target.value;
        setLanguage(selectedLanguage);
     };

    const handleTitle = (event) => {
        const selectedTiltle = event.target.value;
        setTitle(selectedTiltle);
     };

    useEffect(() => {

        if (isLoggedIn) {
            setUniqueID(user.uniqueID);
            dispatch(getContent({
                UniqueID: user.uniqueID,
                Title: title,
                Language: language
            }));

        }
    }, [isLoggedIn]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        dispatch(getContent({ UniqueID: user.uniqueID, Title: title, Language: language }));
        setLoading(false);
    };


    return (
        <>
            <div className="mb-4 content-list d-flex flex-column align-items-start">
                <Form onSubmit={handleSubmit }>
                    <div className="d-flex justify-content-center align-items-center flex-wrap mb-2">
                        <div className="d-flex justify-content-center align-items-center flex-wrap">
                            <TextInput label="نام محتوا :" value={title} onChange={handleTitle} />
                            <SelectInput label="زبان محتوا:" options={languages} value={language} onChange={handleOptionChange} />
                        </div>
                        <div className="">
                            <button type="submit" className="mt-4 mx-5 custom-button">
                                جستجو
                            </button>
                        </div>
                     </div>
                </Form>
                {loading ? <Spinner /> : <ContentTable/>}
             </div>
        </>
    )
}

export default ContentList;