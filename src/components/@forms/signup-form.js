import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { connect } from 'react-redux';
import { userActions } from '../../actions';

import FormField from "./form-field";

const initialValues = {
    email: "",
    password: "",
    "confirm-password": "",
};

const validationSchema = Yup.object({
    email: Yup.string()
        .required("Email is required")
        .email("Invalid email address"),
    password: Yup.string()
        .required("Password is required")
        .matches(/^.{8,}$/, "Password must contains at least 8 characters"),
    "confirm-password": Yup.string()
        .required("Confirm your password")
        .when("password", {
            is: (password) => (password && password.length > 0 ? true : false),
            then: Yup.string().oneOf(
                [Yup.ref("password")],
                "Password doesn't match"
            ),
        }),
});

const SignupForm = ({ signup }) => {

    const handleSubmit = ({ email, password }) => {
        signup(email, password);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ errors, touched, isSubmitting }) => (
                <Form className="signup-form">
                    <h1 style={{ marginBottom: "50px" }}>Sign Up</h1>

                    <FormField
                        label="Email"
                        type="email"
                        name="email"
                        error={errors["email"]}
                        touched={touched["email"]}
                    />

                    <FormField
                        label="Password"
                        type="password"
                        name="password"
                        error={errors["password"]}
                        touched={touched["password"]}
                    />

                    <FormField
                        label="Confirm Password"
                        type="password"
                        name="confirm-password"
                        error={errors["confirm-password"]}
                        touched={touched["confirm-password"]}
                    />

                    <button
                        type="submit"
                        className="btn btn-primary mt-1"
                        disabled={isSubmitting}
                    >
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
};


const mapDispatchToProps = (dispatch) => {
    return {
        signup: userActions.signup(dispatch)
    };
}

export default connect(null, mapDispatchToProps)(SignupForm);
