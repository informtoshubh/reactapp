import React from 'react';


let currdate = new Date();
currdate = currdate.getHours();

let msg = "";

if(currdate>=0 && currdate<12)
{
  msg = "Good Morning !";
}
else if(currdate>=12 && currdate<19)
{
  msg = "Good Afternoon !";
}
else{
  msg = "Good Night !";
}

function Msg() {
    return (
        <>
        <h2>Hello Sir, {msg} </h2>
        </>
    );
}
export default Msg;