import authenticate from './auth.reducer';
import updateTodoData from './todo.reducer';
import updateAlerts from './alerts.reducer';

const reducer = ({authentication, todoData, alerts} = {}, action) => {
    return {
        authentication: authenticate(authentication, action),
        todoData: updateTodoData(todoData, action),
        alerts: updateAlerts(alerts, action)
    }
};

export default reducer;