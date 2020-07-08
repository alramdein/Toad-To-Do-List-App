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
        )
    }
}

export default ToDoList