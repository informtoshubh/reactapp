import React, {useState} from 'react';

const Form = () => {
    
    const [fullName, setFullName] = useState({
        fname : "",
        lname : "",
        email :"",
      });
    
    const inputEvent = (event) =>{
    
    const {name,value} = event.target;
        
    setFullName((preValue)=>{
    return{
        ...preValue,
        [name] : value,
        } 
    })
    }
    
    const onSubmit = (event) => {
    event.preventDefault();
    };

    return (
        <>
        <div className="center_div">
        <form onSubmit={onSubmit}>
        <h1>Hello {fullName.fname} {fullName.lname}</h1>
        <p>{fullName.email}</p>
            <input type="text" placeholder="Enter the first name" name="fname" value={fullName.fname} onChange={inputEvent}></input><br></br>
            <input type="text" placeholder="Enter the second name" name="lname" value={fullName.lname} onChange={inputEvent}></input><br></br>
            <input type="text" placeholder="Enter your email" name="email" value={fullName.email} onChange={inputEvent}></input><br></br><br></br>
            <button type="submit">Sumbmit</button>
          </form>
        </div>
        </>
    )
}

export default Form;