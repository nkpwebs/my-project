import React,  { useState, useEffect }  from "react";
import Items from './Items';
import ViewItem from './ViewItem';
import {getItems} from './api/jsonPlaceholder';
//import ItemCardComponent from './ItemCardComponent';
 

function Home() {

    const [itemsDetailArr, setItemsDetailArr] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(async () => {
        let jsonItems;
        let user=localStorage.getItem("user");
        let userRecipes="Recipes"+user;
        if(!localStorage.getItem(userRecipes)){
            jsonItems = await getItems();
            localStorage.setItem(userRecipes, JSON.stringify(jsonItems));
        }else{
            jsonItems = JSON.parse(localStorage.getItem(userRecipes));
        }
        console.log("jsonItems" +jsonItems);
        setItemsDetailArr(jsonItems);
    },[]);

    const onSelectItem = index => {
  //    const item = itemsDetailArr.find(item => item.id === itemId);
      const item = itemsDetailArr[index];
      setSelectedItem(item);
      score(index);
//should display viewItem
  }
    
     const score=(index)=>{
       let newItemsArr = [...itemsDetailArr];
       newItemsArr[index].score++;
       //newItemsArr[index].updateDate=new Date().toLocaleString();
       newItemsArr.sort((a,b)=> b.score-a.score);
       setItemsDetailArr(newItemsArr);
     }

//  render() {
    return (
    <div>
      <div className="container mt-3">
        <h1>מתכונים</h1>
        <div className="row">
          <div className="col-lg-3 col-6">
            <h5>הצג לי את המתכונים </h5>
          </div>
          <div className="form-group">
            <div className="form-check-inline">
              <label className="form-check-label">
                <input type="radio" name="orderProp" className="form-check-input" value="views"/>הכי
                פופולאריים
            </label>
          </div>
          <div className="form-check-inline">
            <label className="form-check-label">
                <input type="radio" name="orderProp" className="form-check-input" value="createdAt"/>הכי חדשים
            </label>
          </div>
        </div>
      </div>
    <div className="row">
      <div className="col-lg-6">
        <div className="md-form active-pink active-pink-2 mb-3 mt-0">
            <input type="text" className="form-control" placeholder="חיפוש מתכון" aria-label="Search" />
        </div>
        <div className="search-results list-group"></div>
      </div>
      <div className="col-lg-6"></div>
  </div>
  <div className="row">
    <div className="col-lg-6">
        <div className="md-form active-pink active-pink-2 mb-3 mt-0">
            <input type="text" className="form-control" placeholder="חיפוש לפי רכיב" aria-label="Search"/>
        </div>
        <div className="search-results list-group"></div>
      </div>
      <div className="col-lg-6">
        <div className="form-check-inline">
            <label className="form-check-label">
                <input type="radio" className="form-check-input" name="multipleIng" value="true"/>כולם
            </label>
        </div>
          <div className="form-check-inline">
            <label className="form-check-label">
                <input type="radio" className="form-check-input" value="false"/>לפחות אחד
            </label>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-lg-12">
          <ul className="list-inline"></ul>
      </div>
    </div>
    <div>
      <Items itemsDetailArr={itemsDetailArr} onScore={score} onSelect={onSelectItem}/>
    </div>
    </div>
</div>
    );
  }
//}
 
export default Home;