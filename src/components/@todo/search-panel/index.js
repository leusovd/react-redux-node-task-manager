import React from "react";
import "./search-panel.scss";
import { connect } from 'react-redux';
import { tasksActions } from '../../../actions';

const SearchPanel = ({ changeSearchValue }) => {
    return (
        <input
            className="search-panel form-control"
            placeholder="search"
            onChange={(e) => changeSearchValue(e.target.value)}
        />
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeSearchValue: (value) => dispatch(tasksActions.changeSearch(value))
    };
};

export default connect(null, mapDispatchToProps)(SearchPanel);
