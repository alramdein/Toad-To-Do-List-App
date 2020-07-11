import React from "react"

import { 
    Container, 
    Row, 
    Col
} from 'reactstrap';

import Header from './Header'
import FormInput from './FormInput'

class ToDoList extends React.Component {
    render() {
        return (
            <Container className="pt-5">
                <Row>
                    <Col>
                        <Header/>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <FormInput/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ToDoList