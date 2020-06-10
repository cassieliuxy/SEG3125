var products = [
  {
    name: "Banana",
    vegetarian: true,
    glutenFree: true,
    organic: true,
    price: 0.99,
    category: "Fruits",
  },
  {
    name: "Carrot",
    vegetarian: true,
    glutenFree: true,
    organic: false,
    price: 1.59,
    category: "Vegetables",
  },
  {
    name: "Orange",
    vegetarian: true,
    glutenFree: true,
    organic: true,
    price: 1.29,
    category: "Fruits",
  },
  {
    name: "Broccoli",
    vegetarian: true,
    glutenFree: true,
    organic: false,
    price: 1.99,
    category: "Vegetables",
  },
  {
    name: "Bread",
    vegetarian: true,
    glutenFree: false,
    organic: true,
    price: 2.35,
    category: "Gluten Food",
  },
  {
    name: "Tomato",
    vegetarian: true,
    glutenFree: true,
    price: 2.69,
    organic: true,
    category: "Vegetables",
  },
  {
    name: "Apple",
    vegetarian: true,
    glutenFree: true,
    price: 2.99,
    organic: false,
    category: "Fruits",
  },
  {
    name: "Watermelon",
    vegetarian: true,
    glutenFree: true,
    price: 3.49,
    organic: false,
    category: "Fruits",
  },
  {
    name: "Bagel",
    vegetarian: true,
    glutenFree: false,
    price: 3.79,
    organic: false,
    category: "Gluten Food",
  },
  {
    name: "Orange Juice" ,
    vegetarian: true,
    glutenFree: true,
    price: 4.59,
    organic: true,
    category: "Juices",
  },
  {
    name: "Mango Juice" ,
    vegetarian: true,
    glutenFree: true,
    price: 4.59,
    organic: false,
    category: "Juices",
  },
  {
    name: "Pineapple Juice" ,
    vegetarian: true,
    glutenFree: true,
    price: 4.59,
    organic: true,
    category: "Juices",
  },
  {
    name: "Apple Juice" ,
    vegetarian: true,
    glutenFree: true,
    price: 4.59,
    organic: false,
    category: "Juices",
  },
  {
    name: "Bacon",
    vegetarian: false,
    glutenFree: true,
    price: 4.99,
    organic: false,
    category: "Meat",
  },
  {
    name: "Ketchup" ,
    vegetarian: true,
    glutenFree: true,
    price: 6.79,
    organic: true,
    category: "Cooking Products",
  },
  {
    name: "Mustard" ,
    vegetarian: true,
    glutenFree: true,
    price: 6.79,
    organic: false,
    category: "Cooking Products",
  },
  {
    name: "Cereal",
    vegetarian: true,
    glutenFree: false,
    price: 7.49,
    organic: false,
    category: "Gluten Food",
  },
  {
    name: "Salmon",
    vegetarian: false,
    glutenFree: true,
    price: 10.0,
    organic: false,
    category: "Meat",
  },
  {
    name: "Salt" ,
    vegetarian: true,
    glutenFree: true,
    price: 11.0,
    organic: false,
    category: "Cooking Products",
  },
  {
    name: "Sugar" ,
    vegetarian: true,
    glutenFree: true,
    price: 12.59,
    organic: true,
    category: "Cooking Products",
  },
  
  {
    name: "Chicken Breast",
    vegetarian: false,
    glutenFree: true,
    price: 12.99,
    organic: false,
    category: "Meat",
  },
];

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
  let product_names = [];
  for (let i = 0; i < prods.length; i += 1) {
    if (
      restriction == "Vegetarian & GlutenFree & Organic" &&
      prods[i].vegetarian == true &&
      prods[i].glutenFree == true &&
      prods[i].organic == true
    ) {
      product_names.push(prods[i]);
    } else if (
      restriction == "Vegetarian & GlutenFree & Inorganic" &&
      prods[i].vegetarian == true &&
      prods[i].glutenFree == true &&
      prods[i].organic == false
    ) {
      product_names.push(prods[i]);
    } else if (
        restriction == "Vegetarian & GlutenFree" &&
        prods[i].vegetarian == true &&
        prods[i].glutenFree == true
      ) {
        product_names.push(prods[i]);
      } 
      else if (
        restriction == "Vegetarian & Organic" &&
        prods[i].vegetarian == true &&
        prods[i].organic == true
      ) {
        product_names.push(prods[i]);
      } else if (
        restriction == "Vegetarian & Inorganic" &&
        prods[i].vegetarian == true &&
        prods[i].organic == false
      ) {
        product_names.push(prods[i]);
      } else if (
        restriction == "Vegetarian" &&
        prods[i].vegetarian == true 
      ) {
        product_names.push(prods[i]);
      } else if (
        restriction == "GlutenFree & Organic" &&
        prods[i].glutenFree == true &&
        prods[i].organic == true
      ) {
        product_names.push(prods[i]);
      } else if (
        restriction == "GlutenFree & Inorganic" &&
        prods[i].glutenFree == true &&
        prods[i].organic == false
      ) {
        product_names.push(prods[i]);
      } else if (
        restriction == "GlutenFree" &&
        prods[i].glutenFree == true 
      ) {
        product_names.push(prods[i]);
      }  else if (restriction == "None") {
      product_names.push(prods[i]);
    }
  }
  return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
  totalPrice = 0;
  for (let i = 0; i < products.length; i += 1) {
    if (chosenProducts.indexOf(products[i].name) > -1) {
      totalPrice += products[i].price;
    }
  }
  return totalPrice;
}
