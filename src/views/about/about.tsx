import React from "react";
import {useHistory} from "react-router-dom";
import {Button} from "antd";

 function About(){


    const history = useHistory()

    const to = (path: string):void => {
        history.push(path)
    }

        return (
            <div className="about">
                <div className="container">
                    <h3 className="center"> About页面</h3>
                    <Button onClick={() => to('/')}>go to Home</Button>
                </div>
            </div>
        );
}

export default About
