import React from 'react';
import { Form } from 'react-bootstrap';

const TextInput = ({ label, value, onChange }) => {
    return (
        <Form.Group className="mx-2 mb-3">
            <Form.Label>{label}</Form.Label>
            <Form.Control
                type="text"
                id="inputText"
                aria-describedby="textHelpBlock"
                style={{ width: "200px", height: "31px" }}
                value={value}
                onChange={onChange}
            />
        </Form.Group>
    );
};

export default TextInput;
