import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL + '/auth';

const signup = (email, password) => {
    return axios.post(`${apiUrl}/signup`, { email, password })
        .then(({ data }) => {
            const { status, payload } = data;

            if (status === 'error') {
                throw new Error(data.message);
            }

            return payload;
        })
        .then((user) => {
            setUser(user);
            return user;
        })
        .catch((err) => {
            const message = (err.response && err.response.data && err.response.data.message) ||
                err.message || err.toString();
            throw new Error(message);
        });
}

const login = (email, password) => {
    return axios.post(`${apiUrl}/signin`, { email, password })
        .then(({ data }) => {
            const { status, payload } = data;

            if (status === 'error') {
                throw new Error(data.message);
            }

            return payload;
        })
        .then((user) => {
            setUser(user);
            return user;
        })
        .catch((err) => {
            const message = (err.response && err.response.data && err.response.data.message) ||
                err.message || err.toString();
            throw new Error(message);
        });
}

const logout = () => {
    localStorage.removeItem('user');
}

const setUser = (data) => {
    localStorage.setItem('user', JSON.stringify(data));
};

const getUser = () => {
    const data = localStorage.getItem('user');

    if (!data) {
        throw new Error('There is no user data in local storage');
    }

    return JSON.parse(data);
};

export {
    signup,
    login,
    logout,
    getUser
};