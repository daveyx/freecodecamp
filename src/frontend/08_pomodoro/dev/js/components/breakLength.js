'use strict';

import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

export default class BreakLength extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="text-center">
        <Row>
          <Col xs={12}>
            Length of break
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="width-33 cursor-pointer" onClick={this.props.decrementBreak}>
              -
            </div>
            <div className="width-33">
              {this.props.breakLength}
            </div>
            <div className="width-33 cursor-pointer" onClick={this.props.incrementBreak}>
              +
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
