import Axios from 'axios';
import actionTypes from '../constants/actionTypes';

export const loadFlightsData = () => (dispatch) => {
    Axios
        .get('/data.json')
        .then((res) => {
            dispatch({
                type: actionTypes.LOAD_FLIGHTS_DATA,
                payload: res.data
            });
        })
        .catch((err) => {
            console.log('An error occurred!', err);
        });
};

export const changeSelectedCarrier = (newValue) => (dispatch) => {
    dispatch({
        type: actionTypes.CHANGE_ACTIVE_CARRIER,
        payload: newValue
    });
};
