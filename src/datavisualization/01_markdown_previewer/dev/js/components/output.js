/* global marked */
import React, {Component} from 'react';
import Script from 'react-load-script';

export default class Output extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleScriptCreate() {
    this.setState({
      scriptLoaded: false
    });
  }

  handleScriptError() {
    this.setState({
      scriptError: true
    });
  }

  handleScriptLoad() {
    this.setState({
      scriptLoaded: true
    });
  }

  getMarketData() {
    return {__html: marked(this.props.data)};
  }

  render() {
    const output = ! this.state.scriptLoaded ? null :
      <div><span dangerouslySetInnerHTML={this.getMarketData()} /></div>;

    return(
      <div className="input">
        <Script
          url={'https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.6/marked.min.js'}
          onCreate={this.handleScriptCreate.bind(this)}
          onError={this.handleScriptError.bind(this)}
          onLoad={this.handleScriptLoad.bind(this)}
        />
        {output}
      </div>
    );
  }
}
