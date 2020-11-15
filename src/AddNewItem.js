import React, { Component } from "react";
 
class AddNewItem extends Component {
  render() {
    return (
<div id="main" className="container mt-3">
    <form name="recipeForm" id="recipeForm">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="recipeName">שם המתכון</label>
            <input type="input" className="form-control" name="recipeName" id="recipeName" placeholder="שם המתכון"  required=""/>
            <div className="mt-2 form-control alert alert-danger" role="alert">
                "שם המתכון" הוא שדה חובה
            </div>
        </div>
        <div className="form-group col-md-3">
            <label>מי יוכל לצפות במתכון</label>
            <div className="form-group">
                <div className="form-check-inline">
                    <label className="form-check-label">
                        <input type="radio" name="isPublic" className="form-check-input" value="true"/>כולם
                    </label>
                </div>
                <div className="form-check-inline">
                    <label className="form-check-label">
                        <input type="radio" name="isPublic" className="form-check-input" checked="checked" value="false"/>רק אני
                    </label>
                </div>
            </div>
        </div>
        <div className="form-group col-md-3">
            <div className="form-group">
                <label for="recipeImgUpload">תמונה ראשית</label>
                <input type="file" image-with-preview="" className="form-control-file" id="recipeImgUpload" accept="image"/>
            </div>
        </div>
    </div>
    <div className="form-row">
        <div className="form-group col-md-9">
            <label for="sourceName">מקור</label>
            <input type="input" className="form-control" id="sourceName" placeholder="מקור המתכון"/>
            <label for="sourceLink">קישור למקור</label>
            <input type="input" className="form-control" id="sourceLink" placeholder="קישור למתכון אם קיים"/>
        </div>
        <div className="form-group col-md-3">
            <img className="img-fluid" alt="" srcset=""/>
        </div>
    </div>
    <div className="form-row">
        <div id="accordion" className="col-12 mt-2">
            <div className="card">
                <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            תיאור כללי
                        </button>
                    </h5>
                </div>
                <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">
                        <label for="desc">תיאור רקע של המתכון. יוצג מתחת לכותרת</label>
                        <textarea className="form-control" id="desc" rows="3"></textarea>
                        <div className="form-row">
                            <div className="col-md-6">
                                <label>מתאים לתזונה מסוג:</label>
<div className="form-check">
    <div className="form-row container">
        <div className="col-lg-3 col-md-4 col-6">
            <input className="form-check-input" type="checkbox" value="" id="diet0"/>
            <label className="form-check-label" for="diet0">טבעוני
            </label>
        </div><div className="col-lg-3 col-md-4 col-6">
            <input className="form-check-input" type="checkbox" value="" id="diet1"/>
            <label className="form-check-label" for="diet1">ללא גלוטן
            </label>
        </div><div className="col-lg-3 col-md-4 col-6">
            <input className="form-check-input" type="checkbox" value="" id="diet2"/>
            <label className="form-check-label" for="diet2">כשר
            </label>
        </div><div className="col-lg-3 col-md-4 col-6">
            <input className="form-check-input" type="checkbox" value="" id="diet3"/>
            <label className="form-check-label" for="diet3">ללא לקטוז
            </label>
        </div><div className="col-lg-3 col-md-4 col-6 ng-scope">
            <input className="form-check-input" type="checkbox" value="" id="diet4"/>
            <label className="form-check-label" for="diet4">פרווה
            </label>
        </div><div className="col-lg-3 col-md-4 col-6">
            <input className="form-check-input" type="checkbox" value="" id="diet5"/>
            <label className="form-check-label" for="diet5">פליאו
            </label>
        </div><div className="col-lg-3 col-md-4 col-6">
            <input className="form-check-input" type="checkbox" value="" id="diet6"/>
            <label className="form-check-label" for="diet6">קטגוני
            </label>
        </div><div className="col-lg-3 col-md-4 col-6">
            <input className="form-check-input" type="checkbox" value="" id="diet7"/>
            <label className="form-check-label" for="diet7">צמחוני
            </label>
        </div><div className="col-lg-3 col-md-4 col-6">
            <input className="form-check-input" type="checkbox" value="" id="diet8"/>
            <label className="form-check-label" for="diet8">רואו
            </label>
        </div>
    </div>
</div>
                            </div>
                            <div className="form-group col-md-6">
                                    <label>סוג מנה:</label>
                                <div className="form-check">
                                    <div className="form-row container">
                                       <div className="col-lg-3 col-md-4 col-6">
                                            <input className="form-check-input" type="checkbox" value="" id="dish0"/>
                                            <label className="form-check-label" for="dish0">מאפים מתוקים
                                            </label>
                                        </div><div className="col-lg-3 col-md-4 col-6">
                                            <input className="form-check-input" type="checkbox" value="" id="dish1"/>
                                            <label className="form-check-label" for="dish1">פשטידות
                                            </label>
                                        </div><div className="col-lg-3 col-md-4 col-6" >
                                            <input className="form-check-input" type="checkbox" value="" id="dish2"/>
                                            <label className="form-check-label" for="dish2">מנות עיקריות
                                            </label>
                                        </div><div className="col-lg-3 col-md-4 col-6">
                                            <input className="form-check-input" type="checkbox" value="" id="dish3"/>
                                            <label className="form-check-label" for="dish3">קינוחים
                                            </label>
                                        </div><div className="col-lg-3 col-md-4 col-6">
                                            <input className="form-check-input" type="checkbox" value="" id="dish4"/>
                                            <label className="form-check-label" for="dish4">פנקייקים
                                            </label>
                                        </div><div className="col-lg-3 col-md-4 col-6">
                                            <input className="form-check-input" type="checkbox" value="" id="dish5"/>
                                            <label className="form-check-label" for="dish5">קציצות ולביבות
                                            </label>
                                        </div><div className="col-lg-3 col-md-4 col-6" >
                                            <input className="form-check-input" type="checkbox" value="" id="dish6"/>
                                            <label className="form-check-label" for="dish6">מרקים
                                            </label>
                                        </div><div className="col-lg-3 col-md-4 col-6" >
                                            <input className="form-check-input" type="checkbox" value="" id="dish7"/>
                                            <label className="form-check-label" for="dish7">עוגות ועוגיות
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            פירוט הרכיבים
                        </button>
                    </h5>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div className="card-body">                 
                        <div className="form-row"><hr/></div>
                        <div className="form-row">
                            <div className="form-group-mb-0 col-md-1 col-6">
                                <label for="quantity">כמות</label>
                                <input type="input" className="form-control" id="quantity"/>
                            </div>
                            <div className="form-group-mb-0 col-md-2 col-6">
                                <label for="unit">יח' מידה</label>
                                    <select className="form-control" id="units"><option value="" className="" selected="selected">-- בחר אחד --</option><option label="גרם" value="string:0">גרם</option><option label="מיליליטר" value="string:1">מיליליטר</option><option label="כפית" value="string:2">כפית</option><option label="כפיות" value="string:3">כפיות</option><option label="כף" value="string:4">כף</option><option label="כפות" value="string:5">כפות</option><option label="כוס" value="string:6">כוס</option><option label="כוסות" value="string:7">כוסות</option><option label="יחידה" value="string:8">יחידה</option><option label="יחידות" value="string:9">יחידות</option><option label="קורט" value="string:10">קורט</option><option label="אריזה" value="string:11">אריזה</option><option label="אריזות" value="string:12">אריזות</option><option label="גביע" value="string:13">גביע</option><option label="גביעים" value="string:14">גביעים</option><option label="קילו" value="string:15">קילו</option></select>
                            </div>
                            <div className="form-group-mb-0 col-md-4 col-sm-4">
                                <label for="ingredient">רכיב</label>
                                <select className="form-control" name="repeatSelect" on-change="addMissingIngredient()" ng-options="option.id as option.name group by option.type for option in ingredientsList"><option value="" className="" selected="selected">-- בחר אחד --</option><optgroup label="רשימה:"><option label="אבקת אפייה" value="string:7AJHZb9CZM-5">אבקת אפייה</option><option label="אשל" value="string:IsO6poRJQN-12">אשל</option><option label="ביצים" value="string:IsO6poRJQN-10">ביצים</option><option label="בצל" value="string:j5p3SpbSAJ-22">בצל</option><option label="בצל סגול" value="string:7AJHZb9CZM-8">בצל סגול</option><option label="גבינת &quot;טוב טעם&quot;" value="string:uXhSl9982U-13">גבינת "טוב טעם"</option><option label="גרגירי חומוס" value="string:j5p3SpbSAJ-21">גרגירי חומוס</option><option label="חלב סויה" value="string:7AJHZb9CZM-7">חלב סויה</option><option label="כמון" value="string:7AJHZb9CZM-4">כמון</option><option label="מים" value="string:7AJHZb9CZM-6">מים</option><option label="מלח" value="string:NLnUhQT6aE-22">מלח</option><option label="מלח הימאליה אפור ורוד" value="string:7AJHZb9CZM-2">מלח הימאליה אפור ורוד</option><option label="סוכר" value="string:uXhSl9982U-15">סוכר</option><option label="סולת" value="string:uXhSl9982U-17">סולת</option><option label="סלק" value="string:LiHu5RdHPW-25">סלק</option><option label="פלפל" value="string:7AJHZb9CZM-3">פלפל</option><option label="קינמון" value="string:h2zDcBjDbT-21">קינמון</option><option label="קמח" value="string:uXhSl9982U-16">קמח</option><option label="קמח עדשים" value="string:7AJHZb9CZM-1">קמח עדשים</option><option label="שזיפים" value="string:h2zDcBjDbT-19">שזיפים</option><option label="שיני שום" value="string:j5p3SpbSAJ-23">שיני שום</option><option label="שמן" value="string:NLnUhQT6aE-19">שמן</option><option label="שמנת חמוצה" value="string:IsO6poRJQN-11">שמנת חמוצה</option><option label="תפודים" value="string:IsO6poRJQN-9">תפודים</option></optgroup><optgroup label="רכיב לא נמצא"><option label="הוסף" value="number:-1">הוסף</option></optgroup></select>
                                <input type="input" className="form-control " id="ingredient" placeholder="שם הרכיב"/>  
                              </div>
                            <div className="form-group-mb-0 col-md-3 col-sm-4">
                                <label for="ingredientComm">הערה</label>
                                <input type="input" className="form-control" id="ingredientComm"  placeholder="למשל: קצוץ, שהושרה 12 שעות וכד'"/>
                            </div>
                            <div className="form-group-mb-0 col-md-2 col-sm-4">
                                <label>&nbsp;</label>
                                <br/>
                                <input className="btn btn-primary mx-1" type="button" value="שמור" on-click="saveIngredientLocally()"/>
                                <input className="btn btn-primary" type="reset" on-click="ingredientExists=true" value="נקה"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-1">&nbsp;
                            </div>
                            <div className="form-group col-md-9">
                                <small className="form-text text-muted">למשל: כוס, גרם וכו' (לבחור מרשימה סגורה כדי שאפשר יהיה לעשות המרות)</small>
                            </div>
                            <div className="form-group col-md-2">&nbsp;
                            </div>
                        </div>                               
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            פירוט שלבי ההכנה
                        </button>
                    </h5>
                </div>
                <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="card-body">                        
                        <div className="form-row"><hr/></div>
                        <div className="form-row" id="instructionForm">
                            <div className="form-group-mb-0 col-lg-2 col-md-1 col-sm-1">
                                <label for="seq">#</label>
                                <input type="input" className="form-control" placeholder=""/>
                            </div>
                            <div className="form-group-mb-0 col-lg-8 col-md-9 col-sm-11">
                                <label for="instruction">הוראה</label>
                                <input type="input" className="form-control" id="instruction" placeholder="מה יבוצע בשלב זה"/>
                            </div>
                            <div className="form-group-mb-0 col-lg-2 col-md-2">
                                <label>&nbsp;</label>
                                <br/>
                                <input className="btn btn-primary" type="button" value="שמור שלב" on-click="saveStepLocally()"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-lg-9">
                                <small className="form-text text-muted">טיפ: אין צורך לשמור על רציפות מספור. לדוגמא: הוראות 0,6,9 יוצגו כ-1,2,3</small>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>            
        </div>
    </div>
    <div className="form-row m-2">
        <div className="col-md-1 col-6">
            <input className="btn btn-danger align-right" type="button" value="מחק מתכון" data-toggle="modal" data-target="#modalPopup" on-click="deleteRecipe()"/>
        </div>
        <div className="col-md-11 col-6 align-left">
            <input className="btn btn-primary" type="button" value="שמור מתכון" on-click="editRecipe()" disabled="disabled"/>
        </div>
    </div>
    <div className="form-row m-2">
        <div className="col align-left">
                <div  role="alert">
                "שם המתכון" הוא שדה חובה
            </div>
        </div>
        <div className="col align-left">
            <input className="btn btn-primary" type="button" value="שמור מתכון" ng-click="addRecipe()" ng-disabled="recipeForm.$invalid" disabled="disabled"/>
        </div>
    </div>
</form>
<div className="modal" id="modalPopup">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">×</button>
        </div>
        <div className="modal-body">        
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-warning mr-2" on-click="onAccept()">אישור</button>
          <button type="button" className="btn btn-primary mr-2" data-dismiss="modal">ביטול</button>
        </div> 
      </div>
    </div>
  </div> 
      </div>
    );
  }
}
 
export default AddNewItem;