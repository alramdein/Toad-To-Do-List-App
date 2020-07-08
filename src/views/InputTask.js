import React from "react"

import {
    Input,
    InputGroup,
    InputGroupAddon,
    Button,
    ListGroup,
    ListGroupItem
  } from 'reactstrap';

class InputTask extends React.Component {
    constructor(props) {
        super(props)
        this.state = {msg:"s"}

        this.handleClick = this.handleClick.bind(this)
    } 

    handleClick() {
        this.setState(state => ({
            msg:"hayu"
        }))
    }

    render() {
        return (
            <>
            <InputGroup>
                <Input placeholder="Add task here"/>
                <InputGroupAddon addonType="append">
                    <Button color="primary" onClick={this.handleClick}>Add Task</Button>
                </InputGroupAddon>
            </InputGroup>
            <div className="card mt-4">
                <div className="card-header text-white bg-primary">
                    Tasks List
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Clean code</li>
                    <li className="list-group-item">Refactoring</li>
                    <li className="list-group-item">Bersihin kamar</li>
                </ul>
            </div>
            </>
           
        )
    }
}

export default InputTask