import React from 'react';

const LabeledInput = ({ label, name, register, defaultValue }) => {
    return (
        <div className="form-group m-2">
            <label>{label}</label>
            <input type="text" {...register(name)} className="form-control" style={{ height: "40px" }} defaultValue={defaultValue} />
        </div>
    );
};

export default LabeledInput;
