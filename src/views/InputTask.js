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
            <div className="card mt-4">
                <div className="card-header text-white bg-primary">
                    Tasks List
                </div>
                <ul className="list-group list-group-flush">
                    {this.state.todolists}
                </ul>
            </div>
            </>
           
        )
    }
}

export default InputTask