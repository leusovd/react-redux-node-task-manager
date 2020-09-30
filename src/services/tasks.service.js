import * as api from './api.service';
import { getToken } from './user.service';

const post = (text) => {
    const accessToken = getToken();
    return api.post('/tasks', { text }, accessToken);
    
}

const getAll = () => {
    const accessToken = getToken();
    return api.get('/tasks', accessToken);
};

const update = (id, data) => {
    const accessToken = getToken();
    return api.patch(`/tasks/${id}`, data, accessToken);
};

const deleteOne = (id) => {
    const accessToken = getToken();
    return api.deleteReq(`/tasks/${id}`, accessToken);
};

export {
    getAll,
    update,
    deleteOne,
    post
};