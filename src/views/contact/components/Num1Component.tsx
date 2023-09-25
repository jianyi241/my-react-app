import React, {useContext} from "react";
import {Button} from "antd";
import {MyContext} from "../context";

function Num1Component() {
    const context = useContext(MyContext)
    return (
        <div className="num-component" style={{padding: '20px 0'}}>
            <div className="container" style={{display: 'flex',gap: '16px',alignItems: 'center'}}>
                <h1>{context?.num}</h1>
                <Button onClick={() => context?.onCalc('reduce')}>-</Button><h3 className="center">{context?.num}</h3><Button type={'primary'} onClick={() => context?.onCalc('plus')}>+</Button>
            </div>
        </div>
    );
}

export default Num1Component
