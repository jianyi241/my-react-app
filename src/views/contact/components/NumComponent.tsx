import React from "react";
import {Button} from "antd";

function NumComponent({num, onCalc}) {
    return (
        <div className="num-component" style={{padding: '20px 0'}}>
            <div className="container" style={{display: 'flex',gap: '16px',alignItems: 'center'}}>
                <Button onClick={() => onCalc('reduce')}>-</Button><h3 className="center">{num}</h3><Button type={'primary'} onClick={() => onCalc('plus')}>+</Button>
            </div>
        </div>
    );
}

export default NumComponent
