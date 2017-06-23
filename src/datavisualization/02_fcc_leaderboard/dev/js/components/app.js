import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import '../../css/app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
                <h1>FCC Leader Board</h1>
                <div>by <a href="https://www.daveyx.ga" target="_blank">daveyx</a></div>
              </Col>
            </Row>
          </Grid>
        </header>
        <main>
          <Grid>
            <Row>
              <Col xs={12} md={6}>
                <section>
                  Hello world
                </section>
              </Col>
            </Row>
          </Grid>
        </main>
      </div>
    );
  }
}
