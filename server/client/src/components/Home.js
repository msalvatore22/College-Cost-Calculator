import React from 'react';
import SearchBar from './SearchBar'
import {Container, Row, Col} from 'reactstrap'


const Home = () => {
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center fluid" style={{height: '80vh'}}>
      <Row>
        <Col className="d-flex flex-column align-items-center">
          <h1>Welcome to the College Cost Calculator!</h1>
          <h3>For className of 2017 graduates, the average student loan debt was $39,400.</h3>
          <h4>This app will help you to determine how much <strong><em>you will owe</em></strong> when you graduate.</h4>
          <h4>Type the name of the college you want to attend in the search bar below.</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <SearchBar />
        </Col>
      </Row>
    </Container>
  )
}

export default Home;