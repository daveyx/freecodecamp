import React, {Component} from 'react';
import Input from './input';
import Output from './output';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="wrapper">
        <small>Free Code Camp</small>
        <h1>Markdown Previewer</h1>
      </div>
    );
  }
}
