import React from "react"

import {
    Input,
    InputGroup,
    InputGroupAddon,
    Button
  } from 'reactstrap';

class InputTask extends React.Component {
    render() {
        return (
            <InputGroup>
                <Input placeholder="Add task here"/>
                <InputGroupAddon addonType="append">
                    <Button color="primary">Add Task</Button>
                </InputGroupAddon>
            </InputGroup>
        )
    }
}

export default InputTask