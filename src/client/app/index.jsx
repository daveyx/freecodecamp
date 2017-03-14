import React from 'react';
import {render} from 'react-dom';

/*
  RandomLink Component
*/
class RandomLink extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>
            <a className="random-link" href="https://en.wikipedia.org/wiki/Special:Random" target="_blank">Click here for a random article</a>
          </div>;
  }
}

/*
  SearchArea Component
*/
class SearchArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }
  onClick() {
    console.log("inputvalue: " + this.state.inputValue);
  }
  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }
  render() {
    return <div className="search-area">
            <div>Search for an article:</div>
            <div>
              <input type="text" name="search" value={this.state.inputValue}  onChange={(e) => {this.updateInputValue(e)}}/>
              <button onClick={(e) => {this.onClick(e)}}>search</button>
            </div>
            <ResultArea />
           </div>;
  }
}

/*
  ResultArea Component
*/
class ResultArea extends React.Component {
  render() {
    return <div className="result-area">
            <div>Search Results:</div>
           </div>;
  }
}

/*
  Application Component
*/
class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return <div>
            <RandomLink />
            <SearchArea />
          </div>;
  }
}
render(<Application />, document.getElementById('container'));
