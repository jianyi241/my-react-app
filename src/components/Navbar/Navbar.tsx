import React, { Component } from "react";
import './index.scss'
import {Button} from "antd";
import {useHistory} from "react-router-dom";
import router from "../../router";

 function Navbar() {

    const history = useHistory()

    const to = (path: string):void => {
        history.push({
            pathname: path
        })
    }
        return (
            <nav className="nav-wrapper">
                <div className="list">
                    <ul>
                        <li><Button onClick={() => to('/')}>Home</Button></li>
                        <li><Button onClick={() => to('/about')}>About</Button></li>
                        <li><Button onClick={() => to('/contact')}>Contact</Button></li>
                    </ul>
                </div>
            </nav>
        )
}
export default Navbar
