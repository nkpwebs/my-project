import React, { useState } from 'react';

import Errors from './Errors';
import validate from './validator';

function FormPerUser() {

    const [userData, setUserData] = useState({
        username: {value:'', required: true, minLength: 3, pattern: /^(?!.*(.).*\1)[ABC]+$/, errors: []},
        email:    {value:'', required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, errors: []},
        password:  {value:'', required: true, minLength: 8, pattern: /"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"/, errors: []},
        retypePassword: { value: '', required: true, errors: [] }, dietTypeList: [
        {name:"טבעוני", value: 'false'}, {name:"ללא גלוטן", value: 'false'}, {name:"כשר", value: 'false'},
        {name:"ללא לקטוז", value:'false'}, {name:"פרווה", value: 'false'}, {name:"פלאו", value: 'false'}, 
        {name:"קטוגני", value:  'false'}, {name:"צמחוני", value: 'false'}, {name:"רואו", value: 'false'}]
    });

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
   
        //send somewhere only relevant data
        const rawUserData = Object.keys(userData)
                            .reduce((usr, prop) => {
                                usr[prop] = userData[prop].value;
                                return usr;
                            }, {});

        console.log(rawUserData);
    }

    return (
        <div className="main">
            <div className="container">
                <div className="text-right">
                    <h1>רישום למחברת המתכונים</h1>
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
                            <div class="form-check col-sm-4" key={index}>
                                <input type="checkbox"
                                    onClick={onCheckBoxChange}
                                    defaultValue={dietType.value}
                                    name={dietType.name}
                                    id={dietType.name}
                                    className="form-check-input"
                                />
                                <label for={dietType.name} className="form-check-label pr-3">{dietType.name}</label>
                            </div>
                            )}
                        </div>                             
                    </div>
                </div>    
                <div className="form-group row">
                    <div className="col-sm-2">
                        <button type="submit" className="btn btn-primary">רישום</button>
                    </div>
                    <div className="form-control alert alert-info col-sm-6" role="alert">
                לפני שליחת הטופס יש למלא בצורה תקינה את השדות
                    </div>
                </div>
            </form>
        </div>
    </div>
    );
}

export default FormPerUser;