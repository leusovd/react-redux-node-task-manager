import { tasksConstants } from '../../constants';
import { tasksService } from '../../services';
import { addNewAlert } from '../alerts.actions';

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
            dispatch(addSuccess(data));
        })
        .catch((error) => {
            dispatch(addFailure(error));
            addNewAlert(dispatch)(error);
        });
};

export default addTask;