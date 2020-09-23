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

const togglePropertyAndUpdateData = (arr, id, propName, value) => {
    const index = arr.findIndex((item) => item.id === id);
    const oldItem = arr[index];
    const newItem = { ...oldItem };
    newItem[propName] = value;

    return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)];
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
            const { id, property, value } = action.payload;
            const updatedTaskList = togglePropertyAndUpdateData(state.taskList, id, property, value);
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
