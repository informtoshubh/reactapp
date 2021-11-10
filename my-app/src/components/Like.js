import React from 'react';

const Like = (props)=> {
    return(
        <>
        <h1>👍{props.iCount}</h1>
        <button onClick={props.iNum}>Like</button>
        </>
    )
}
export default Like;