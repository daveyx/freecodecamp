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
      inputValue: ''
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

    axios.get(reqUri)
      .then(response => {
        console.log(response.data);
      // this.setState({
      //   city: response.data.city,
      //   country: response.data.country
      // });
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
            <ResultArea />
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
    return <div className="result-area">
            <div>Search Results:</div>
           </div>;
  }
}

/*
  ResultItem Component
*/
class ResultItem extends React.Component {
  render() {
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
