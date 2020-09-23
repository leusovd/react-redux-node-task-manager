import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => {
    return <Route {...rest} render={(props) => (
        isLoggedIn ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location }}} />
        )} />
};

const mapStateToProps = ({ authentication: { isLoggedIn } }) => {
    return { isLoggedIn };
};

export default connect(mapStateToProps)(PrivateRoute);