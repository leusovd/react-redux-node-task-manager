import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const get = (uri, token) => {
    return request(uri, { accessToken: token });
};

const patch = (uri, data, token) => {
    return request(uri, { method: 'PATCH', data, accessToken: token });
};

const post = (uri, data, token) => {    
    return request(uri, { method: 'POST', data, accessToken: token });
};

const deleteReq = (uri, token) => {
    return request(uri, { method: 'DELETE', accessToken: token });
};

const request = (uri, options = {}) => {
    const method = options.method || 'GET';
    const data = options.data || null;
    const accessToken = options.accessToken || null;

    return axios({
        method: method,
        url: `${apiUrl}${uri}`,
        data: data,
        headers: {
            'x-access-token': accessToken
        }
    })
        .then(({ data }) => {
            const { status, payload } = data;

            if (status === "error") {
                throw new Error(data.message);
            }

            return payload;
        })
        .catch((err) => {
            const message =
                (err.response &&
                    err.response.data &&
                    err.response.data.message) ||
                err.message ||
                err.toString();

            const error = new Error(message);
            error.code = err.response.status;
            throw error;
        });
}

export {
    get,
    patch,
    post,
    deleteReq
};
