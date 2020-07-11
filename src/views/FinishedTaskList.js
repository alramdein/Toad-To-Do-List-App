import React from "react"

import { 
} from 'reactstrap';


class FinishedTaskList extends React.Component {

    render() {
        return (
        <div className="card mt-4 mb-5">
            <div className="card-header text-white bg-success">
                FinishedTaskList
            </div>
            <ul className="list-group list-group-flush">
                {this.props.todolists}
            </ul>
        </div>
        )
    }
}

export default FinishedTaskList