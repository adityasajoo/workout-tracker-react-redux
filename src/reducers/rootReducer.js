import {combineReducers} from 'redux';
import activitiesReducer from './activitesReducer';

const rootReducer = combineReducers({
    activities : activitiesReducer,
})

export default rootReducer;