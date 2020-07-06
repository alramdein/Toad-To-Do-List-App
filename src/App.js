import React from 'react';
import './App.css';

import { 
  Container, 
  Row, 
  Col
} from 'reactstrap';

import Header from './views/Header'
import InputTask from './views/InputTask'

function App() {
  return (
    <Container className="pt-5">
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Header></Header>
        </Col>
        
      </Row>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <InputTask></InputTask>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
