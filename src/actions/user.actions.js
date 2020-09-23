import { userConstants } from "../constants";
import { userService } from '../services';

const loginRequest = (user) => {
    return {
        type: userConstants.LOGIN_REQUEST,
        payload: user
    };
};

const loginSuccess = (user) => {
    return {
        type: userConstants.LOGIN_SUCCESS,
        payload: user
    };
};

const loginFailure = (error) => {
    return {
        type: userConstants.LOGIN_FAILURE,
        payload: error
    }
};

const login = (dispatch) => {
    return (email, password) => {
        dispatch(loginRequest({ email }));

        return userService.login(email, password)
            .then((user) => {
                dispatch(loginSuccess(user));
            })
            .catch((error) => {
                dispatch(loginFailure(error));
            });
    };
};

const signupRequest = (user) => {
    return {
        type: userConstants.SIGNUP_REQUEST,
        payload: user
    };
};

const signupSuccess = (user) => {
    return {
        type: userConstants.SIGNUP_SUCCESS,
        payload: user
    };
};

const signupFailure = (error) => {
    return {
        type: userConstants.SIGNUP_FAILURE,
        payload: error
    }
};

const signup = (dispatch) => {
    return (email, password) => {
        dispatch(signupRequest({ email }));

        return userService.signup(email, password)
            .then((user) => {
                dispatch(signupSuccess(user));
            })
            .catch((error) => {
                dispatch(signupFailure(error));
            });
    };
};

const logout = (dispatch) => () => {
    userService.logout();
    dispatch({ type: userConstants.LOGOUT });
};

export {
    login,
    signup,
    logout
};