import React from "react"

import { 
} from 'reactstrap';


class TaskList extends React.Component {

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