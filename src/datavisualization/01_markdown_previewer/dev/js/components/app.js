import React, {Component} from 'react';
import Input from './input';
import Output from './output';
import '../../css/app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="wrapper">
        <header>
          <small>Free Code Camp</small>
          <h1>Markdown Previewer</h1>
          <div>by <a href="https://www.daveyx.ga" target="_blank">daveyx</a></div>
        </header>
        <main>

        </main>
      </div>
    );
  }
}
