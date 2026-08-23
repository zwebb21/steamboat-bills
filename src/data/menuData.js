


//creating at import 

import etouffeeImage from "../assets/food/Etofuee-steamboatbills.jpg";
import crawfishboil from "../assets/food/crawfishboil.jpg";
import crawfishshrimpImage from "../assets/food/crawfish-shrimp.jpg";
import friedshrimpplatterImage from "../assets/food/fried-shrimp-platter.jpg";


//this data is Driving the entire menu for the website .

const menuData = [
    {
      id: "appetizers",
      title: "Appetizers",
      image: crawfishshrimpImage,
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
      image: etouffeeImage,

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
      image: friedshrimpplatterImage,

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
      image:crawfishboil,
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
  
  export default menuData;