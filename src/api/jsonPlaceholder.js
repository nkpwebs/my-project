//import axios from 'axios';

const getItems = async () => {
    // return axios.get('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.data);
    
    //const response = await axios.get('https://parseapi.back4app.com/classes/Recipes?count=1&limit=0');
    let user=localStorage.getItem("user");
    console.log("user in getItems Api: "+user);
    if (user){
    return([
        {image: "https://parsefiles.back4app.com/Ubmbhqz8eIdPXGrtk00xDzb9xm9nJHfkf8mtsGyZ/85f9780c8cdd1788d6395c8e66a66e37_NaN.jpeg", name: "חביתה טבעונית מקמח עדשים", 
         score: 0, lastUpdate: new Date().toLocaleDateString()},
         {image: "https://parsefiles.back4app.com/Ubmbhqz8eIdPXGrtk00xDzb9xm9nJHfkf8mtsGyZ/f3efdde9ec46de903622c786cdc56761_NaN.jpeg", name: "רוקוט קרומפלי", 
         score: 0, lastUpdate: new Date().toLocaleDateString()},
         {image: "https://parsefiles.back4app.com/Ubmbhqz8eIdPXGrtk00xDzb9xm9nJHfkf8mtsGyZ/7873028d4c447b54acaf4c62b6d39d0b_NaN.jpeg", name: "גומבוץ - כופתאות תפוחי אדמה במילוי שזיפים", 
         score: 0, lastUpdate: new Date().toLocaleDateString()},
         {image: "https://parsefiles.back4app.com/Ubmbhqz8eIdPXGrtk00xDzb9xm9nJHfkf8mtsGyZ/a60ab81ef3c83679c487e1398e8d3f03_NaN.jpeg", name: "טורוש גומבוץ",
         score: 0, lastUpdate: new Date().toLocaleDateString()},
         {image: "https://parsefiles.back4app.com/Ubmbhqz8eIdPXGrtk00xDzb9xm9nJHfkf8mtsGyZ/e528c151a24159280e74b475a16ec9d3_NaN.jpeg", name: "פנקייק טבעוני",
         score: 0, lastUpdate: new Date().toLocaleDateString()},
         {image: "https://hamuf.github.io/recipes-mockup/assets/imgs/recipe-imge-ph.jpg", name: "קרפים (במקור: בליני)",
         score: 0, lastUpdate: new Date().toLocaleDateString()},
         {image: "https://hamuf.github.io/recipes-mockup/assets/imgs/recipe-imge-ph.jpg", name: "עוגת שוקולד כשרה לפסח שלא תחליפו אף פעם",
         score: 0, lastUpdate: new Date().toLocaleDateString()},
         {image: "https://hamuf.github.io/recipes-mockup/assets/imgs/recipe-imge-ph.jpg", name: "פנקייק תפוחים",
         score: 0, lastUpdate: new Date().toLocaleDateString()},
         {image: "https://hamuf.github.io/recipes-mockup/assets/imgs/recipe-imge-ph.jpg", name: "סלט תפוחי אדמה בחרדל דיז’ון ולימון",
         score: 0, lastUpdate: new Date().toLocaleDateString()},
         {image: "https://hamuf.github.io/recipes-mockup/assets/imgs/recipe-imge-ph.jpg", name: "חיתוכיות תמרים וקינמון",
         score: 0, lastUpdate: new Date().toLocaleDateString()},
     ]);} else {
        return([
            {image: "https://parsefiles.back4app.com/Ubmbhqz8eIdPXGrtk00xDzb9xm9nJHfkf8mtsGyZ/85f9780c8cdd1788d6395c8e66a66e37_NaN.jpeg", name: "חביתה טבעונית מקמח עדשים", 
             score: 0, lastUpdate: new Date().toLocaleDateString()},
             {image: "https://parsefiles.back4app.com/Ubmbhqz8eIdPXGrtk00xDzb9xm9nJHfkf8mtsGyZ/f3efdde9ec46de903622c786cdc56761_NaN.jpeg", name: "רוקוט קרומפלי", 
             score: 0, lastUpdate: new Date().toLocaleDateString()},
             {image: "https://parsefiles.back4app.com/Ubmbhqz8eIdPXGrtk00xDzb9xm9nJHfkf8mtsGyZ/7873028d4c447b54acaf4c62b6d39d0b_NaN.jpeg", name: "גומבוץ - כופתאות תפוחי אדמה במילוי שזיפים", 
             score: 0, lastUpdate: new Date().toLocaleDateString()},
             {image: "https://parsefiles.back4app.com/Ubmbhqz8eIdPXGrtk00xDzb9xm9nJHfkf8mtsGyZ/a60ab81ef3c83679c487e1398e8d3f03_NaN.jpeg", name: "טורוש גומבוץ",
             score: 0, lastUpdate: new Date().toLocaleDateString()},
             {image: "https://parsefiles.back4app.com/Ubmbhqz8eIdPXGrtk00xDzb9xm9nJHfkf8mtsGyZ/e528c151a24159280e74b475a16ec9d3_NaN.jpeg", name: "פנקייק טבעוני",
             score: 0, lastUpdate: new Date().toLocaleDateString()},
             {image: "https://hamuf.github.io/recipes-mockup/assets/imgs/recipe-imge-ph.jpg", name: "קרפים (במקור: בליני)",
             score: 0, lastUpdate: new Date().toLocaleDateString()},
             {image: "https://hamuf.github.io/recipes-mockup/assets/imgs/recipe-imge-ph.jpg", name: "עוגת שוקולד כשרה לפסח שלא תחליפו אף פעם",
             score: 0, lastUpdate: new Date().toLocaleDateString()},
             {image: "https://hamuf.github.io/recipes-mockup/assets/imgs/recipe-imge-ph.jpg", name: "פנקייק תפוחים",
             score: 0, lastUpdate: new Date().toLocaleDateString()},
         ]);
     }
}

export {
    getItems
};