import React from 'react';

//Array of string errors
function Errors(props){
    return props.errors.map(error => <small key={error} className="form-text alert alert-danger col-4">{error}</small>)
}

export default Errors;