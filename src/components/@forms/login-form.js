import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { connect } from 'react-redux';
import { userActions } from '../../actions';

import FormField from './form-field';

const initialValues = {
    email: "",
    password: "",
};

const validationSchema = Yup.object({
    email: Yup.string()
        .required("Email is required")
        .email("Invalid email address"),
    password: Yup.string()
        .required("Password is required")
        .matches(/^.{8,}$/, "Password must contains at least 8 characters"),
});

const LoginForm = ({ login }) => {

    const handleSubmit = ({ email, password }) => {
        login(email, password);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}            
        >
            {({ errors, touched, isSubmitting }) => (
                <Form className="login-form">
                    <h1 style={{ marginBottom: "50px" }}>Login</h1>

                    <FormField
                        label="Email"
                        type="email"
                        name="email"
                        error={errors['email']}
                        touched={touched['email']}
                    />

                    <FormField
                        label="Password"
                        type="password"
                        name="password"
                        error={errors['password']}
                        touched={touched['password']}
                    />

                    <button type="submit" className="btn btn-primary mt-1" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: userActions.login(dispatch)
    };
}

export default connect(null, mapDispatchToProps)(LoginForm);
