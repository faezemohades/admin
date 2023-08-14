import { Form } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import moment from "moment-jalaali";
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from "react-hook-form";
import LabeledInput from './LabeledInput';
import SelectForm from './SelectForm';
import { languages } from '../../data/dummy';

const AuditList = () => {

    const { user, isLoggedIn } = useSelector((state) => state.auth);
    const [uniqueID, setUniqueID] = useState("");
    const dispatch = useDispatch()
    const currentDateTime = moment().format('jYYYY/jMM/jDD HH:mm');
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    useEffect(() => {
        if (isLoggedIn) {
            setUniqueID(user.uniqueID);
        }
    }, [isLoggedIn]);

    const onSubmit = (formData) => {
        setData(JSON.stringify(formData)); 
        console.log(formData);
    };

    return (
        <>
            <div className="mb-4 content-list d-flex flex-column align-items-center pt-2">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <div className="d-flex justify-content-center align-items-center flex-wrap mb-2">
                        <div className="add-audit">
                            <div className="d-flex justify-content-center flex-wrap pt-2">
                                <LabeledInput label="عنوان:" name="title" register={register}  />
                                <LabeledInput label="تعداد کل ممیزی:" name="allAudit" register={register} />
                            </div>
                            <div className="d-flex justify-content-center flex-wrap pt-2">
                                <SelectForm label="نوع محتوا:" name="type" register={register} options={languages} />
                                <SelectForm label="صوت:" name="voice" register={register} options={languages} />
                            </div>
                            <div className="d-flex justify-content-center flex-wrap pt-2">
                                <LabeledInput label="زمان کلی فیلم (قبل از ممیزی):" name="totalTime" register={register} defaultValue="00:00:00" />
                                <LabeledInput label="زمان فیلم (بعد از ممیزی):" name="movieTime" register={register} defaultValue="00:00:00" />
                            </div>
                            <div className="d-flex justify-content-center flex-wrap pt-2">
                                <LabeledInput label="تاریخ شروع ممیزی:" name="startAudit" register={register} defaultValue={currentDateTime } />
                                <LabeledInput label="تاریخ پایان ممیزی:" name="endAudit" register={register} defaultValue={currentDateTime } />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center pt-2" style={{ borderBottom:"" }}>
                        <p style={{ fontSize: "16px"}}>ایجاد فرم</p>
                    </div>
                    <div className="d-flex justify-content-center flex-wrap py-3">
                        <LabeledInput label="از:" name="from" register={register} defaultValue="00:00:00" />
                        <LabeledInput label="تا:" name="to" register={register} defaultValue="00:00:00" />
                        <SelectForm label="" name="undefiend" register={register} options={languages} />
                        <SelectForm label="" name="undefiends" register={register} options={languages} />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="mt-4 mx-5 custom-button" style={{ width:"200px" }}>
                            ثبت
                        </button>
                        <p>{data}</p>

                    </div>
                </Form>
            </div>
        </>
    )
}

export default AuditList;