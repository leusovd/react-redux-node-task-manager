import { userConstants } from "../constants";

const {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    LOGOUT,
} = userConstants;

const user = JSON.parse(localStorage.getItem("user"));
const initialState = user
    ? { isLoggedIn: true, user, loading: false }
    : { isLoggedIn: false, loading: false };

const authenticate = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                isLoggedIn: false,
                loading: true,
            };

        case LOGIN_SUCCESS:
            return {
                isLoggedIn: true,
                user: action.payload,
                loading: false,
            };

        case LOGIN_FAILURE:
            return {
                isLoggedIn: false,
                loading: false,
                error: action.payload
            };

        case SIGNUP_REQUEST:
            return {
                isLoggedIn: false,
                loading: true,
            };

        case SIGNUP_SUCCESS:
            return {
                isLoggedIn: true,
                user: action.payload,
                loading: false,
            };

        case SIGNUP_FAILURE:
            return {
                isLoggedIn: false,
                loading: false,
                error: action.payload
            };

        case LOGOUT:
            return {
                isLoggedIn: false,
                loading: false,
            };

        default:
            return state;
    }
};

export default authenticate;
