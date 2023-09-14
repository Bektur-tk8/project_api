import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import ItemList from "../itemlist/itemList";
import CharDetails from "../charDetails/charDetails";
import RandomChar from "../randomChar/randomchar";

export default class App extends Component {

  state = {
    showRandomChar: true,
    selectedChar: null

  }

  toggleRandomChar = () => {
    this.setState((state) => {
      return {
        showRandomChar: !state.showRandomChar
      }
    })
  }

  render() {
    const char = this.state.showRandomChar ? <RandomChar /> : null;
    return (
      <>
        <Container>
          {/* <Header />  */}
        </Container>
        <Container>
          <Row>
            <Col lg={{ size: 5, offset: 0 }}>
              <RandomChar />
              <button onClick={this.toggleRandomChar} >
                Toggle Random character
              </button>
            </Col>
          </Row>
          <Row>
            <Col md='6'>
              <ItemList />
            </Col>
            <Col md='6'>
              <CharDetails />
            </Col>
          </Row>
        </Container>
      </>
    );

  }


}

