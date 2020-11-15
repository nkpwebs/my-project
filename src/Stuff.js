import React, { Component } from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
 
class Stuff extends Component {
    constructor(props){
        super(props);
        this.state={
            todos:[{
                //task:"",
                //id:"",
                //completed:false
            }],
            todo:""
        }
    }

    inputChangeHandler = e =>{
        this.setState({[e.target.name]: e.target.value});
    }

    addTask = e =>{
        e.preventDefault();
        let newTask ={
            task: this.state.todo,
            id: Date.now(),
            completed: false
        };
        this.setState({
            todos:[...this.state.todos, newTask],
            todo:""
        })
    }
    removeItems = e =>{
        e.preventDefault();
        
        this.setState(prevState=>{
            return{ 
            todos:prevState.todos.filter(todo=>{
                return !todo.completed;
            })
            }
        })
    }
    toggleComplete = itemId =>{
        const todos=this.state.todos.map(todo=>{
            if(todo.id===itemId){
                todo.completed=!todo.completed;
            }
            return todo;
        }); 
            
        this.setState({
            todos,
            todo:""
        })
    }

    addLocalStorage(){
        for(let key in this.state){
            if(localStorage.hasOwnProperty(key)){
                let value=localStorage.getItem(key);
                try{
                    value=JSON.parse(value);
                    this.setState({[key]: value});
                } catch(event) {
                    this.setState({[key]: value});
                }
            }
        }
    }
    saveLocalStorage (){
        for(let key in this.state){
            localStorage.setItem(key,JSON.stringify(this.state(key)));
        }
    }
    componentDidMount(){
        this.addLocalStorage();
        window.addEventListener("beforeunload",
        this.saveLocalStorage.bind(this));
    }
    componentWillUnmount(){
        window.removeEventListener("beforeunload",
        this.saveLocalStorage.bind(this));
    }
  render() {
    return (
      <div className="Stuff">
        <h1>To do List</h1>
        <TodoList
        todos={this.state.todos}
        toggleComplete={this.toggleComplete}/>
        <TodoForm
        todos={this.state.todos}
        value={this.state.todo}
        inputChangeHandler={this.inputChangeHandler}
        addTask={this.addTask}
        removeItems={this.removeItems}/>
      </div>
    );
  }
}

export default Stuff;