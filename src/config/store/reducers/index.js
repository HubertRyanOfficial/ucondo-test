import {combineReducers} from 'redux';

// * utils

import countReducer from './countReducer';

//

const reducers = combineReducers({countReducer});
export default reducers;
