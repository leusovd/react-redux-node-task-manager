import React from "react";
import "./todo.scss";

import TodoHeader from "../todo-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import AddItem from "../add-item";

const Todo = () => {
    return (
        <div className="todo">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <TodoHeader />

                        <div className="d-flex">
                            <SearchPanel />
                            <ItemStatusFilter />
                        </div>

                        <TodoList />
                        <AddItem />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Todo;
