'use strict';

import * as types from '../../constants/actionTypes';

const initialState = {
  sessionLength: 25,
  breakLength: 5,
  currentMinute: "25",
  currentSecond: "00",
  isSessionRunning: false,
  isBreakRunning: false,
  isPaused: false,
  userInfo: "Session"
}

export default (state=initialState, action) => {
  switch(action.type) {
    case types.DECREMENT_TIMER: {
      return decrementTimer(state);
      break;
    }
    case types.START_POMODORO: {
      return {...state, isSessionRunning: true};
      break;
    }
    case types.PAUSE_POMODORO: {
      return Object.assign({}, state, {
        isPaused: true
      });
      break;
    }
    case types.RESUME_POMODORO: {
      return Object.assign({}, state, {
        isPaused: false
      });
      break;
    }
    case types.RESET_POMODORO: {
      return Object.assign({}, state, {
        isPaused: false,
        isSessionRunning: false,
        isBreakRunning: false,
        userInfo: "Session",
        currentMinute: "" + state.sessionLength,
        currentSecond: "00"
      });
      break;
    }
    case types.INCREMENT_SESSION: {
      if ( ! state.isSessionRunning) {
        return Object.assign({}, state, {
          sessionLength: state.sessionLength + 1,
          currentMinute: "" + (state.sessionLength + 1)
        });
      } else {
          return Object.assign({}, state, {
          sessionLength: state.sessionLength + 1
        });
      }
      break;
    }
    case types.DECREMENT_SESSION: {
      if ( ! state.isSessionRunning) {
        return Object.assign({}, state, {
          sessionLength: state.sessionLength <= 1 ? 1 : state.sessionLength - 1,
          currentMinute: "" + (state.sessionLength <= 1 ? 1 : state.sessionLength - 1)
        });
      } else {
        return Object.assign({}, state, {
          sessionLength: state.sessionLength <= 1 ? 1 : state.sessionLength - 1
        });
      }
      break;
    }
    case types.INCREMENT_BREAK: {
      return Object.assign({}, state, {
        breakLength: state.breakLength + 1
      });
      break;
    }
    case types.DECREMENT_BREAK: {
      return Object.assign({}, state, {
        breakLength: state.breakLength <= 1 ? 1 : state.breakLength - 1
      });
      break;
    }
  }
  return state;
}

function decrementTimer(state) {
  if (Number(state.currentSecond) === 0 && Number(state.currentMinute) === 0) {
    if (state.isSessionRunning) {
      return Object.assign({}, state, {
        currentMinute: state.breakLength - 1,
        currentSecond: 59,
        isSessionRunning: false,
        isBreakRunning: true,
        userInfo: "Break"
      });
    }
    if (state.isBreakRunning) {
      return Object.assign({}, state, {
        currentMinute: state.sessionLength - 1,
        currentSecond: 59,
        isSessionRunning: false,
        isBreakRunning: true,
        userInfo: "Session"
      });
    }
  }
  if (Number(state.currentSecond) === 0) {
    return Object.assign({}, state, {
      currentMinute: Number(state.currentMinute) - 1,
      currentSecond: 59
    });
  } else {
    return Object.assign({}, state, {
      currentSecond: Number(state.currentSecond) <= 10 ? "0" + (Number(state.currentSecond) - 1) : "" + (Number(state.currentSecond) - 1)
    });
  }
}
