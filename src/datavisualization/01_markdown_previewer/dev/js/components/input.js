import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {FormControl} from 'react-bootstrap';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    var modifiedValue=ReactDOM.findDOMNode(this.refs.inputValue).value;
      this.setState({
        data: modifiedValue
      });
    this.props.updateData(modifiedValue);
  }

  render() {
    return(
      <div className="input">
        <FormControl
          ref="inputValue"
          componentClass="textarea"
          rows="20"
          value={this.state.data}
          onKeyUp={this.onChange}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
