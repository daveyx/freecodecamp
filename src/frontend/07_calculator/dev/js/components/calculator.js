'use strict';

import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import '../../css/style.css';
import DisplayContainer from '../containers/displayContainer';
import ButtonContainer from '../containers/buttonContainer';

export default class Calculator extends Component {
  constructor(props) {
    super();
  }

  render() {
    return(
      <div className="main">
        <Row>
          <Col xs={12}>
            <DisplayContainer />
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <ButtonContainer value="AC" />
          </Col>
          <Col xs={6}>
            <ButtonContainer value="CE" />
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <ButtonContainer value="7" />
          </Col>
          <Col xs={3}>
            <ButtonContainer value="8" />
          </Col>
          <Col xs={3}>
            <ButtonContainer value="9" />
          </Col>
          <Col xs={3}>
            <ButtonContainer value="/" />
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <ButtonContainer value="4" />
          </Col>
          <Col xs={3}>
            <ButtonContainer value="5" />
          </Col>
          <Col xs={3}>
            <ButtonContainer value="6" />
          </Col>
          <Col xs={3}>
            <ButtonContainer value="*" />
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <ButtonContainer value="1" />
          </Col>
          <Col xs={3}>
            <ButtonContainer value="2" />
          </Col>
          <Col xs={3}>
            <ButtonContainer value="3" />
          </Col>
          <Col xs={3}>
            <ButtonContainer value="-" />
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <ButtonContainer value="0" />
          </Col>
          <Col xs={3}>
            <ButtonContainer value="." />
          </Col>
          <Col xs={3}>
            <ButtonContainer value="=" />
          </Col>
          <Col xs={3}>
            <ButtonContainer value="+" />
          </Col>
        </Row>
      </div>
    );
  }
}
