import React, {Component, useState} from "react";
import NumComponent from "./components/NumComponent";
import {Button, Input} from "antd";
import {useHistory} from "react-router-dom";
import Num1Component from "./components/Num1Component";
import {MyContext} from "./context";

function Contact (props) {

        const history = useHistory()

        const [num, setNum] = useState<number>(1990)

        const onInputChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
            const value = Number.parseInt(e.target.value)
            setNum(value)
        }

        const onCalc = (type: 'plus' | 'reduce'): void => {
             if (type === 'plus') {
                 setNum(num + 1)
            } else {
                 setNum(num - 1)
             }
        }

        const toAbout = (): void => {
            history.push({
                pathname: '/about',
                state: {
                    id: 1998
                }
            })
        }

        return (
            <div className="contact">
                <div className="container">
                    <h3 className="center">Contact页面</h3>
                    <Input defaultValue={num} onChange={(e) => onInputChange(e)}/>
                    <h2>{num}</h2>
                    <NumComponent num={num} onCalc={onCalc}></NumComponent>
                    <Button onClick={() => toAbout()}>to about</Button>
                    <MyContext.Provider value={{num, onCalc}}>
                        <Num1Component />
                    </MyContext.Provider>
                </div>
            </div>
        );
}

export default Contact
