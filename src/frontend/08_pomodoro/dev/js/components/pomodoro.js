'use strict';

import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import BreakLengthContainer from '../containers/breakLengthContainer';
import SessionLengthContainer from '../containers/sessionLengthContainer';

export default class Pomodoro extends Component {
  constructor(props) {
    super(props);
  }

  getButton1Text() {
    if ( ! this.props.isSessionRunning && ! this.props.isBreakRunning) {
      return 'Start';
    } else {
      return 'Pause';
    }
  }

  getButton1Config() {
    if ( ! this.props.isSessionRunning && ! this.props.isBreakRunning) {
      return {
        text: 'Start',
        handler: this.props.startClickHandler
      };
    } else {
      if (this.props.isPaused) {
        return {
          text: 'Resume',
          handler: this.props.resumeClickHandler
        };
      } else {
        return {
          text: 'Pause',
          handler: this.props.pauseClickHandler
        };
      }
    }
  }

  getButton2Text() {
    if (this.props.isSessionRunning || this.props.isBreakRunning) {
      return 'Reset';
    }
  }

  render() {
    let button1Config = this.getButton1Config();
    let button2Text = this.getButton2Text();
    return(
      <div className="wrapper text-center">
        <Row>
          <Col xs={6} xsOffset={0}>
            <BreakLengthContainer />
          </Col>
          <Col xs={6} xsOffset={0}>
            <SessionLengthContainer />
          </Col>
        </Row>
        <Row>
          <Col xs={10} xsOffset={1}>
            <div className="session">
              <p className="user-info">
                {this.props.userInfo}<br />
              </p>
              <p className="timer">
                {this.props.minute}:{this.props.second}
              </p>
            </div>
            <div className="buttons">
              <div className="button" onClick={button1Config.handler}>{button1Config.text}</div>
              {button2Text ?
                <div className="button" onClick={this.props.resetClickHandler}>{button2Text}</div>
                : null}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
