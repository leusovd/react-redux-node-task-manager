const signup = (email, password) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ email, password });
        }, 1000);
    }).then((user) => {
        localStorage.setItem('user', JSON.stringify(user));
        return user;
    });
}

const login = (email, password) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ email, password });
        }, 1000);
    }).then((user) => {
        localStorage.setItem('user', JSON.stringify(user));
        return user;
    });
}

const logout = () => {
    localStorage.removeItem('user');
}

export {
    signup,
    login,
    logout
};