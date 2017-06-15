'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import BreakLength from '../components/breakLength'
import {
  incrementBreakAction,
  decrementBreakAction
} from '../actions/index';

class BreakLengthContainer extends React.Component {
  render() {
    return(
      <BreakLength
        breakLength={this.props.breakLength}
        incrementBreak={this.props.incrementBreak}
        decrementBreak={this.props.decrementBreak}
      />
    );
  }
}

function mapStatesToProps(state) {
  return {
    breakLength: state.pomodoroState.breakLength
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    incrementBreak: incrementBreakAction,
    decrementBreak: decrementBreakAction
  }, dispatch)
}

export default connect(mapStatesToProps, matchDispatchToProps)(BreakLengthContainer);
