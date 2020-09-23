import { tasksConstants } from '../../constants';
import { tasksService } from '../../services';
import { addNewAlert } from '../alerts.actions';

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
    tasksService.patch(id, {[property]: value})
        .then(() => {
            dispatch(updateSuccess({ id, property, value }));
        })
        .catch((error) => {
            dispatch(updateFailure(error));
            addNewAlert(dispatch)(error);
        });
};

export default updateTask;