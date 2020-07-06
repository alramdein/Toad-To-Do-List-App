import React from "react"

import {
    Jumbotron,
  } from 'reactstrap';

class Header extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <h1 className="display-3">Toad</h1>
                    <p className="lead">A to do list app created by Alif Ramdani</p>
                    <hr className="my-2" />
                    <p>Know me more about me on LinkedIn. And here is my GitHub repo</p>
                </Jumbotron>
            </div>
        )
    }
}

export default Header