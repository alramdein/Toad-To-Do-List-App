import React from "react"

import {
    Input,
    InputGroup,
    InputGroupAddon,
    Button,
    Form,
    Toast,
    ToastBody,
    ToastHeader,
    Row,
    Col
  } from 'reactstrap';

import TaskList from "./TaskList";
import FinishedTaskList from "./FinishedTaskList"

class FormInput extends React.Component {
    numtasks=0
    constructor(props) {
        super(props)
        this.state = {
            task:'', 
            todolists: [],
            toastAdd: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    } 

    

    handleChange(event){
        this.setState({task: event.target.value })
    }

    handleSubmit(event){
        if(this.state.task=="") {
            return alert("Task can't be empty")
        }
        this.state.todolists.push(<li className="list-group-item">{this.state.task}</li>)
        this.toDoListComponent = <TaskList todolists={this.state.todolists}/>
        this.toastAdd()
        this.setState(this.state = () => {
            return this.state.todolists
        })
        event.preventDefault()
    }

    toastAdd() {
        const toast =  
                    <div className="p-3 my-2 rounded bg-secondary">
                        <Toast>
                             <ToastHeader icon="primary">
                                A task was added
                            </ToastHeader>
                        <ToastBody>
                            {this.state.task}
                        </ToastBody>
                        </Toast>
                    </div>
        this.setState({
            // toastAdd: toast
        })
    }

    componentWillMount() {
        this.toDoListComponent = <p className="mt-5" style={{textAlign: "center", opacity: "70%"}}>
                                    Kindly add the task to create your tasks list ;)
                                </p>
    }

    //!questioned
    componentDidUpdate(prevState) {
        if(prevState.todolists != this.state.todolist) {
            this.toDoListComponent = <TaskList todolists={this.state.todolists}/>
        }
    }

    render() {
        var toDoListComponent
        return (
            <>
            <Form onSubmit={this.handleSubmit}>
                <Row>
                    <Col sm="12" md="12">
                        <InputGroup>
                            <Input type="text" placeholder="Add task here" value={this.state.task} onChange={this.handleChange}/>
                            <InputGroupAddon addonType="append">
                                <Button color="primary" type="submit">Add Task</Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </Col>
                    <Col sm="12" md="12">
                        {this.state.toastAdd}
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md="12">
                        {this.toDoListComponent}
                    </Col>
                </Row>
            </Form>
            </>
        )
    }
}

export default FormInput