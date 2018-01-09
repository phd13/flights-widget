import actionTypes from '../constants/actionTypes';
import {aviaInfoState} from '../states/aviaInfoState';

export default (state = aviaInfoState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_FLIGHTS_DATA:
            return {...state, flights: action.payload.flights};
        case actionTypes.CHANGE_ACTIVE_CARRIER:
            return {...state, selectedCarrier: action.payload};
        default:
            return state;
    }
};
