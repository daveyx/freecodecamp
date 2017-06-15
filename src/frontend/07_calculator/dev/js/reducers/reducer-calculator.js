'use strict';

const initialState = {
  display: [],
  miniDisplay: "",
  result: ""
}

const errorState = {
  display: [],
  miniDisplay: "Sorry, can not display digit length",
  result: ""
}

export default (state=initialState, action) => {
  switch(action.type) {
    case "BUTTON_CLICKED":
      if (state.display.length >= 8) {
        return Object.assign(errorState);
      }
      return state.result ?
        {
          display: [action.payload],
          miniDisplay: action.payload,
          result: ""
        } :
        Object.assign({}, state, {
          display: /\d/.test(state.display) ? state.display.concat(action.payload) : [action.payload],
          miniDisplay: state.miniDisplay === errorState.miniDisplay ? action.payload : state.miniDisplay + action.payload
        });
    case "OPERATOR_CLICKED":
      switch(action.payload) {
        case "AC":
          return Object.assign(initialState);
        case "CE":
          if (state.result) {
            return Object.assign(initialState);
          }
          if (state.miniDisplay.length < 2) {
            return initialState;
          }
          return Object.assign({}, state, {
            display: state.miniDisplay[state.miniDisplay.length - 2],
            miniDisplay: state.miniDisplay.substr(0, state.miniDisplay.length - 1)
          });
        default:
          return state.result ?
            {
              display: [action.payload],
              miniDisplay: state.result + action.payload,
              result: ""
            } :
            /\d/.test(state.display[state.display.length - 1]) ?
              Object.assign({}, state, {
                display: action.payload,
                miniDisplay: state.miniDisplay + action.payload
              }) :
              Object.assign({}, state);
      }
    case "EQUALS_CLICKED":
      if (state.result) {
        return Object.assign(state);
      }
      let result = calculate(state);
      if (maxDigitsReached("" + result.result)) {
        return Object.assign(errorState);
      }
      return result;
  }
  return state;
}

function maxDigitsReached(val) {
  if (val.length >= 9) {
    return true;
  }
  return false;
}

function calculate(state) {
  let operands = [];
  let operators = [];
  let tempOperand = "";
  for (let i = 0; i < state.miniDisplay.length; i++) {
    let val = state.miniDisplay[i];
    if (/\d|\./.test(val)) {
      tempOperand += val;
    } else {
      operands.push(tempOperand);
      tempOperand = "";
      operators.push(val);
    }
  };
  operands.push(tempOperand);
  let result = operands.reduce((acc, current, index) => {
    if (acc === null) {
      return current;
    } else {
      return (calculateInternal(acc, current, operators[index - 1]));
    }
  }, null);
  return Object.assign({}, state, {
    display: [result],
    miniDisplay: state.miniDisplay + "=" + result,
    result: result
  });
};

function calculateInternal(op1, op2, operator) {
  let result;
  switch(operator) {
    case "+":
      result = Number(op1) + Number(op2);
      break;
    case "-":
      result = Number(op1) - Number(op2);
      break;
    case "*":
      result = Number(op1) * Number(op2);
      break;
    case "/":
      result = Number(op1) / Number(op2);
      break;
    default: return undefined;
  }
  return round(result);
}

// round function if answer includes a decimal
// stolen from https://codepen.io/freeCodeCamp/pen/rLJZrA?editors=0010
function round(val) {
  val = val.toString().split('');
  if (val.indexOf('.') !== -1) {
    var valTest = val.slice(val.indexOf('.') + 1, val.length);
    val = val.slice(0, val.indexOf('.') + 1);
    var i = 0;
    while (valTest[i] < 1) {
      i++
    }
    valTest = valTest.join('').slice(0, i + 2);
    if (valTest[valTest.length-1] === '0') {
      valTest = valTest.slice(0, -1);
    }
    return val.join('') + valTest;
  } else {
    return val.join('');
  }
}
