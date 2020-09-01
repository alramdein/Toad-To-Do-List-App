import React from "react"

import { 
    Container, 
    Row, 
    Col
} from 'reactstrap';

// import '../styles/ToDoList.css'

import FormInput from './FormInput'
import Header from './Header'

class ToDoList extends React.Component {
    render() {
        return (
            <Container className="pt-5">
                <Row className="mt-0">
                    <Col md="12" style={{textAlign: "center"}}>
                        <Header/>
                    </Col>
                </Row>
                <Row className="mt-5 d-flex justify-content-center" >
                    <Col md="5">
                        <FormInput/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ToDoList