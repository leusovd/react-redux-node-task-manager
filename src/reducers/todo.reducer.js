import { tasksConstants } from "../constants";

const {
    FETCH_REQUEST,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    UPDATE_SUCCESS,
    DELETE_SUCCESS,
    ADD_SUCCESS,
    CHANGE_SEARCH,
    CHANGE_FILTER,
} = tasksConstants;

const initialState = {
    loading: false,
    taskList: [],
    searchValue: "",
    filter: "all",
};

const updateData = (arr, updatedItem) => {
    const index = arr.findIndex((item) => item.id === updatedItem.id);
    return [...arr.slice(0, index), updatedItem, ...arr.slice(index + 1)];
};

const deleteTodoItem = (taskList, id) => {
    const itemIndex = taskList.findIndex((taskItem) => taskItem.id === id);
    return [
        ...taskList.slice(0, itemIndex),
        ...taskList.slice(itemIndex + 1)
    ];
};

const updateTodoData = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return { ...state, loading: true };

        case FETCH_SUCCESS:
            return { ...state, loading: false, taskList: action.payload };

        case FETCH_FAILURE:
            return { ...state, loading: false };

        case UPDATE_SUCCESS: {
            const updatedTask = action.payload;
            const updatedTaskList = updateData(state.taskList, updatedTask);
            return { ...state, taskList: updatedTaskList };
        };

        case DELETE_SUCCESS: {
            const updatedTaskList = deleteTodoItem(state.taskList, action.payload);
            return { ...state, taskList: updatedTaskList };
        };

        case ADD_SUCCESS: {
            const updatedTaskList = state.taskList.slice();
            updatedTaskList.push(action.payload);
            return { ...state, taskList: updatedTaskList };
        };

        case CHANGE_SEARCH:
            return { ...state, searchValue: action.payload };

        case CHANGE_FILTER:
            return { ...state, filter: action.payload };

        default:
            return state;
    }
};

export default updateTodoData;
