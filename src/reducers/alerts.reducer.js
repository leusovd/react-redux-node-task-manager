import { alertsConstants } from '../constants';

const initialState = [];

const updateAlerts = (state = initialState, action) => {
    switch (action.type) {
        case alertsConstants.ADD:
            return [...state, action.payload];
    
        case alertsConstants.REMOVE:
            const index = state.findIndex((item) => item.id === action.payload);
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ];

        default:
            return state;
    }
};

export default updateAlerts;