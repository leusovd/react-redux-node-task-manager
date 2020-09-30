import { addNewAlert } from '../alerts.actions';
import { logout } from '../user.actions';

export default (dispatch) => ({ message, code }, action) => {
    if (code === 401 || code === 403) {
        logout(dispatch)();
    }
    dispatch(action(message));
    addNewAlert(dispatch)(message);
};