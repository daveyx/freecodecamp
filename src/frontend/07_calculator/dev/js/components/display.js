'use strict';

import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import '../../css/style.css';

export default class Display extends Component {
  constructor(props) {
    super();
  }

  render() {
    return(
      <div className="display-wrapper">
        <div className="display">
          {this.props.display}
        </div>
        <div className="miniDisplay">
          {this.props.miniDisplay}
        </div>
      </div>
    );
  }
}
