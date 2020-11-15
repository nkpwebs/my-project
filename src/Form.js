import React, { useState } from 'react';

import Errors from './Errors';
import validate from './validator';

function Form() {

    const [userData, setUserData] = useState({
        username: {value:'', required: true, minLength: 5, pattern: /^[a-zA-Z0-9_]{5,}[a-zA-Z]+[0-9]*$/, errors: []},
        hebrewname:{value:''},
        email:    {value:'', required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, errors: []},
        password:  {value:'', required: true, minLength: 8, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, errors: []},
        retypePassword: { value: '', required: true, errors: [] }, dietTypeList: [
        {name:"טבעוני", value: 'false'}, {name:"ללא גלוטן", value: 'false'}, {name:"כשר", value: 'false'},
        {name:"ללא לקטוז", value:'false'}, {name:"פרווה", value: 'false'}, {name:"פלאו", value: 'false'}, 
        {name:"קטוגני", value:  'false'}, {name:"צמחוני", value: 'false'}, {name:"רואו", value: 'false'}]
    });
    const [userRawData, setUserRawData] = useState(JSON.parse(localStorage.getItem("user")));
    const [userLogged, setUserLogged] = useState("");

    if(userRawData){
        if(userRawData.hebrewname){
            setUserLogged=userRawData.hebrewname;
        }else{
            setUserLogged=userRawData.username;
        }
        setUserData({
            ...userData,
            username:userRawData.username,
            hebrewname:userRawData.hebrewname,
            email:userRawData.email,
            password:userRawData.password,
            retypePassword:userRawData.password,
            dietTypeList: [
                {name:"טבעוני", value: 'false'}, {name:"ללא גלוטן", value: 'false'}, {name:"כשר", value: 'false'},
                {name:"ללא לקטוז", value:'false'}, {name:"פרווה", value: 'false'}, {name:"פלאו", value: 'false'}, 
                {name:"קטוגני", value:  'false'}, {name:"צמחוני", value: 'false'}, {name:"רואו", value: 'false'}]
        });
    } 

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

    const onCheckBoxChange = e => {
        console.log (e);
        setUserData({
            ...userData,
            [e.target.name]:e.target.value
        });
    }

    const onRetypePswrdChange = (e) => {
        const newErrors = [];
        if (!userData.password.value) {
            newErrors.push(`נא למלא סיסמא`);
        } else if (e.target.value !== userData.password.value) {
            newErrors.push(`הסיסמאות שהוקלדו אינן תואמות`);
        }
        setUserData({
            ...userData,
            retypePassword: {
                ...userData.reTypePassword,
                value: e.target.value,
                errors: newErrors,
            }
        });
    //    return newErrors;
    }

    const onSubmit = e => {
        e.preventDefault();       
        for(const field in userData){
            if(field==='retypePassword'){
                const rPWErrors = [];
                if (!userData.password.value) {
                    rPWErrors.push(`נא למלא סיסמא`);
                } else if (e.target.value !== userData.password.value) {
                    rPWErrors.push(`הסיסמאות שהוקלדו אינן תואמות`);
                }
                setUserData({
                    ...userData,
                    retypePassword: {
                        ...userData.retypePassword,
                        value: e.target.value,
                        errors: rPWErrors,
                    }
                });
            } else {
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
    }
        setUserData({...userData});

        //if we got her with full and correct requierd data
    if(userData.username && userData.email && userData.password &&
        !userData.username.errors.length && !userData.email.errors.length && 
        !userData.password.errors.length){
        //send somewhere only relevant data
        const rawUserData = Object.keys(userData)
                            .reduce((usr, prop) => {
                                usr[prop] = userData[prop].value;
                                return usr;
                            }, {});

        console.log(rawUserData);
        //localStorage.setItem('user', 'נעמה');
        localStorage.setItem('user', JSON.stringify(rawUserData));
        setUserRawData(JSON.parse(localStorage.getItem("user")));
        
  //let path = `/`;
  //this.props.history.push(path);

        }
        window.location.replace("/Form");      
    }
    return (
        <div className="main">
            <div className="container">
                <div className="text-right">
                    {!userLogged?<h1>רישום למחברת המתכונים</h1>:
                    <h1> הפרופיל של {userLogged} במחברת המתכונים</h1>}
                </div>
                <hr />
                <form onSubmit={onSubmit} className="text-right">
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">שם משתמש</label>
                         <div className="col-sm-6">
                            <input type="text" 
                                    id="username" 
                                    className="form-control" 
                                    placeholder="שם משתמש" 
                                    aria-label="Username"
                                    name="username"
                                    defaultValue={userData.username.value}
                                    onBlur={onInputChange}
                                />
                            </div>                            
                            {
                                <Errors errors={userData.username.errors} />
                            }
                        </div>
                        <div className="form-group row">
                        <label htmlFor="hebrewrName" className="col-sm-2 col-form-label">שם בעברית</label>
                         <div className="col-sm-6">
                            <input type="text" 
                                    id="hebrewrName" 
                                    className="form-control" 
                                    placeholder="שם בעברית" 
                                    aria-label="hebrewrName"
                                    name="hebrewrName"
                                    defaultValue={userData.hebrewname.value}
                                    onBlur={onInputChange}
                                />
                            </div>
                        </div>
                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-2 col-form-label">אי-מייל</label>
                        <div className="col-sm-6">
                            <input type="email" 
                                className="form-control" 
                                id="email" 
                                name="email"
                                placeholder="כתובת אי-מייל שנמצאת בשימוש"
                                defaultValue={userData.email.value}
                                onBlur={onInputChange}
                                />
                            </div>
                            {
                                <Errors errors={userData.email.errors} />
                            }
                        </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">סיסמה</label>
                            <div className="col-sm-6">
                                <input type="password" 
                                    id="password" 
                                    className="form-control" 
                                    name="password"
                                    aria-describedby="passwordHelpBlock"
                                    defaultValue={userData.password.value}
                                    onBlur={onInputChange}
                                />
                                <small id="passwordHelpBlock" className="form-text text-muted">דרישות מינימום לסיסמא תקינה: לפחות ספרה, אות קטנה ואות גדולה (באנגלית). ולא פחות מ-8 תווים</small>
                        </div>
                            {
                                <Errors errors={userData.password.errors} />
                            }
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">אימות סיסמה</label>
                            <div className="col-sm-6">
                                <input type="password" 
                                    id="inputPassword" 
                                    className="form-control"  
                                    name="retypePassword"
                                    aria-describedby="passwordHelpBlock"
                                    defaultValue={userData.retypePassword.value}
                                    onBlur={onRetypePswrdChange}
                                />
                            <small id="passwordHelpBlock" className="form-text text-muted">תוכן השדה יהיה זהה לתוכן שהוקלד עבור הסיסמה</small>
                            </div>
                            {
                                <Errors errors={userData.retypePassword.errors} />
                            }
                        </div>
                    <div className="form-group row">
                        <div className="col-sm-2">מתכונים שאני רוצה לראות</div>
                        <div className="col-sm-10">
                            <div className="row">
                            {userData.dietTypeList.map((dietType, index) => 
                            <div className="form-check col-sm-4" key={index}>
                                <input type="checkbox"
                                    onClick={onCheckBoxChange}
                                    defaultValue={dietType.value}
                                    name={dietType.name}
                                    id={dietType.name}
                                    className="form-check-input"
                                />
                                <label htmlFor={dietType.name} className="form-check-label pr-3">{dietType.name}</label>
                            </div>
                            )}
                        </div>                             
                    </div>
                </div>    
                <div className="form-group row">
                    <div className="col-sm-2">
                        {!userLogged?<button type="submit" className="btn btn-primary">רישום</button>:
                        <button type="submit" className="btn btn-primary">עדכן פרטים</button>}
                    </div>
                    {!userLogged?<div className="form-control alert alert-info col-sm-6" role="alert">
                לפני שליחת הטופס יש למלא בצורה תקינה את השדות
                    </div>:null}
                </div>
            </form>
        </div>
    </div>
    );
}

export default Form;