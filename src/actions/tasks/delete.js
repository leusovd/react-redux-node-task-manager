import { tasksConstants } from '../../constants';
import { tasksService } from '../../services';
import handleErrors from './handle-errors';

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
            handleErrors(dispatch)(error, deleteFailure);
        });    
};

export default deleteTask;