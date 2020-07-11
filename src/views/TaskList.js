import React from "react"

import { 
    Container, 
    Row, 
    Col
} from 'reactstrap';


class TaskList extends React.Component {
    constructor(props){
        super(props)
        const todolists = props.todolists
        console.log("todolists: "+todolists)
    }

    render() {
        return (
        <div className="card mt-4 mb-5">
            <div className="card-header text-white bg-primary">
                Tasks List
            </div>
            <ul className="list-group list-group-flush">
                {this.props.todolists}
            </ul>
        </div>
        )
    }
}

export default TaskList