import React from 'react';
import { Form } from 'react-bootstrap';
import { DatePicker } from "react-advance-jalaali-datepicker";

const JalaliDatePicker = ({label, value, preSelected, onChange,id }) => {
    const DatePickerInput = props => {
        return <input {...props} readOnly />;
    };

    return (
        <Form.Group className="mx-2 mb-2">
            <Form.Label >{label}</Form.Label>
            <DatePicker
                inputComponent={DatePickerInput}
                value={value}
                preSelected={preSelected}
                format="jYYYY/jMM/jDD"
                onChange={onChange}
                cancelOnBackgroundClick={true}
                id={id}
            />
        </Form.Group>
    );
};

export default JalaliDatePicker;
