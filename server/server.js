import express from "express";
import pg from "pg";

const app = express();
const PORT = 5000;


const { Pool } = pg;

const pool = new Pool({
  host: "localhost",
  port: 5432,
  database: "steamboat_bills",
});


app.use(express.json());



const menuItems = [
   {
         id: "appetizers",
         title: "Appetizers",
         items: [
           {
             name: "Pistolette - Shrimp or Crawfish",
             description:
               "A Local Favorite! Lightly Fried Roll Loaded With Your Choice of Étouffée",
             price: "$2.99",
             calories: 500,
           },
         ],
       },
     
   
   
   
       
       {
         id: "cajun-cooking",
         title: "Cajun Cooking",
   
         items: [
           {
             name: "Étouffée",
             description:
               "Thick Cajun Gravy Made From A Butter Roux With Louisiana Herbs And Spices. Served Over Rice.",
             price: "From $6.99",
             calories: 600,
           },
         ],
       },
     
       {
         id: "fried-dinners",
         title: "Cajun Fried Dinners",
   
         items: [
           {
             name: "Captain's Platter",
             description:
               "Fish Filet, Medium Shrimp, Oysters, Stuffed Crab, and Stuffed Shrimp.",
             price: "$34.99",
             calories: 1200,
           },
         ],
       },
     
       {
         id: "boiled-seafood",
         title: "Boiled Crawfish & Shrimp",
         items: [
           {
             name: "Boiled Crawfish",
             description:
               "Seasonal crawfish served with Steamboat Bill's signature flavors.",
             price: "Market Price",
             calories: "Calories: 350 per serving size(4)",
           },
         ],
       },
];     

app.get("/menu", async (req, res) => {
    const result = await pool.query(`
      SELECT
        menu_items.id,
        menu_items.name,
        menu_items.description,
        menu_items.price,
        menu_items.calories,
        categories.id AS category_id,
        categories.name AS category_name
      FROM menu_items
      JOIN categories
        ON menu_items.category_id = categories.id
    `);
  
    const categories = {};
  
    result.rows.forEach((item) => {
      if (!categories[item.category_id]) {
        categories[item.category_id] = {
          id: item.category_id,
          title: item.category_name,
          items: [],
        };
      }
  
      categories[item.category_id].items.push({
        name: item.name,
        description: item.description,
        price: `$${item.price}`,
        calories: item.calories,
      });
    });
  
    res.json(Object.values(categories));
  });

app.get("/test", (req, res) => {
    console.log(req.method);
    console.log(req.url);
  
    res.json("you reached the test route");
  });

  app.get("/db-test", async (req, res) => {
    const result = await pool.query("SELECT * FROM menu_items");
  
    res.json(result.rows);
  });


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:5000`);
});