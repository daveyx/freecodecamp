'use strict';

import React from 'react';
import {connect} from 'react-redux';
import Display from '../components/display'

class DisplayContainer extends React.Component {
  render() {
    return(
      <Display display={this.props.display} miniDisplay={this.props.miniDisplay} />
    );
  }
}

function mapStatesToProps(state) {
  return {
    display: state.activeState.display,
    miniDisplay: state.activeState.miniDisplay
  }
}

export default connect(mapStatesToProps)(DisplayContainer);
