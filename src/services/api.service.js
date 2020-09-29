import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const get = (uri) => {
    return request(uri);
};

const post = (uri, data) => {    
    return request(uri, { method: 'POST', data });
};

const request = (uri, { method = 'GET', data }) => {
    return axios({
        method: method,
        url: `${apiUrl}${uri}`,
        data: data || null
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
    post
};
