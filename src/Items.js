import React from 'react';
import { Link } from 'react-router-dom';

function Items(props){

    return (<div className="card-deck">
    {// for each Item in the arr display detail
    props.itemsDetailArr.map((item, index) =>
    <div className="col-xl-3 col-md-4 col-sm-6 my-2" key={index}>
    <div className="card h-100">
        <img className="card-img-top"  alt={item.name} src={item.image}/>    
        <div className="card-body text-center" >
        <h5 className="card-title font-italic">
            <div style={{direction:"ltr"}}>{item.lastUpdate} </div>
                <Link to={`/item/${index + 1}`} 
                 onClick={() => 
                    props.onSelect(index)} >{item.name}</Link>
            <div key={index}>צפיות: {item.score} </div>
        </h5>
        </div>
    </div>
    </div>
    )}
  </div>);
}
export default Items;
