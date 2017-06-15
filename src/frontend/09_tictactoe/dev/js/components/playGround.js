'use strict';

import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import Field from './field'

export default class PlayGround extends Component {
  constructor(props) {
    super();
  }

  render() {
    // const gameState = Object.entries(this.props.gameState); not working on ie11
    let gameState = [];
    for (var key in this.props.gameState) {
      gameState.push([key, this.props.gameState[key]]);
    }

    return(
      <div className="playground">
        <Row>
          <Col xs={4}>
            <Field fieldState={gameState[0]} clickHandler={this.props.clickHandler} player={this.props.player} />
          </Col>
          <Col xs={4}>
            <Field fieldState={gameState[1]} clickHandler={this.props.clickHandler} player={this.props.player} />
          </Col>
          <Col xs={4}>
            <Field fieldState={gameState[2]} clickHandler={this.props.clickHandler} player={this.props.player} />
          </Col>
        </Row>
          <Row>
            <Col xs={4}>
              <Field fieldState={gameState[3]} clickHandler={this.props.clickHandler} player={this.props.player} />
            </Col>
            <Col xs={4}>
              <Field fieldState={gameState[4]} clickHandler={this.props.clickHandler} player={this.props.player} />
            </Col>
            <Col xs={4}>
              <Field fieldState={gameState[5]} clickHandler={this.props.clickHandler} player={this.props.player} />
            </Col>
          </Row>
            <Row>
              <Col xs={4}>
                <Field fieldState={gameState[6]} clickHandler={this.props.clickHandler} player={this.props.player} />
              </Col>
              <Col xs={4}>
                <Field fieldState={gameState[7]} clickHandler={this.props.clickHandler} player={this.props.player} />
              </Col>
              <Col xs={4}>
                <Field fieldState={gameState[8]} clickHandler={this.props.clickHandler} player={this.props.player} />
              </Col>
            </Row>
      </div>
    );
  }
}
