import React from 'react';


const SelectForm = ({ label, name, register, options }) => {
    return (
        <div className="form-group m-2">
            <label>{label}</label>
            <select name={name} {...register(name)} className="form-select">
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

        </div>
    );
};

export default SelectForm;
