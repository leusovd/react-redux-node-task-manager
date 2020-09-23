import React from "react";
import { Field, ErrorMessage } from "formik";

const FormField = ({ type = 'text', name, label, placeholder, error, touched }) => {

    const className = (error && touched)
    ? "form-control is-invalid"
    : "form-control";

    const labelField = label ? <label htmlFor={name}>{label}</label> : null;

    return (
        <div className="form-group">
            {labelField}
            <Field
                type={type}
                name={name}
                className={className}
                placeholder={placeholder}
            />
            <ErrorMessage
                name={name}
                className="invalid-feedback"
                component="p"
            />
        </div>
    );
};

export default FormField;
