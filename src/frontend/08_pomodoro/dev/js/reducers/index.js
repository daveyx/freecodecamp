'use strict';

import {combineReducers} from 'redux';
import PomodoroState from  './reducer-pomodoro'

const allReducers = combineReducers({
  pomodoroState: PomodoroState
});

export default allReducers;
