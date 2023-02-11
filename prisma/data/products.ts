
const products = [
    {
        name: "Caramel with Chocolate",
        price: 4.2,
        image: "cafe_01",
        categoryId: 1
      },
      {
        name: "Cold with Chocolate Big",
        price: 4.1,
        image: "cafe_02",
        categoryId: 1
      },
      {
        name: "Cold Latte with Caramel Big",
        price: 4.6,
        image: "cafe_03",
        categoryId: 1
      },
      {
        name: "Cold Latte with Chocolate Big",
        price: 4.7,
        image: "cafe_04",
        categoryId: 1
      },
      {
        name: "Cold Shake with Chocolate Big",
        price: 4.9,
        image: "cafe_05",
        categoryId: 1
      },
      {
        name: "Mocha",
        price: 2.5,
        image: "cafe_06",
        categoryId: 1
      },
      {
        name: "Mocha with Chocolate Big",
        price: 4.7,
        image: "cafe_07",
        categoryId: 1
      },
      {
        name: "Cappuccino Big",
        price: 4.5,
        image: "cafe_08",
        categoryId: 1
      },
      {
        name: "Mocha Medium",
        price: 3.0,
        image: "cafe_09",
        categoryId: 1
      },
      {
        name: "Cold Mocha with Caramel Medium",
        price: 3.1,
        image: "cafe_10",
        categoryId: 1
      },
      {
        name: "Cold Mocha with Chocolate Medium",
        price: 3.2,
        image: "cafe_11",
        categoryId: 1
      },
      {
        name: "Espresso",
        price: 4.2,
        image: "cafe_12",
        categoryId: 1
      },
      {
        name: "Cappuccino with Caramel Big",
        price: 4.7,
        image: "cafe_13",
        categoryId: 1
      },
      {
        name: "Caramel Coffee Big",
        price: 4.5,
        image: "cafe_14",
        categoryId: 1
      },
      {
        name: "3 Chocolate",
        price: 12.4,
        image: "donas_01",
        categoryId: 4
      },
      {
        name: "3 Glassed",
        price: 12.3,
        image: "donas_02",
        categoryId: 4
      },
      {
        name: "Strawberry",
        price: 4.3,
        image: "donas_03",
        categoryId: 4
      },
      {
        name: "Donut with Chocolate Cookie",
        price: 4.2,
        image: "donas_04",
        categoryId: 4
      },
      {
        name: "Strawberry with Chocolate Sparks",
        price: 3.5,
        image: "donas_05",
        categoryId: 4
      },
      {
        name: "Glass & Chocolate ",
        price: 3.2,
        image: "donas_06",
        categoryId: 4
      },
      {
        name: "Extra Chocolate ",
        price: 5.1,
        image: "donas_07",
        categoryId: 4
      },
      {
        name: "3 Chocolate",
        price: 12.2,
        image: "donas_08",
        categoryId: 4
      },
      {
        name: "3 Vanilla & Chocolate",
        price: 12.5,
        image: "donas_09",
        categoryId: 4
      },
      {
        name: "6 Donuts",
        price: 22.5,
        image: "donas_10",
        categoryId: 4
      },
      {
        name: "3 Various Pack",
        price: 12.4,
        image: "donas_11",
        categoryId: 4
      },
      {
        name: "Chocolate",
        price: 4.2,
        image: "donas_12",
        categoryId: 4
      },
      {
        name: "3 Chocolate with Sparks",
        price: 11.2,
        image: "donas_13",
        categoryId: 4
      },
      {
        name: "Chocolate & Coconut",
        price: 3.3,
        image: "donas_14",
        categoryId: 4
      },
      {
        name: "Chocolate Cookies",
        price: 6.7,
        image: "galletas_01",
        categoryId: 6
      },
      {
        name: "Chocolate & Oatmeal Cookies",
        price: 6.3,
        image: "galletas_02",
        categoryId: 6
      },
      {
        name: "Muffins",
        price: 6.2,
        image: "galletas_03",
        categoryId: 6
      },
      {
        name: "4 Oatmeal Cookies",
        price: 3.6,
        image: "galletas_04",
        categoryId: 6
      },
      {
        name: "Butter Cookies",
        price: 3.4,
        image: "galletas_05",
        categoryId: 6
      },
      {
        name: "Fruit Cookies",
        price: 3.2,
        image: "galletas_06",
        categoryId: 6
      },
      {
        name: "Simple",
        price: 6.0,
        image: "hamburguesas_01",
        categoryId: 2
      },
      {
        name: "Chicken",
        price: 6.7,
        image: "hamburguesas_02",
        categoryId: 2
      },
      {
        name: "Chicken & Chily",
        price: 6.5,
        image: "hamburguesas_03",
        categoryId: 2
      },
      {
        name: "Cheese & Pickles",
        price: 6.4,
        image: "hamburguesas_04",
        categoryId: 2
      },
      {
        name: "Quarter Pounder with Cheese",
        price: 6.3,
        image: "hamburguesas_05",
        categoryId: 2
      },
      {
        name: "Dobule Cheese",
        price: 69.9,
        image: "hamburguesas_06",
        categoryId: 2
      },
      {
        name: "Special Hot Dog",
        price: 4.2,
        image: "hamburguesas_07",
        categoryId: 2
      },
      {
        name: "2 Hot Dogs",
        price: 8.2,
        image: "hamburguesas_08",
        categoryId: 2
      },
      {
        name: "4 Piece of Cheese Cake",
        price: 4.2,
        image: "pastel_01",
        categoryId: 5
      },
      {
        name: "Special Waffle",
        price: 3.4,
        image: "pastel_02",
        categoryId: 5
      },
      {
        name: "Special House Croissants",
        price: 3.2,
        image: "pastel_03",
        categoryId: 5
      },
      {
        name: "Cheese Cake",
        price: 5.2,
        image: "pastel_04",
        categoryId: 5
      },
      {
        name: "Chocolate Cake",
        price: 5.0,
        image: "pastel_05",
        categoryId: 5
      },
      {
        name: "Piece Of Chocolate Cake",
        price: 3.5,
        image: "pastel_06",
        categoryId: 5
      },
      {
        name: "Spicy Double Cheese",
        price: 11.8,
        image: "pizzas_01",
        categoryId: 3
      },
      {
        name: "Ham & Cheese",
        price: 10.5,
        image: "pizzas_02",
        categoryId: 3
      },
      {
        name: "Four Cheese",
        price: 12.3,
        image: "pizzas_03",
        categoryId: 3
      },
      {
        name: "House Special",
        price: 11.0,
        image: "pizzas_04",
        categoryId: 3
      },
      {
        name: "Chorizo",
        price: 10.7,
        image: "pizzas_05",
        categoryId: 3
      },
      {
        name: "Hawaianan",
        price: 13.4,
        image: "pizzas_06",
        categoryId: 3
      },
      {
        name: "Bacon",
        price: 10.2,
        image: "pizzas_07",
        categoryId: 3
      },
      {
        name: "Vegetables & Cheese",
        price: 13.3,
        image: "pizzas_08",
        categoryId: 3
      },
      {
        name: "Pepperoni & Cheese",
        price: 11.0,
        image: "pizzas_09",
        categoryId: 3
      },
      {
        name: "Olives & Cheese",
        price: 12.5,
        image: "pizzas_10",
        categoryId: 3
      },
      {
        name: "Cheese, Ham and Mushrooms",
        price: 11.5,
        image: "pizzas_11",
        categoryId: 3
      }
]

export {
    products 
}