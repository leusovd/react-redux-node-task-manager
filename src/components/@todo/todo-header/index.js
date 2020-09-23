import React from 'react';
import './todo-header.scss';
import { connect } from 'react-redux';

const TodoHeader = ({ todoData }) => {
    const doneCount = todoData.filter((item) => item.done).length;
    const todoCount = todoData.length - doneCount;

    return (
        <div className="todo-header d-flex">
            <h1>Todo List</h1>
            <h2>{todoCount} more to do, {doneCount} done</h2>
        </div>
    );
};

const mapStateToProps = ({ todoData: { taskList }}) => {
    return { todoData: taskList };
};

export default connect(mapStateToProps)(TodoHeader);