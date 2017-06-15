'use strict';

import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Button from '../components/button';
import {clickButtonAction, clickOperatorAction, clickEqualsAction} from '../actions/index';
import {resetAction} from '../actions/index';

class ButtonContainer extends React.Component {
  render() {
    let clickHandler;
    if (this.props.value === "=") {
      clickHandler = () => this.props.clickEquals(this.props.value);
    } else if (/\d/.test(this.props.value)) {
      clickHandler = () => this.props.clickButton(this.props.value);
    } else {
      clickHandler = () => this.props.clickOperator(this.props.value);
    }
    return(
      <Button value={this.props.value} clickHandler={clickHandler} />
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    clickButton: clickButtonAction,
    clickOperator: clickOperatorAction,
    clickEquals: clickEqualsAction
  }, dispatch)
}

export default connect(null, matchDispatchToProps)(ButtonContainer);
