import React from 'react';

const Clock = (props) => {
    return(
      <>
      <h1>🕙{props.time}</h1>
      <button onClick={props.newTime}>Get Time</button>
      </>
    )
}
export default Clock;