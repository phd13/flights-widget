import {combineReducers} from 'redux';
import aviaInfoReducer from './aviaInfoReducer';

export default combineReducers({
    aviaInfo: aviaInfoReducer
});
