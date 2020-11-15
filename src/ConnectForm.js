import React, { useState } from 'react';

import Errors from './Errors';
import validate from './validator';

 
function ConnectForm() {

  const [userData, setUserData] = useState({
    username: "נעמה",
    email:    {value:'', required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, errors: []},
  //  password:  {value:'', required: true, minLength: 8, pattern: /"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"/, errors: []},
  password:  {value:'', required: true, minLength: 8, errors: []},
});

const [selectedUser, setSelectedUser] = useState(null);

const onInputChange = (e) => {
  console.log(e);
      const newErrors = validate(
      e.target.name, 
      e.target.value, 
      userData[e.target.name].required,
      userData[e.target.name].minLength,
      userData[e.target.name].pattern
  );    
  setUserData({
      ...userData,
      [e.target.name]: {
          ...userData[e.target.name],
          value: e.target.value,
          errors: newErrors
      }
  });
}

const onSubmit = e => {
  e.preventDefault();       
  for(const field in userData){
      const newErrors = validate(
          field,
          userData[field].value,
          userData[field].required,
          userData[field].minLength,
          userData[field].pattern);

      userData[field] = {
          ...userData[field],
          errors: newErrors
      };
  }
 
 
  setUserData({...userData});

  if(userData.email && userData.password &&
    !userData.email.errors.length && !userData.password.errors.length){
  //send somewhere only relevant data
  const rawUserData = Object.keys(userData)
                      .reduce((usr, prop) => {
                          usr[prop] = userData[prop].value;
                          return usr;
                      }, {});

  console.log(rawUserData);
  //set user name to localhandler 

  localStorage.setItem('user', 'נעמה');
  console.log("got here");
  //let path = `/`;
  //this.props.history.push(path);
window.location.replace("/");
  }
}
    return (
      <div>
        <div className="collapse show" id="loginWin">
        <div className="row mt-2">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="card card-body">
                <form className="text-right" onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">אי-מייל</label>
                        <input type="email" className="form-control" id="email"
                        name="email"
                        placeholder="כתובת אי-מייל "
                        defaultValue={userData.email.value}
                        onBlur={onInputChange}/>
                    </div>
                    {
                      <Errors errors={userData.email.errors} />
                    }
                    <div className="form-group">
                        <label htmlFor="pwd">סיסמא:</label>
                        <input type="password" 
                        className="form-control" 
                        id="password" 
                        name="password"
                        aria-describedby="passwordHelpBlock"
                        defaultValue={userData.password.value}
                        onBlur={onInputChange}/>
                    </div>
                    {
                      <Errors errors={userData.password.errors} />
                    }
                    <button type="submit" className="btn btn-primary">כניסה</button>
                </form>
            </div>
        </div>
        <div className="col-md-4"></div>
    </div>
</div>
      </div>
    );
  }
 
export default ConnectForm;