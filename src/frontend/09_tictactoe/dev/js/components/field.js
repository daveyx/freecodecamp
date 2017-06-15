'use strict';

import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

export default class Field extends Component {
  constructor(props) {
    super();
  }

  setField() {
    if ( ! this.props.fieldState[1]) {
      this.props.clickHandler(this.props.fieldState[0], this.props.player);
    }
  }

  render() {
    return(
      <div className={`field ${this.props.fieldState}`} onClick={this.setField.bind(this)}>
        {this.props.fieldState[1]}
      </div>
    );
  }
}
