'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SessionLength from '../components/sessionLength';
import {
  incrementSessionAction,
  decrementSessionAction
} from '../actions/index';

class SessionLengthContainer extends React.Component {
  render() {
    return(
      <SessionLength
        sessionLength={this.props.sessionLength}
        incrementSession={this.props.incrementSession}
        decrementSession={this.props.decrementSession}
      />
    );
  }
}

function mapStatesToProps(state) {
  return {
    sessionLength: state.pomodoroState.sessionLength
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    incrementSession: incrementSessionAction,
    decrementSession: decrementSessionAction
  }, dispatch)
}

export default connect(mapStatesToProps, matchDispatchToProps)(SessionLengthContainer);
