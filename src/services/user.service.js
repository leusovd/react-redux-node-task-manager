import * as api from './api.service';

const authUri = "/auth";

const signup = (email, password) => {
    return api.post(`${authUri}/signup`, { email, password })
        .then((user) => {
            setUser(user);
            return user;
        });
};

const login = (email, password) => {
    return api.post(`${authUri}/signin`, { email, password })
        .then((user) => {
            setUser(user);
            return user;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

const setUser = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
};

const getUser = () => {
    const data = localStorage.getItem("user");

    if (!data) {
        throw new Error("There is no user data in local storage");
    }

    return JSON.parse(data);
};

const getToken = () => {
    const user = getUser();
    
    if (!user.accessToken) {
        throw new Error("There is no access token in user data!");
    }
    
    return user.accessToken;
};

const isTokenExpired = () => {
    const token = getToken();

    const jwt = JSON.parse(atob(token.split(".")[1]));

    if (!jwt.exp) {
        throw new Error('Access token expiration date is no defined!');
    };

    return (Date.now() > jwt.exp);
}

export { signup, login, logout, getUser, getToken, isTokenExpired };
