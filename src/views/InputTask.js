import React from "react"

import {
    Input,
    InputGroup,
    InputGroupAddon,
    Button,
    Form,
  } from 'reactstrap';
import TaskList from "./TaskList";


class InputTask extends React.Component {
    numtasks=0

    constructor(props) {
        super(props)
        this.state = {
            task:"", 
            todolists: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    } 

    handleChange(event){
        this.setState({task: event.target.value })
    }

    handleSubmit(event){
        this.state.todolists.push(<li className="list-group-item">{this.state.task}</li>)
        alert("A task was added: "+this.state.task)
        this.setState(this.state = () => {
            return this.state.todolists
        })
        event.preventDefault()
    }

    render() {
        return (
            <>
            <Form onSubmit={this.handleSubmit}>
                <InputGroup>
                    <Input type="text" placeholder="Add task here" value={this.state.task} onChange={this.handleChange}/>
                    <InputGroupAddon addonType="append">
                        <Button color="primary" type="submit">Add Task</Button>
                    </InputGroupAddon>
                </InputGroup>
                <TaskList todolists={this.state.todolists}/>
            </Form>
            </>
        )
    }
}

export default InputTask