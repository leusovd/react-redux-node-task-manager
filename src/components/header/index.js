import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { userActions } from '../../actions';
import './header.scss';

const UnauthenticatedNav = () => {
    return (
        <nav className="nav justify-content-end">
            <Link to="/login" className="nav-link">
                Login
            </Link>
            <Link to="/signup" className="nav-link">
                Sign Up
            </Link>
        </nav>
    );
};

const AuthenticatedNav = ({ onLogout }) => {
    return (
        <nav className="nav justify-content-end">
            <button className="btn btn-link nav-link btn-logout" onClick={onLogout}>Logout</button>
        </nav>
    );
};

const Header = ({ isLoggedIn, logout }) => {

    const navigation = isLoggedIn ? <AuthenticatedNav onLogout={logout} /> : <UnauthenticatedNav />;

    return (
        <header className="app-header">
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-6">
                        {navigation}
                    </div>
                </div>
            </div>
        </header>
    );
};

const mapStateToProps = ({ authentication: { isLoggedIn } }) => {
    return { isLoggedIn };
};

const mapDispatchToProps = (dispatch) => {
    return { logout: userActions.logout(dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
