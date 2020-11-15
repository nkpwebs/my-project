
const validate = (name, value, required, minLength, pattern) => {
    let hname="", male=true;
    if(name==='username')
        hname="שם משתמש";
    else if (name==='email')
        hname="אי-מייל";
    else if(name==='password'){
        hname="סיסמא";
        male=false;
    }
    const newErrors = [];

    if(required){
        if(!value){
            if(male)
                newErrors.push(`${hname} הוא שדה חובה`);
            else
                newErrors.push(`${hname} היא שדה חובה`); 
            return(newErrors);           
        }
    }

    if(minLength){
        if(value.length < minLength){
            if(male)
            newErrors.push(`${hname} חייב להכיל לפחות ${minLength} תווים `); 
        else
            newErrors.push(`${hname} חייבת להכיל לפחות ${minLength} תווים `);
        return(newErrors);
        }
    }
    

    if(pattern){
        if(!pattern.test(value)){
            if(male)
                newErrors.push(`${hname} אינו תקין`);
            else
            newErrors.push(`${hname} אינה תקינה`);
            return(newErrors);            
        }
    }

    return newErrors;
}

export default validate;