import React from 'react';
import { Form } from 'react-bootstrap';

const SelectInput = ({ label, options, value, onChange }) => {
    return (
        <Form.Group className="mx-2 mb-3">
            <Form.Label>{label}</Form.Label>
            <Form.Select size="sm" onChange={onChange} value={value}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </Form.Select>
        </Form.Group>
    );
};

export default SelectInput;
