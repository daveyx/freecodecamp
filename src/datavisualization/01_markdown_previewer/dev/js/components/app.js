import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Input from './input';
import Output from './output';
import '../../css/app.css';

const initialState = 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[daveyx](https://www.daveyx.ga)*';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: initialState
    };
  }

  render() {
    return(
      <div>
        <header>
          <Grid>
            <Row>
              <Col xs={12}>
                <small>Free Code Camp</small>
                <h1>Markdown Previewer</h1>
                <div>by <a href="https://www.daveyx.ga" target="_blank">daveyx</a></div>
              </Col>
            </Row>
          </Grid>
        </header>
        <main>
          <Grid>
            <Row>
              <Col xs={12}>
                <section>
                  <Input data={this.state.data} />
                </section>
                <section>
                  <Output data={this.state.data} />
                </section>
              </Col>
            </Row>
          </Grid>
        </main>
      </div>
    );
  }
}
