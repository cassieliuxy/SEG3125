var products = [
  {
    name: "Banana",
    vegetarian: true,
    glutenFree: true,
    organic: true,
    price: 0.99,
  },
  {
    name: "Carrot",
    vegetarian: true,
    glutenFree: true,
    organic: false,
    price: 1.59,
  },
  {
    name: "Broccoli",
    vegetarian: true,
    glutenFree: true,
    organic: false,
    price: 1.99,
  },
  {
    name: "Bread",
    vegetarian: true,
    glutenFree: false,
    organic: true,
    price: 2.35,
  },
  {
    name: "Tomato",
    vegetarian: true,
    glutenFree: true,
    price: 2.69,
    organic: true,
  },
  {
    name: "Apple",
    vegetarian: true,
    glutenFree: true,
    price: 2.99,
    organic: false,
  },
  {
    name: "Bagel",
    vegetarian: true,
    glutenFree: false,
    price: 3.29,
    organic: false,
  },
  {
    name: "Bacon",
    vegetarian: false,
    glutenFree: true,
    price: 4.99,
    organic: false,
  },

  {
    name: "Cereal",
    vegetarian: true,
    glutenFree: false,
    price: 7.49,
    organic: false,
  },
  {
    name: "Salmon",
    vegetarian: false,
    glutenFree: true,
    price: 10.0,
    organic: false,
  },
  {
    name: "Chicken Breast",
    vegetarian: false,
    glutenFree: true,
    price: 12.99,
    organic: false,
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
