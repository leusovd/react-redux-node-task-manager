import React from "react";
import "./todo-list-item.scss";

import { ExclamationIcon, TrashIcon } from "../../@icons";

const TodoListItem = ({
    label,
    done,
    important = false,
    onDelete,
    onToggleImportant,
    onToggleDone,
}) => {
    const classNames = { label: "todo-list-item_label" };

    if (done) {
        classNames.label += " -done";
    }

    if (important) {
        classNames.label += " -important";
    }

    return (
        <div className="todo-list-item d-flex">
            <span 
                className={classNames.label}
                onClick={onToggleDone}
            >
                {label}
            </span>

            <div className="todo-list-item_btn-group">
                {/* Delete Task */}
                <button 
                    type="button" 
                    className="btn btn-outline-danger"
                    onClick={onDelete}
                >
                    <div className="icon">
                        <TrashIcon />
                    </div>
                </button>

                <button
                    type="button" 
                    className="btn btn-outline-success"
                    onClick={onToggleImportant}
                >
                    <div className="icon">
                        <ExclamationIcon />
                    </div>
                </button>
            </div>
        </div>
    );
};

export default TodoListItem;
