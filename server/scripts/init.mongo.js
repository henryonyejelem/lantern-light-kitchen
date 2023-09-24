//Initializing the Mongo DB Database
db.chefs.remove({});
db.menus.remove({});
db.users.remove({});
db.reservation.remove({});

const chefsDB =[
    {
        name: "Signature Peking Duck",
        price: 28.95,
        description: "Slow-roasted duck served with thin pancakes, scallions, and hoisin sauce.",
        imagePath: "pekkingDuck.png"
    },
    {
        name: "Crispy Szechuan Beef",
        price: 19.95,
        description: "Crispy beef strips tossed in a spicy Szechuan sauce with peppers and onions.",
        imagePath: "crispyBeef.png"
    },
    {
        name: "Steamed Sea Bass with Ginger Soy",
        price: 18.50,
        description: "Delicate sea bass fillet steamed with ginger and soy sauce.",
        imagePath: "seaBass.png"
    },
    {
        name: "Honey Walnut Shrimp",
        price: 22.50,
        description: "Crispy shrimp glazed in honey sauce, topped with candied walnuts.",
        imagePath: "walnutShrimp.png"
    },
    {
        name: "Spicy Mapo Tofu",
        price: 15.95,
        description: "Soft tofu and minced pork in a fiery chili and bean sauce.",
        imagePath: "spicyTofu.png"
    },
    {
        name: "Five-Spice Roast Chicken",
        price: 17.95,
        description: "Roasted chicken marinated in aromatic five-spice blend.",
        imagePath: "roastChicken.png"
    },
]

db.chefs.insertMany(chefsDB);

const menusDB = [
    {
        name: "Qin's Fried Rice or Lo Mein",
        price: "13.55",
        description: "Combination of shrimp, chicken, and pork",
        category: "rice"
    },
    {
        name: "Beef Fried Rice",
        price: "13.95",
        description: "",
        category: "rice"
    },
    {
        name: "Jumbo Shrimp Fried Rice",
        price: "17.95",
        description: "8 pieces",
        category: "rice"
    },
    {
        name: "Qin's Pan Fried Thin Noodle",
        price: "14.55",
        description: "Sautéed shrimp, chicken, pork and vege in brown sauce, over top of pan fried in egg noodles",
        category: "rice"
    },
    {
        name: "Pineapple Seafood Fried Rice",
        price: "14.95",
        description: "Shrimp and scallop stir fry with fresh pineapple",
        category: "rice"
    },
    {
        name: "Seafood Rice Vermicelli",
        price: "14.95",
        description: "Shrimp, scallop, calamari, and vege over rice vermicelli",
        category: "rice"
    },
    {
        name: "Ungai Don",
        price: "14.95",
        description: "Grilled fresh water el, served on sushi rice with pickle and eel sauce",
        category: "rice"
    },

    {
        name: "Cold Soft Spring Roll",
        price: "7.25",
        description: "2 pieces",
        category: "appetizer"
    },
    {
        name: "Seafood Crispy Spring Roll",
        price: "7.25",
        description: "",
        category: "appetizer"
    },
    {
        name: "Choice of Lettuce Wrap",
        price: "8.25",
        description: "2 pieces",
        category: "appetizer"
    },
    {
        name: "Choice of Moo Shu",
        price: "8.25",
        description: "2 pieces",
        category: "appetizer"
    },
    {
        name: "Spicy Seafood Dumpling",
        price: "9.75",
        description: "10 pieces",
        category: "appetizer"
    },
    {
        name: "Spicy Chicken Dumpling",
        price: "8.75",
        description: "10 pieces",
        category: "appetizer"
    },
    {
        name: "Crab Puffs",
        price: "6.25",
        description: "6 pieces",
        category: "appetizer"
    },
    {
        name: "Edamame",
        price: "4.75",
        description: "",
        category: "appetizer"
    },

    {
        name: "Hot & Sour Soup",
        price: "2.95",
        description: "Meatless with vegetable broth",
        category: "soup"
    },
    {
        name: "Wonton Soup",
        price: "2.95",
        description: "Hand wrapped chicken wontons with bok choy and green onion.",
        category: "soup"
    },
    {
        name: "Egg Drop Soup",
        price: "2.95",
        description: "Creamy corn soup",
        category: "soup"
    },
    {
        name: "Miso Soup",
        price: "2.95",
        description: "Tofu, seaweed, green onions, and soybean paste in fish stock broth.",
        category: "soup"
    },
    {
        name: "Seaweed Soup",
        price: "2.95",
        description: "Seaweed, bok choy, and green onion in vegetale broth",
        category: "soup"
    },
    {
        name: "House Wonton Soup",
        price: "6.50",
        description: "Hand wrapped chicken wontons with shripm, chicken, bok choy, mushrooms, and green onion.",
        category: "soup"
    },
    {
        name: "Vegetable Soup",
        price: "5.75",
        description: "Variety of vegetables in clear vegetable broth",
        category: "soup"
    },
    {
        name: "Pumpkin Bisque",
        price: "6.50",
        description: "Steamed pumpkin pureed and simmered, topped with sliced button mushroom",
        category: "soup"
    },

    {
        name: "Kappa Maki",
        price: "5.50",
        description: "Cucumber roll. 6 pieces. sushi roll",
        category: "sushi"
    },
    {
        name: "Tekka Maki",
        price: "6.95",
        description: "Tuna roll. 6 pieces. Sushi roll",
        category: "sushi"
    },
    {
        name: "California Roll",
        price: "5.95",
        description: "Contains masago. Crab stick, cucumber, and avocado. 8 pieces",
        category: "sushi"
    },
    {
        name: "Vegetable Roll",
        price: "5.95",
        description: "Fresh and pickled vegetable. 8 pieces",
        category: "sushi"
    },
    {
        name: "Spicy Tuna Roll",
        price: "6.50",
        description: "Raw. Contains masago. Spicy tuna and cucumber",
        category: "sushi"
    },
    {
        name: "Unagi Roll",
        price: "6.75",
        description: "Fresh water eel and cucumber. 8 pieces.",
        category: "sushi"
    },
    {
        name: "Negihama Roll",
        price: "6.50",
        description: "Raw. Yellowtail and green onion. 6 pieces",
        category: "sushi"
    },
    {
        name: "Salmon SkinRoll",
        price: "6.50",
        description: "Crunchy salmon skin and veg. 8 pieces.",
        category: "sushi"
    },
    {
        name: "Philadelphia Roll",
        price: "6.75",
        description: "Raw. Salmon, avacado and cream cheese. 8 pieces",
        category: "sushi"
    },
    {
        name: "Yum Yum",
        price: "7.50",
        description: "Contains mayonnaise and masago. Scallop, crab salad, masago, and mayonnaise",
        category: "sushi"
    },

    {
        name: "Honey Crispy Banana",
        price: "7.50",
        description: "",
        category: "dessert"
    },
    {
        name: "Fried Tempura Ice Cream",
        price: "7.50",
        description: "",
        category: "dessert"
    },
    {
        name: "Strawberry Sundae Pie",
        price: "7.50",
        description: "",
        category: "dessert"
    },
    {
        name: "Espresso Pie",
        price: "7.50",
        description: "",
        category: "dessert"
    },
    {
        name: "Banana Split Pie",
        price: "7.50",
        description: "",
        category: "dessert"
    },
    {
        name: "Manago Fruit Shell Sorbet",
        price: "7.95",
        description: "",
        category: "dessert"
    },
    {
        name: "Coconut Fruit Shell Sorbet",
        price: "7.95",
        description: "",
        category: "dessert"
    },
    {
        name: "Pineapple Fruit Shell Sorbet",
        price: "7.95",
        description: "",
        category: "dessert"
    },
    {
        name: "Key Line Pie",
        price: "7.50",
        description: "",
        category: "dessert"
    },
    {
        name: "Mississippi Mud Pie",
        price: "7.50",
        description: "",
        category: "dessert"
    },
    {
        name: "Lychee",
        price: "7.50",
        description: "",
        category: "dessert"
    },
]

db.menus.insertMany(menusDB);

const userDB = {
    name: {
        first : "Henry",
        last : "Onyejelem" 
    },
    email: "onyejelemco@gmail.com",
    password: "97132953Af",

    checkout: [],     
}

db.users.insertOne(userDB);