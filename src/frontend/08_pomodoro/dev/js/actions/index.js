'use strict';

import * as types from '../../constants/actionTypes';

export const decrementTimerAction = () => {
  return {
    type: types.DECREMENT_TIMER
  };
};
export const startPomodoroAction = () => {
  return {
    type: types.START_POMODORO
  };
};
export const pausePomodoroAction = () => {
  return {
    type: types.PAUSE_POMODORO
  };
};
export const resumePomodoroAction = () => {
  return {
    type: types.RESUME_POMODORO
  };
};
export const resetPomodoroAction = () => {
  return {
    type: types.RESET_POMODORO
  };
};
export const incrementSessionAction = () => {
  return {
    type: types.INCREMENT_SESSION
  };
};
export const decrementSessionAction = () => {
  return {
    type: types.DECREMENT_SESSION
  };
};
export const incrementBreakAction = () => {
  return {
    type: types.INCREMENT_BREAK
  };
};
export const decrementBreakAction = () => {
  return {
    type: types.DECREMENT_BREAK
  };
};
