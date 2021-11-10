import React from 'react';

let tdate = new Date();
tdate = tdate.getDate();

const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let tmonth = new Date();
tmonth = month[tmonth.getMonth()];


let tyear = new Date();
tyear = tyear.getFullYear();


function Time(){
    return(
    <>
    <h2>Today's Date : {tdate} / {tmonth} / {tyear}</h2>
    </>
    );
}
export default Time;