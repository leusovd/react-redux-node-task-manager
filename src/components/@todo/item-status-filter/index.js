import React from 'react';
import './item-status-filter.scss';
import { connect } from 'react-redux';
import { tasksActions } from '../../../actions';

const ItemStatusFilter = ({ filterValue, changeFilterValue }) => {
    const buttons = [
        { label: 'All', name: 'all' },
        { label: 'Active', name: 'active' },
        { label: 'Done', name: 'done' }
    ];
    
    const filterButtons = buttons.map(({label, name}) => {
        const btnClass = filterValue === name ? 'btn-outline-info active' : 'btn-outline-secondary';

        return (
            <button
                type="button"
                className={`btn ${btnClass}`}
                key={name}
                onClick={() => changeFilterValue(name)}
            >{label}</button>
        );
    });

    return <div className="item-status-filter btn-group">{filterButtons}</div>;
};

const mapStateToProps = ({ todoData: { filter }}) => {
    return { filterValue: filter };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeFilterValue: (value) => dispatch(tasksActions.changeFilter(value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemStatusFilter);