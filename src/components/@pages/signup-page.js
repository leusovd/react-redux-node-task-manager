import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { SignupForm } from '../@forms';

const SignupPage = ({ isLoggedIn }) => {
    if (isLoggedIn) {
        return <Redirect to="/" />;
    }
    
    return (
        <div className="login-page">
            <div className="container">
                <div className="row justify-content-center" style={{margin: '100px 0'}}>
                    <div className="col-md-6">
                        <SignupForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = ({ authentication: { isLoggedIn }}) => {
    return { isLoggedIn };
};

export default connect(mapStateToProps)(SignupPage);