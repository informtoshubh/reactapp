const ToDo = (props) =>{

    return (
        <>
        <div className="todo_style"> 
            <button
            className="fa fa-items"
            area-hidden="true" 
            onClick={()=>{
                props.delete(props.id);
            }}
            >*
            </button> 
            <li>{props.itemValue}</li>
            </div>    
        </>
    )
}
export default ToDo;