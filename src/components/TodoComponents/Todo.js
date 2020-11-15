const Todo =(props)=>{
    return (
        <div key={props.todo.id}
        onClick={e=>{
            props.toggleComplete(props.todo.id)
        }}>
            <p>{props.todo.task}</p>
        </div>
    )
}

export default Todo;