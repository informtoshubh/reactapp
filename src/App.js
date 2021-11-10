import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Msg from './components/Msg';
import Shubham from './components/Shubham';
import Time from './components/Time';
import Cards from './components/Cards';
import Sdata from './components/Sdata';
import ToDo from './components/ToDo';
import Form from './components/Form';
import ChangeColor from './components/ChangeColor';
import Clock from './components/Clock';
import Like from './components/Like';


function App() {

  /*Like Code Start*/
  const [count, setCount] = useState(0);
  const IncNum = () => {
  setCount(count +1);
  }
  /*Like Code End*/

  /*Clock Code Start*/
  let newTime = new Date().toLocaleTimeString();
  const [cTime, setTime] = useState(newTime);
  
  const GetTime = () => {
    let cTime = new Date().toLocaleTimeString();
    setTime(cTime);
  }
  setInterval(GetTime,1000)
  /*Clock Code End*/

  /*Change Color Code Start*/
  let bname = "🐭 click me";
  let background = "#fff";
  const [Bg, setBg] = useState(background);
  const [name, setName] = useState(bname);

  const changeBg = () => {
  let cBg = "#8e44ad";
  let cname = "📸flashed";
  setBg(cBg);
  setName(cname);
 }
/*Change Color Code End*/

/*ToDo Code*/
const [inputList, setInputList] = useState("");
    const[Items, setItems] = useState([]);
    const itemEvent = (event) => {
        setInputList(event.target.value);
       }
    const listOfItems = (event) => {
        setItems((oldItems) => {
            return[...oldItems, inputList];
        })
        setInputList("");
    }
    const deleteItems = (id) =>{
      console.log("deleted");
      setItems((oldItems) => {
        return oldItems.filter((arrElement,index)=>{
           return index !== id;
        })
    })
  }
/*ToDo Code End*/

  return (
    <div className="App">
      <header className="App-header">
        <Msg />
        <Shubham />
        <Time/>
        <button onClick={GetTime}>Get Time</button>
        {Sdata.map((val)=>{
          return(
            <Cards
              key={val.id}
              imgsrc={val.imgsrc}
              cardtitle={val.cardtitle}
              cardtext={val.cardtext}
              cardlink={val.cardlink}
            />
          );
        })}
        <Like iNum={IncNum} iCount={count}/>

        <Clock time={cTime} newTime ={GetTime}/>

        <ChangeColor newBg={changeBg} newName={name} oldBg={Bg}/>
        
        <Form/>        
        
        <h1>To Do List Project</h1>
          <div className="main_div">
              <div className="center_div">
              <h1 className="main_heading">ToDoList</h1>
              <input type="text" placeholder="Add a item" value={inputList} onChange={itemEvent}/>
              <button className="main_button" onClick={listOfItems}>+</button>
          <ol>
            {Items.map((itemval, index)=>{
            return(
            <ToDo 
            key={index}
            id = {index}
            itemValue={itemval}
            delete={deleteItems}
            />
            );
            })}
          </ol>
          </div>
        </div>
      </header>
    </div>
  );
}
export default App;
