import { tasksConstants } from '../../constants';
import fetchTasks from './fetch';
import updateTask from './update';
import deleteTask from './delete';
import addTask from './add';

const changeSearch = (value) => {
    return {
        type: tasksConstants.CHANGE_SEARCH,
        payload: value
    };
};

const changeFilter = (value) => {
    return {
        type: tasksConstants.CHANGE_FILTER,
        payload: value
    };
};

export {
    fetchTasks,
    updateTask,
    deleteTask,
    addTask,
    changeSearch,
    changeFilter
};