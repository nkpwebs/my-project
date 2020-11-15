import React, { useState } from 'react';
import {
  Route,
  NavLink,
  BrowserRouter 
} from "react-router-dom";
import Home from "./Home";
import Form from "./Form";
import ConnectForm from "./ConnectForm";
import AddNewItem from "./AddNewItem";
    
function Main() {

  const [user, setUser] = useState(localStorage.getItem("user"));
  console.log("user in main: "+user);

  const logOut=()=>{
    localStorage.removeItem("user");
    let newUser=localStorage.getItem("user")
    setUser(newUser);
    console.log("logout use:"+newUser);
  }

  const logIn=()=>{
    console.log("login use:"+user);
    let newuser=localStorage.getItem("user");
    if (newuser){
        setUser(newuser);
    }
    console.log("login use:"+user);
  }

    return (
      <BrowserRouter>
        <div>
        <nav className="navbar navbar-dark bg-dark navbar-expand-md">
        <div className="container">
            {!user? <NavLink className="navbar-brand" exact to="/">מחברת מתכונים</NavLink> :
            <NavLink className="navbar-brand" exact to="/">מחברת המתכונים  של {user}</NavLink>}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse row" id="navbarNav">
              <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                {user? <NavLink className="nav-link" to="/Form">הפרופיל שלי</NavLink>: null}
                </li>
                <li className="nav-item">
                {user? <NavLink className="nav-link" to="/AddNewItem">מתכון חדש</NavLink>: null}
                </li>
                <li className="nav-item">
                {user? <NavLink className="nav-link" exact to="/">המתכונים שלי</NavLink>: null}
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" exact to="/">כל המתכונים</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="collapse navbar-collapse row" id="navbarNav">
            <ul className="navbar-nav w-100">
              <li className="nav-item"  id="loginLink">
    {!user? <NavLink className="nav-link" to="/Form" onClick={logIn}>רישום</NavLink> :
    <NavLink className="nav-link" to="/" onClick={logOut}>התנתק</NavLink>}</li>
            <li className="nav-item"  id="loginLink">
            {!user?<NavLink className="nav-link" to="/ConnectForm" onClick={logIn} >התחברות</NavLink>: null}</li>
          </ul>
        </div>
        </nav>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/Form" component={Form}/>
            <Route path="/ConnectForm" component={ConnectForm}/> 
            <Route path="/AddNewItem" component={AddNewItem} />
          </div>
        </div>

      </BrowserRouter>   
    );
  }

 
export default Main;