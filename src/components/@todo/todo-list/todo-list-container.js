import React, { useEffect } from "react";
import TodoListComponent from "./todo-list-component";
import { connect } from "react-redux";
import { tasksActions } from "../../../actions";

const TodoListContainer = ({
    todoData,
    searchValue,
    filter,
    getTodoData,
    deleteTodoItem,
    toggleImportant,
    toggleDone,
}) => {
    useEffect(getTodoData, []);

    const handleToggleImportant = (id) => {
        const item = todoData.find((todoItem) => todoItem.id === id);
        const oldValue = item["important"];
        toggleImportant(id, !oldValue);
    };

    const handleToggleDone = (id) => {
        const item = todoData.find((todoItem) => todoItem.id === id);
        const oldValue = item["done"];
        toggleDone(id, !oldValue);
    };

    const filterTodoList = () => {
        let filtered = todoData;

        if (filter === "active") {
            filtered = todoData.filter((item) => !item.done);
        } else if (filter === "done") {
            filtered = todoData.filter((item) => item.done);
        }

        if (searchValue.length) {
            filtered = todoData.filter((item) => {
                const searchValueIndex = item.label
                    .toLowerCase()
                    .indexOf(searchValue.toLowerCase());
                return searchValueIndex > -1;
            });
        }

        return filtered;
    };

    const filteredData = filterTodoList();

    return (
        <TodoListComponent
            onDelete={deleteTodoItem}
            onToggleImportant={handleToggleImportant}
            onToggleDone={handleToggleDone}
            todos={filteredData}
        />
    );
};

const mapStateToProps = ({ todoData: { taskList, searchValue, filter } }) => {
    return {
        todoData: taskList,
        searchValue,
        filter,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTodoData: () => tasksActions.fetchTasks(dispatch),
        deleteTodoItem: (id) => tasksActions.deleteTask(dispatch)(id),
        toggleDone: (id, value) =>
            tasksActions.updateTask(dispatch)(id, "done", value),
        toggleImportant: (id, value) =>
            tasksActions.updateTask(dispatch)(id, "important", value),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
