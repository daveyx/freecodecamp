'use strict';

import {combineReducers} from 'redux';
import ActiveState from  './reducer-calculator'

const allReducers = combineReducers({
  activeState: ActiveState
});

export default allReducers;
