'use strict';

import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

export default class PlayerSelection extends Component {
  constructor(props) {
    super();
    this.selectPlayerX = this.selectPlayerX.bind(this);
    this.selectPlayerO = this.selectPlayerO.bind(this);
  }

  selectPlayerX() {
    this.props.clickHandler("X");
  }

  selectPlayerO() {
    this.props.clickHandler("O");
  }

  render() {
    return(
      <div>
        <Row>
          <Col xs={12}>
            What you wanna play?
          </Col>
        </Row>
        <Row className="player-selection">
          <Col xs={2} xsOffset={4}>
            <div onClick={() => this.selectPlayerX()}>
              X
            </div>
          </Col>
          <Col xs={2}>
            <div onClick={() => this.selectPlayerO()}>
              O
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
