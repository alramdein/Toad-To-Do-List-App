import React from "react"

import {
    Input,
    InputGroup,
    InputGroupAddon,
    Button,
    ListGroup,
    ListGroupItem
  } from 'reactstrap';
import TaskList from "./TaskList";


class InputTask extends React.Component {
    numtasks=0

    constructor(props) {
        super(props)
        this.state = {
            msg:"s", 
            // numtasks:0, 
            todolists: []
        }
        this.handleClick = this.handleClick.bind(this)
    } 

    handleClick() {
        this.numtasks+=1
        console.log(this.numtasks)
        this.state.todolists.push(<li className="list-group-item">cek</li>)
        this.setState(this.state = () => {
            return this.state.todolists
        })
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
            <TaskList todolists={this.state.todolists}/>
            </>
           
        )
    }
}

export default InputTask