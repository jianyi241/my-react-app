import React, {useEffect} from "react";
import {useHistory} from "react-router-dom";
import {Button} from "antd";

 function About(props){


    const history = useHistory()

     useEffect(() => {
         console.log('props ', props.location.state)
     },[])

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
