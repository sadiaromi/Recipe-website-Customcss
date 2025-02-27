export interface Recipe {
    id: number
    name: string
    category: "Pakistani" | "Chinese" | "Dessert"
    image: string
    description: string
    ingredients: string[]
    instructions: string[]
  }
  
  export const recipes: Recipe[] = [
    {
      id: 1,
      name: "Biryani",
      category: "Pakistani",
      image: "/biryani.jpg",
      description: "A flavorful rice dish with aromatic spices and tender chicken.",
      ingredients: [
        "2 cups basmati rice",
        "500g chicken or lamb",
        "1 cup yogurt",
        "2 onions, sliced",
        "2 tomatoes, chopped",
        "Biryani spice mix",
        "Oil and ghee",
      ],
      instructions: [
        "Marinate the meat in yogurt and spices for 2 hours.",
        "Cook the rice until it's 70% done.",
        "In a separate pot, fry onions until golden brown.",
        "Add marinated meat and cook until tender.",
        "Layer the partially cooked rice over the meat.",
        "Add saffron milk and ghee on top.",
        "Cook on low heat for 20 minutes.",
        "Serve hot with raita.",
      ],
    },
    {
      id: 2,
      name: "Karahi",
      category: "Pakistani",
      image: "/karahi.jpg",
      description: "A spicy curry dish cooked in a wok-like vessel called a karahi.",
      ingredients: [
        "500g chicken or mutton",
        "4 tomatoes, chopped",
        "2 green chilies",
        "2 tbsp ginger-garlic paste",
        "Karahi masala",
        "Oil",
        "Fresh coriander",
      ],
      instructions: [
        "Heat oil in a karahi or wok.",
        "Add meat and cook until browned.",
        "Add ginger-garlic paste and cook for 2 minutes.",
        "Add chopped tomatoes and spices.",
        "Cook until the meat is tender and oil separates.",
        "Garnish with green chilies and coriander.",
        "Serve hot with naan bread.",
      ],
    },
    {
      id: 3,
      name: "Qorma",
      category: "Pakistani",
      image: "/qorma.jpg",
      description: "A rich, creamy curry made with yogurt, nuts, and spices.",
      ingredients: [
        "500g chicken or lamb",
        "1 cup yogurt",
        "1/2 cup fried onions",
        "2 tbsp ginger-garlic paste",
        "Qorma spice mix",
        "1/4 cup almonds and cashews",
        "Oil and ghee",
      ],
      instructions: [
        "Heat oil and fry the meat until browned.",
        "Add ginger-garlic paste and cook for 2 minutes.",
        "Add fried onions and spices.",
        "Stir in yogurt and cook on low heat.",
        "Add ground nuts to thicken the gravy.",
        "Simmer until the meat is tender.",
        "Garnish with more fried onions.",
        "Serve with naan or rice.",
      ],
    },
    {
      id: 4,
      name: "Chinese Pasta",
      category: "Chinese",
      image: "/pasta.jpg",
      description: "A delicious fusion of Italian pasta and Chinese flavors.",
      ingredients: [
        "250g spaghetti or linguine",
        "200g chicken breast, sliced",
        "1 red bell pepper, sliced",
        "1 cup sliced mushrooms",
        "2 cloves garlic, minced",
        "2 tbsp soy sauce",
        "1 tbsp oyster sauce",
        "1 tsp sesame oil",
        "2 tbsp vegetable oil",
        "Green onions for garnish",
      ],
      instructions: [
        "Cook pasta according to package instructions.",
        "Heat vegetable oil in a wok or large skillet.",
        "Add garlic and stir-fry for 30 seconds.",
        "Add chicken and cook until no longer pink.",
        "Add bell pepper and mushrooms, stir-fry for 2-3 minutes.",
        "Add cooked pasta to the wok.",
        "Stir in soy sauce, oyster sauce, and sesame oil.",
        "Toss everything together until well combined.",
        "Garnish with green onions and serve hot.",
      ],
    },
    {
      id: 5,
      name: "Chow Mein",
      category: "Chinese",
      image: "/chowmein.jpg",
      description: "A classic Chinese stir-fried noodle dish with vegetables and protein.",
      ingredients: [
        "200g egg noodles",
        "200g mixed vegetables (carrots, cabbage, bean sprouts)",
        "150g chicken or shrimp",
        "2 cloves garlic, minced",
        "1 tbsp ginger, minced",
        "3 tbsp soy sauce",
        "1 tbsp oyster sauce",
        "2 tbsp vegetable oil",
        "Sesame oil for finishing",
      ],
      instructions: [
        "Cook noodles according to package instructions, then drain and set aside.",
        "Heat oil in a wok or large skillet over high heat.",
        "Add garlic and ginger, stir-fry for 30 seconds.",
        "Add chicken or shrimp and cook until done.",
        "Add mixed vegetables and stir-fry for 2-3 minutes.",
        "Add cooked noodles to the wok.",
        "Pour in soy sauce and oyster sauce, toss everything together.",
        "Stir-fry for another 2-3 minutes until everything is well combined.",
        "Drizzle with sesame oil before serving.",
      ],
    },
    {
      id: 6,
      name: "Chinese Fried Rice",
      category: "Chinese",
      image: "/friedrice.jpg",
      description: "A flavorful rice dish with vegetables, eggs, and your choice of protein.",
      ingredients: [
        "3 cups cooked rice (preferably day-old)",
        "2 eggs, beaten",
        "1 cup mixed vegetables (peas, carrots, corn)",
        "150g diced chicken, shrimp, or tofu",
        "2 cloves garlic, minced",
        "3 tbsp soy sauce",
        "1 tbsp oyster sauce",
        "2 tbsp vegetable oil",
        "Green onions for garnish",
      ],
      instructions: [
        "Heat oil in a wok or large skillet over medium-high heat.",
        "Add beaten eggs and scramble until cooked.",
        "Remove eggs and set aside.",
        "In the same wok, add more oil if needed.",
        "Stir-fry garlic for 30 seconds.",
        "Add diced protein and cook until done.",
        "Add mixed vegetables and stir-fry for 2-3 minutes.",
        "Add cooked rice and break up any clumps.",
        "Pour in soy sauce and oyster sauce, toss everything together.",
        "Add scrambled eggs back to the wok and mix well.",
        "Stir-fry for another 2-3 minutes until everything is heated through.",
        "Garnish with green onions and serve hot.",
      ],
    },
    {
      id: 7,
      name: "Gulab Jamun",
      category: "Dessert",
      image: "/gulabjamun.jpg",
      description: "Deep-fried milk solids soaked in sugar syrup.",
      ingredients: [
        "1 cup milk powder",
        "1/4 cup all-purpose flour",
        "1/4 tsp baking soda",
        "2 tbsp ghee",
        "Milk for kneading",
        "1 cup sugar",
        "1 cup water",
        "Cardamom pods",
        "Rose water",
        "Oil for deep frying",
      ],
      instructions: [
        "Mix milk powder, flour, and baking soda.",
        "Add ghee and knead into a soft dough using milk.",
        "Shape the dough into small balls.",
        "Heat oil and fry the balls until golden brown.",
        "For the syrup, boil sugar and water with cardamom pods.",
        "Add rose water to the syrup.",
        "Soak the fried balls in the warm syrup for 1-2 hours.",
        "Serve warm or at room temperature.",
      ],
    },
    {
      id: 8,
      name: "Rasmalai",
      category: "Dessert",
      image: "/rasmalai.jpg",
      description: "A popular South Asian dessert made of soft paneer balls soaked in sweet, cardamom-flavored milk.",
      ingredients: [
        "1 liter full-fat milk (for paneer)",
        "2 tbsp lemon juice or vinegar",
        "1 liter full-fat milk (for rabri)",
        "1/2 cup sugar",
        "1/4 tsp cardamom powder",
        "A few saffron strands",
        "2 tbsp chopped nuts (almonds, pistachios)",
        "1/2 tsp rose water (optional)"
      ],
      instructions: [
        "Boil 1 liter of milk and add lemon juice or vinegar to curdle it.",
        "Strain through a muslin cloth, rinse with cold water, and squeeze out excess water.",
        "Knead the paneer until smooth and divide into small balls.",
        "In a deep pan, boil water with sugar and gently drop in the paneer balls.",
        "Cover and cook for 10-15 minutes until they expand in size.",
        "In another pan, boil 1 liter of milk until it reduces to half.",
        "Add sugar, cardamom powder, saffron, and chopped nuts.",
        "Squeeze out the excess syrup from the paneer balls and add them to the milk.",
        "Simmer for a few minutes and let it absorb the flavors.",
        "Chill for a few hours before serving."
      ]
    },
    
    {
      id: 9,
      name: "Chocolate Lava Cake",
      category: "Dessert",
      image: "/lavacake.jpg",
      description: "A rich chocolate cake with a gooey molten chocolate center.",
      ingredients: [
        "113g dark chocolate",
        "113g unsalted butter",
        "2 eggs",
        "2 egg yolks",
        "1/4 cup sugar",
        "2 tbsp all-purpose flour",
        "Pinch of salt",
        "Butter and cocoa powder for ramekins",
      ],
      instructions: [
        "Preheat oven to 425°F (220°C).",
        "Butter and cocoa powder 4 ramekins.",
        "Melt chocolate and butter in a double boiler.",
        "In a separate bowl, beat eggs, egg yolks, and sugar until light and fluffy.",
        "Fold the chocolate mixture into the egg mixture.",
        "Gently fold in flour and salt.",
        "Pour the batter into the prepared ramekins.",
        "Bake for 12-14 minutes until the edges are set but the center is still jiggly.",
        "Let cool for 1 minute, then invert onto plates.",
        "Serve immediately with vanilla ice cream or whipped cream.",
      ],
    },
  ]
  
  