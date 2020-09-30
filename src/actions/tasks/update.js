import { tasksConstants } from '../../constants';
import { tasksService } from '../../services';
import handleErrors from './handle-errors';

const updateRequest = () => {
    return {
        type: tasksConstants.UPDATE_REQUEST        
    };
};

const updateSuccess = (data) => {
    return {
        type: tasksConstants.UPDATE_SUCCESS,
        payload: data
    };
};

const updateFailure = (error) => {
    return {
        type: tasksConstants.UPDATE_FAILURE,
        payload: error
    };
};

const updateTask = (dispatch) => (id, property, value) => {
    dispatch(updateRequest());
    tasksService.update(id, { property, value })
        .then((task) => {
            dispatch(updateSuccess(task));
        })
        .catch((error) => {
            handleErrors(dispatch)(error, updateFailure);
        });
};

export default updateTask;