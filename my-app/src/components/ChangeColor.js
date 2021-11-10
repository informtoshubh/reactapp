import React from 'react';

const ChangeColor = (props) => {
    return (
        <div className="divbox" style={{background:props.oldBg}}>
        <button onClick={props.newBg}>{props.newName}</button>
        </div>
    )
}
export default ChangeColor;