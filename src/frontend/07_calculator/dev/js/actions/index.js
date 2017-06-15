export const clickButtonAction = (data) => {
  return {
    type: "BUTTON_CLICKED",
    payload: data
  }
};
export const clickOperatorAction = (data) => {
  return {
    type: "OPERATOR_CLICKED",
    payload: data
  }
};
export const clickEqualsAction = (data) => {
  return {
    type: "EQUALS_CLICKED",
    payload: data
  }
};
