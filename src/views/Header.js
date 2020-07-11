import React from "react"
import jumbotronImg from "../assets/img/todolist-pic.jpg"
import '../styles/Header.css'

import {
  } from 'reactstrap';

class Header extends React.Component {
    render() {
        return (
            <div className="card card-image" style={{backgroundImage: `url(${jumbotronImg})`, backgroundSize: "cover", backgroundBlendMode: ""}}>
                <div className="blackLayer">
                <div className="text-white text-center rgba-stylish-strong py-5 px-4 z-depth-1 ">
                        <div className="py-5 ">
                            <h5 className="h5 orange-text"><i className="fas fa-camera-retro"></i> Photography</h5>
                            <h2 className="card-title h2 my-4 py-2">Jumbotron with image overlay</h2>
                            <p className="mb-4 pb-2 px-md-5 mx-md-5"></p>
                            <a className="btn peach-gradient"><i className="fas fa-clone left"></i> View project</a>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header