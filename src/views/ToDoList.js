import React from "react"

import { 
    Container, 
    Row, 
    Col
} from 'reactstrap';

import Header from './Header'
import InputTask from './InputTask'

class ToDoList extends React.Component {
    render() {
        return (
            <Container className="pt-5">
                <Row>
                    <Col sm="12" md="12">
                    <Header/>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col sm="12" md={{ size: 6 }}>
                    <InputTask/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ToDoList