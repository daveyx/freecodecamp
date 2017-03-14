import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';

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
      inputValue: '',
      searchResult: null
    };
  }
  onClick() {
    /*
      https://github.com/mzabriskie/axios/issues/191
      i had to add &origin=* in order to avoid:
      No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'null' is therefore not allowed access.
    */
    let reqUri = "https://en.wikipedia.org/w/api.php?format=json"
      + "&origin=*&action=query&generator=search&gsrnamespace=0&gsrlimit=10"
      + "&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch="
      + this.state.inputValue;

    // console.log("reqUri: " + reqUri);

    axios.get(reqUri).then(response => {
      this.setState({
        searchResult: response.data.query.pages
      });
    }).catch(function (error) {
      console.log("error axios-get1: " + error);
    });
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
            {this.state.searchResult !== null ? <ResultArea searchResult={this.state.searchResult}/> : null}
           </div>;
  }
}

/*
  ResultArea Component
*/
class ResultArea extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let obj = this.props.searchResult;
    return <div className="result-area">
            <div>Search Results:</div>
              <ul>
                {Object.keys(obj).map(function(key) {
                    console.log("---> " + key);
                    return <ResultItem key={key} dataObj={obj[key]}></ResultItem>;
                })}
              </ul>
           </div>;
  }
}

/*
  ResultItem Component
*/
class ResultItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let uri = "https://en.wikipedia.org/?curid=" + this.props.dataObj.pageid;
    return  <div className="result-item">
              <a className="result-item-link" href={uri} target="_blank" title={this.props.dataObj.title}>
                <li>
                  <div className="result-item-header">{this.props.dataObj.title}</div>
                  <div className="result-item-body">{this.props.dataObj.extract}</div>
                </li>
              </a>
            </div>
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
