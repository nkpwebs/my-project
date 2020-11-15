
const TodoForm =(props)=>{
    return (
        <form>
            <input name="todo" type="text"
            value={props.value} 
            onChange={props.inputChangeHandler}
            placeholder="Enter a task"/>
            <button onClick={props.addTask}>Add a task</button>
            <button onClick={props.removeItems}>Remove completed task</button>
        </form>
    )
}

export default TodoForm;