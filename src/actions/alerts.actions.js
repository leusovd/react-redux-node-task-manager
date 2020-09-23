import { alertsConstants } from '../constants';

const removeAlert = (id) => {
    return {
        type: alertsConstants.REMOVE,
        payload: id
    };
};

const addAlert = (data) => {
    return {
        type: alertsConstants.ADD,
        payload: data
    };
};

const addNewAlert = (dispatch) => (message) => {
    const id = Math.floor(Math.random() * Math.pow(10, 5));
    dispatch(addAlert({id, message}));

    setTimeout(() => {
        dispatch(removeAlert(id));
    }, 5000);
};

export { addNewAlert };