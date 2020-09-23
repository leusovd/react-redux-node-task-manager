import React, { useState } from "react";
import "./add-item.scss";
import { connect } from 'react-redux';
import { tasksActions } from '../../../actions';

const AddItem = ({ addTask }) => {

    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (value !== '') {
            addTask(value);
            setValue('');
        }        
    }

    return (
        <form 
            className="add-item"
            onSubmit={handleSubmit}
        >
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Type task..."
                    aria-label="Add item"
                    aria-describedby="add-btn"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <div className="input-group-append">
                    <button
                        className="btn btn-outline-secondary"
                        type="submit"
                        id="add-btn"
                    >
                        Add
                    </button>
                </div>
            </div>
        </form>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (text) => tasksActions.addTask(dispatch)(text)
    };
};

export default connect(null, mapDispatchToProps)(AddItem);
