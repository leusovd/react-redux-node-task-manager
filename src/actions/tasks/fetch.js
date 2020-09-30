import { tasksConstants } from '../../constants';
import { tasksService } from '../../services';
import handleErrors from './handle-errors';

const fetchRequest = () => {
    return {
        type: tasksConstants.FETCH_REQUEST
    };
};

const fetchSuccess = (taskList) => {
    return {
        type: tasksConstants.FETCH_SUCCESS,
        payload: taskList
    };
};

const fetchFailure = (error) => {
    return {
        type: tasksConstants.FETCH_FAILURE,
        payload: error
    };
};

const fetchTasks = (dispatch) => {
    dispatch(fetchRequest());
    tasksService.getAll()
        .then((data) => dispatch(fetchSuccess(data)))
        .catch((error) => {
            handleErrors(dispatch)(error, fetchFailure);
        });
};

export default fetchTasks;