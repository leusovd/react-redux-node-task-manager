import { tasksConstants } from '../../constants';
import { tasksService } from '../../services';
import handleErrors from './handle-errors';

const addRequest = () => {
    return {
        type: tasksConstants.ADD_REQUEST
    }
};

const addSuccess = (item) => {
    return {
        type: tasksConstants.ADD_SUCCESS,
        payload: item
    };
};

const addFailure = (error) => {
    return {
        type: tasksConstants.ADD_FAILURE,
        payload: error
    };
};

const addTask = (dispatch) => (text) => {
    dispatch(addRequest());
    tasksService.post(text)
        .then((data) => {
            console.log(data);
            dispatch(addSuccess(data));
        })
        .catch((error) => {
            handleErrors(dispatch)(error, addFailure);
        });
};

export default addTask;