import { tasksConstants } from '../../constants';
import { tasksService } from '../../services';
import { addNewAlert } from '../alerts.actions';

const deleteRequest = () => {
    return {
        type: tasksConstants.DELETE_REQUEST,
        
    };
};

const deleteSuccess = (id) => {
    return {
        type: tasksConstants.DELETE_SUCCESS,
        payload: id
    };
};

const deleteFailure = (error) => {
    return {
        type: tasksConstants.DELETE_FAILURE,
        payload: error
    };
};

const deleteTask = (dispatch) => (id) => {
    dispatch(deleteRequest());
    tasksService.deleteOne(id)
        .then(() => dispatch(deleteSuccess(id)))
        .catch((error) => {
            dispatch(deleteFailure(error));
            addNewAlert(dispatch)(error);
        });    
};

export default deleteTask;