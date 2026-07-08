export const recipes = [
  {
    id: "r1",
    name: "Poha",
    youtubeId: "hL-BnQF_gmI",
    mealType: ["Breakfast"],
    prepTime: "15 mins",
    difficulty: "Easy",
    ingredients: [
      { name: "Poha (Flattened Rice)", quantity: "1 cup" },
      { name: "Onion", quantity: "1 medium, chopped" },
      { name: "Potato", quantity: "1 small, cubed" },
      { name: "Peanuts", quantity: "2 tbsp" },
      { name: "Mustard Seeds", quantity: "1 tsp" },
      { name: "Curry Leaves", quantity: "8-10" },
      { name: "Turmeric Powder", quantity: "1/2 tsp" },
      { name: "Green Chili", quantity: "1, chopped" },
      { name: "Oil", quantity: "1 tbsp" },
      { name: "Salt", quantity: "to taste" }
    ],
    instructions: [
      "Wash poha gently and drain water. Let it sit to soften.",
      "Heat oil in a pan, add mustard seeds and let them splutter.",
      "Add peanuts and roast until crunchy.",
      "Add curry leaves, green chili, and onions. Sauté until onions are translucent.",
      "Add potatoes, turmeric, and salt. Cover and cook until potatoes are soft.",
      "Mix in the softened poha. Cook for 2-3 minutes on low heat.",
      "Garnish with coriander leaves and serve warm."
    ],
    nutrition: { calories: 250, protein: "5g", carbs: "45g", fats: "8g", fiber: "3g" },
    servingSize: 2,
    tags: ["Vegetarian", "Gluten-Free", "Maharashtrian"]
  },
  {
    id: "r2",
    name: "Masala Oats",
    youtubeId: "9UXs1OQXkYc",
    mealType: ["Breakfast"],
    prepTime: "10 mins",
    difficulty: "Easy",
    ingredients: [
      { name: "Rolled Oats", quantity: "1/2 cup" },
      { name: "Mixed Vegetables (Carrot, Peas, Beans)", quantity: "1/2 cup, chopped" },
      { name: "Onion", quantity: "1 small, chopped" },
      { name: "Tomato", quantity: "1 small, chopped" },
      { name: "Turmeric Powder", quantity: "1/4 tsp" },
      { name: "Garam Masala", quantity: "1/2 tsp" },
      { name: "Oil", quantity: "1 tsp" },
      { name: "Salt", quantity: "to taste" }
    ],
    instructions: [
      "Heat oil in a pan, sauté onions until soft.",
      "Add tomatoes and cook until mushy.",
      "Add chopped mixed vegetables, turmeric, salt, and garam masala. Sauté for a minute.",
      "Add oats and 1.5 cups of water. Bring to a boil.",
      "Simmer for 5-7 minutes until oats are cooked and mixture is thick.",
      "Serve hot."
    ],
    nutrition: { calories: 200, protein: "7g", carbs: "35g", fats: "4g", fiber: "6g" },
    servingSize: 1,
    tags: ["Vegetarian", "High-Fiber"]
  },
  {
    id: "r3",
    name: "Besan Chilla",
    youtubeId: "rOOUv_0EbLw",
    mealType: ["Breakfast", "Lunch"],
    prepTime: "15 mins",
    difficulty: "Easy",
    ingredients: [
      { name: "Gram Flour (Besan)", quantity: "1 cup" },
      { name: "Onion", quantity: "1 small, finely chopped" },
      { name: "Tomato", quantity: "1 small, finely chopped" },
      { name: "Coriander Leaves", quantity: "2 tbsp, chopped" },
      { name: "Ajwain (Carom Seeds)", quantity: "1/2 tsp" },
      { name: "Turmeric Powder", quantity: "1/4 tsp" },
      { name: "Water", quantity: "as needed" },
      { name: "Oil", quantity: "for cooking" },
      { name: "Salt", quantity: "to taste" }
    ],
    instructions: [
      "In a bowl, mix besan, ajwain, turmeric, and salt.",
      "Gradually add water to form a smooth, pourable batter.",
      "Mix in the chopped onions, tomatoes, and coriander leaves.",
      "Heat a tawa (griddle) and lightly grease it with oil.",
      "Pour a ladle of batter and spread it into a thin circle.",
      "Cook until the edges lift and the bottom is golden brown. Flip and cook the other side.",
      "Serve hot with green chutney."
    ],
    nutrition: { calories: 180, protein: "8g", carbs: "25g", fats: "6g", fiber: "5g" },
    servingSize: 2,
    tags: ["Vegetarian", "High-Protein", "Gluten-Free"]
  },
  {
    id: "r4",
    name: "Dal Tadka & Rice",
    mealType: ["Lunch", "Dinner"],
    prepTime: "30 mins",
    difficulty: "Medium",
    ingredients: [
      { name: "Toor Dal (Pigeon Peas)", quantity: "1/2 cup" },
      { name: "Rice", quantity: "1 cup" },
      { name: "Tomato", quantity: "1, chopped" },
      { name: "Onion", quantity: "1, chopped" },
      { name: "Garlic", quantity: "3 cloves, minced" },
      { name: "Cumin Seeds", quantity: "1 tsp" },
      { name: "Mustard Seeds", quantity: "1/2 tsp" },
      { name: "Turmeric Powder", quantity: "1/2 tsp" },
      { name: "Red Chili Powder", quantity: "1/2 tsp" },
      { name: "Ghee", quantity: "1 tbsp" },
      { name: "Salt", quantity: "to taste" }
    ],
    instructions: [
      "Wash and cook rice in a pressure cooker or pot.",
      "Wash toor dal and pressure cook with turmeric, salt, and water until soft.",
      "Mash the cooked dal.",
      "For tadka: Heat ghee in a small pan, add mustard and cumin seeds.",
      "Add minced garlic and onions, sauté until golden.",
      "Add tomatoes and red chili powder, cook until soft.",
      "Pour tadka over the cooked dal and simmer for 2 minutes.",
      "Serve dal hot with steamed rice."
    ],
    nutrition: { calories: 350, protein: "12g", carbs: "60g", fats: "8g", fiber: "8g" },
    servingSize: 2,
    tags: ["Vegetarian", "North Indian", "Comfort Food"]
  },
  {
    id: "r5",
    name: "Paneer Butter Masala",
    youtubeId: "a30BLUQiFoc",
    mealType: ["Lunch", "Dinner"],
    prepTime: "40 mins",
    difficulty: "Medium",
    ingredients: [
      { name: "Paneer", quantity: "200g, cubed" },
      { name: "Onion", quantity: "2 medium, roughly chopped" },
      { name: "Tomato", quantity: "3 large, roughly chopped" },
      { name: "Cashews", quantity: "10-12" },
      { name: "Ginger Garlic Paste", quantity: "1 tbsp" },
      { name: "Garam Masala", quantity: "1 tsp" },
      { name: "Kashmiri Red Chili Powder", quantity: "1 tsp" },
      { name: "Kasuri Methi (Dried Fenugreek Leaves)", quantity: "1 tsp" },
      { name: "Butter", quantity: "2 tbsp" },
      { name: "Fresh Cream", quantity: "2 tbsp" },
      { name: "Salt", quantity: "to taste" }
    ],
    instructions: [
      "Boil onions, tomatoes, and cashews in a little water for 10 mins. Let cool and blend into a smooth paste.",
      "Heat butter in a pan, add ginger garlic paste and sauté for a minute.",
      "Add the blended paste, chili powder, and salt. Cook until butter separates.",
      "Add garam masala and crushed kasuri methi.",
      "Add paneer cubes and simmer for 5 minutes.",
      "Stir in fresh cream and turn off the heat.",
      "Serve with naan or roti."
    ],
    nutrition: { calories: 450, protein: "18g", carbs: "20g", fats: "35g", fiber: "4g" },
    servingSize: 3,
    tags: ["Vegetarian", "North Indian", "Rich"]
  },
  {
    id: "r6",
    name: "Mix Veg Curry",
    youtubeId: "5zMffFdMo78",
    mealType: ["Lunch", "Dinner"],
    prepTime: "30 mins",
    difficulty: "Easy",
    ingredients: [
      { name: "Mixed Vegetables (Carrot, Beans, Cauliflower, Potato)", quantity: "2 cups, chopped" },
      { name: "Onion", quantity: "1, chopped" },
      { name: "Tomato", quantity: "2, pureed" },
      { name: "Ginger Garlic Paste", quantity: "1 tsp" },
      { name: "Turmeric Powder", quantity: "1/2 tsp" },
      { name: "Coriander Powder", quantity: "1 tsp" },
      { name: "Garam Masala", quantity: "1/2 tsp" },
      { name: "Oil", quantity: "1 tbsp" },
      { name: "Salt", quantity: "to taste" }
    ],
    instructions: [
      "Steam or boil the mixed vegetables until slightly tender.",
      "Heat oil in a pan, sauté onions until golden brown.",
      "Add ginger garlic paste and cook for 1 minute.",
      "Add tomato puree and cook until oil separates.",
      "Add turmeric, coriander powder, and salt. Mix well.",
      "Add the boiled vegetables and a little water. Simmer for 5-7 minutes.",
      "Sprinkle garam masala and serve with roti."
    ],
    nutrition: { calories: 150, protein: "4g", carbs: "25g", fats: "5g", fiber: "7g" },
    servingSize: 2,
    tags: ["Vegetarian", "Healthy"]
  },
  {
    id: "r7",
    name: "Egg Curry & Roti",
    mealType: ["Lunch", "Dinner"],
    prepTime: "30 mins",
    difficulty: "Medium",
    ingredients: [
      { name: "Eggs", quantity: "4, hard-boiled" },
      { name: "Onion", quantity: "2, finely chopped" },
      { name: "Tomato", quantity: "2, chopped" },
      { name: "Ginger Garlic Paste", quantity: "1 tbsp" },
      { name: "Cumin Seeds", quantity: "1 tsp" },
      { name: "Turmeric Powder", quantity: "1/2 tsp" },
      { name: "Red Chili Powder", quantity: "1 tsp" },
      { name: "Coriander Powder", quantity: "1 tbsp" },
      { name: "Garam Masala", quantity: "1/2 tsp" },
      { name: "Oil", quantity: "2 tbsp" },
      { name: "Salt", quantity: "to taste" },
      { name: "Wheat Flour", quantity: "1 cup (for Roti)" }
    ],
    instructions: [
      "Knead wheat flour into a soft dough. Make rotis.",
      "Make small slits on the boiled eggs. Shallow fry them in a little oil until golden.",
      "In the same pan, add remaining oil and cumin seeds.",
      "Add onions and sauté until golden brown. Add ginger garlic paste.",
      "Add tomatoes, turmeric, chili powder, coriander powder, and salt. Cook until oil separates.",
      "Add water for gravy and bring to a boil.",
      "Add the fried eggs and simmer for 5-10 minutes.",
      "Sprinkle garam masala and serve with rotis."
    ],
    nutrition: { calories: 380, protein: "18g", carbs: "40g", fats: "15g", fiber: "5g" },
    servingSize: 2,
    tags: ["High-Protein", "Non-Vegetarian"]
  },
  {
    id: "r8",
    name: "Chicken Curry",
    youtubeId: "3A8IOEHyFtY",
    mealType: ["Lunch", "Dinner"],
    prepTime: "45 mins",
    difficulty: "Medium",
    ingredients: [
      { name: "Chicken", quantity: "500g, curry cut" },
      { name: "Onion", quantity: "2 large, sliced" },
      { name: "Tomato", quantity: "2 medium, chopped" },
      { name: "Ginger Garlic Paste", quantity: "2 tbsp" },
      { name: "Chicken Masala", quantity: "2 tbsp" },
      { name: "Turmeric Powder", quantity: "1/2 tsp" },
      { name: "Coriander Powder", quantity: "1 tbsp" },
      { name: "Oil", quantity: "3 tbsp" },
      { name: "Whole Spices (Cardamom, Cinnamon, Cloves)", quantity: "few" },
      { name: "Salt", quantity: "to taste" }
    ],
    instructions: [
      "Heat oil in a pot, add whole spices and let them crackle.",
      "Add sliced onions and fry until deeply golden brown.",
      "Add ginger garlic paste and sauté until raw smell disappears.",
      "Add tomatoes and dry spices (turmeric, coriander powder, chicken masala, salt). Cook until oil separates.",
      "Add chicken pieces and roast them in the masala for 10 minutes on medium heat.",
      "Add warm water for gravy, cover and simmer for 20 minutes until chicken is tender.",
      "Serve hot with rice or roti."
    ],
    nutrition: { calories: 420, protein: "35g", carbs: "12g", fats: "25g", fiber: "3g" },
    servingSize: 3,
    tags: ["High-Protein", "Non-Vegetarian", "Punjabi"]
  },
  {
    id: "r9",
    name: "Rajma Chawal",
    youtubeId: "CcJazpU9seo",
    mealType: ["Lunch", "Dinner"],
    prepTime: "45 mins",
    difficulty: "Medium",
    ingredients: [
      { name: "Rajma (Kidney Beans)", quantity: "1 cup, soaked overnight" },
      { name: "Rice", quantity: "1 cup" },
      { name: "Onion", quantity: "2, finely chopped" },
      { name: "Tomato", quantity: "3, pureed" },
      { name: "Ginger Garlic Paste", quantity: "1 tbsp" },
      { name: "Rajma Masala", quantity: "1.5 tbsp" },
      { name: "Cumin Seeds", quantity: "1 tsp" },
      { name: "Oil/Ghee", quantity: "2 tbsp" },
      { name: "Salt", quantity: "to taste" }
    ],
    instructions: [
      "Cook rice and set aside.",
      "Pressure cook soaked rajma with water and salt until soft (about 4-5 whistles).",
      "In a pan, heat oil, add cumin seeds.",
      "Add onions and sauté until brown. Add ginger garlic paste.",
      "Add tomato puree and rajma masala. Cook until oil separates.",
      "Add the boiled rajma along with its water to the masala.",
      "Simmer for 15-20 minutes on low heat until the gravy thickens.",
      "Serve hot with rice."
    ],
    nutrition: { calories: 400, protein: "15g", carbs: "70g", fats: "6g", fiber: "14g" },
    servingSize: 3,
    tags: ["Vegetarian", "High-Protein", "Punjabi", "Comfort Food"]
  },
  {
    id: "r10",
    name: "Upma",
    youtubeId: "g6C_Y3nTPZs",
    mealType: ["Breakfast"],
    prepTime: "20 mins",
    difficulty: "Easy",
    ingredients: [
      { name: "Semolina (Rava/Sooji)", quantity: "1 cup" },
      { name: "Onion", quantity: "1 small, chopped" },
      { name: "Green Chili", quantity: "2, slit" },
      { name: "Mustard Seeds", quantity: "1 tsp" },
      { name: "Urad Dal", quantity: "1 tsp" },
      { name: "Curry Leaves", quantity: "8-10" },
      { name: "Mixed Veg (Carrot, Peas)", quantity: "1/4 cup, optional" },
      { name: "Oil", quantity: "2 tbsp" },
      { name: "Salt", quantity: "to taste" },
      { name: "Water", quantity: "2.5 cups" }
    ],
    instructions: [
      "Dry roast the semolina in a pan until lightly golden and aromatic. Set aside.",
      "In the same pan, heat oil. Add mustard seeds, urad dal, and curry leaves.",
      "Add onions and green chilies. Sauté until onions are translucent.",
      "If using vegetables, add them now and sauté for a minute.",
      "Pour water and add salt. Bring it to a rolling boil.",
      "Lower the heat and slowly pour in the roasted semolina, stirring continuously to avoid lumps.",
      "Cover and cook for 2-3 minutes until the water is absorbed.",
      "Serve warm."
    ],
    nutrition: { calories: 280, protein: "7g", carbs: "48g", fats: "8g", fiber: "3g" },
    servingSize: 2,
    tags: ["Vegetarian", "South Indian"]
  },
  {
    id: "r11",
    name: "Aloo Gobi",
    youtubeId: "w38kkbGHtn0",
    mealType: ["Lunch", "Dinner"],
    prepTime: "30 mins",
    difficulty: "Easy",
    ingredients: [
      { name: "Potato", quantity: "2 medium, cubed" },
      { name: "Cauliflower", quantity: "1 small head, cut into florets" },
      { name: "Onion", quantity: "1, finely chopped" },
      { name: "Tomato", quantity: "1, chopped" },
      { name: "Ginger", quantity: "1 inch, grated" },
      { name: "Turmeric Powder", quantity: "1/2 tsp" },
      { name: "Coriander Powder", quantity: "1 tsp" },
      { name: "Garam Masala", quantity: "1/2 tsp" },
      { name: "Oil", quantity: "2 tbsp" },
      { name: "Salt", quantity: "to taste" }
    ],
    instructions: [
      "Heat oil in a pan. Add cumin seeds (optional).",
      "Add onions and ginger, sauté until onions are soft.",
      "Add potatoes and cauliflower florets. Sauté for 5 minutes.",
      "Add turmeric, coriander powder, and salt. Mix well.",
      "Cover and cook on low heat until vegetables are almost tender.",
      "Add tomatoes and cook for another 5 minutes.",
      "Sprinkle garam masala and garnish with coriander.",
      "Serve with roti or paratha."
    ],
    nutrition: { calories: 220, protein: "5g", carbs: "30g", fats: "10g", fiber: "7g" },
    servingSize: 2,
    tags: ["Vegetarian", "Vegan", "North Indian"]
  },
  {
    id: "r12",
    name: "Idli Sambar",
    youtubeId: "C_HqlzkWHo0",
    mealType: ["Breakfast", "Lunch", "Dinner"],
    prepTime: "40 mins",
    difficulty: "Medium",
    ingredients: [
      { name: "Idli Batter", quantity: "3 cups (store-bought or homemade)" },
      { name: "Toor Dal (Pigeon Peas)", quantity: "1/2 cup" },
      { name: "Sambar Powder", quantity: "2 tbsp" },
      { name: "Tamarind Extract", quantity: "1 tbsp" },
      { name: "Mixed Veg (Drumstick, Carrot, Pumpkin)", quantity: "1 cup, chopped" },
      { name: "Tomato", quantity: "1, chopped" },
      { name: "Mustard Seeds", quantity: "1 tsp" },
      { name: "Curry Leaves", quantity: "few" },
      { name: "Oil", quantity: "1 tbsp" },
      { name: "Salt", quantity: "to taste" }
    ],
    instructions: [
      "Steam the idli batter in idli molds for 10-12 minutes. Set aside.",
      "Pressure cook the toor dal with water and a pinch of turmeric until soft. Mash well.",
      "In a pot, boil the vegetables with tomato, sambar powder, and salt until tender.",
      "Add the tamarind extract and mashed dal to the vegetables. Boil for 5-7 minutes.",
      "For tempering, heat oil, add mustard seeds and curry leaves. Pour over the sambar.",
      "Serve hot idlis with sambar."
    ],
    nutrition: { calories: 300, protein: "10g", carbs: "55g", fats: "4g", fiber: "8g" },
    servingSize: 2,
    tags: ["Vegetarian", "South Indian", "Healthy"]
  },
  {
    id: "r13",
    name: "Chole Bhature",
    youtubeId: "CcJazpU9seo",
    mealType: ["Lunch", "Dinner"],
    prepTime: "60 mins",
    difficulty: "Hard",
    ingredients: [
      { name: "Chickpeas (Chole)", quantity: "1 cup, soaked overnight" },
      { name: "Onion", quantity: "2, finely chopped" },
      { name: "Tomato", quantity: "2, pureed" },
      { name: "Chole Masala", quantity: "2 tbsp" },
      { name: "Tea bag", quantity: "1 (for color)" },
      { name: "Maida (All Purpose Flour)", quantity: "2 cups" },
      { name: "Yogurt", quantity: "2 tbsp" },
      { name: "Baking Soda", quantity: "1/4 tsp" },
      { name: "Oil", quantity: "for frying" },
      { name: "Salt", quantity: "to taste" }
    ],
    instructions: [
      "Knead maida, yogurt, baking soda, salt, and water into a soft dough. Let it rest for 2 hours.",
      "Pressure cook chickpeas with the tea bag and salt until soft.",
      "In a pan, heat oil, sauté onions until brown. Add tomato puree and cook.",
      "Add chole masala and the boiled chickpeas. Simmer for 15 mins.",
      "For Bhature: Divide dough into balls. Roll them into ovals.",
      "Deep fry in hot oil until they puff up and turn golden.",
      "Serve hot Chole with Bhature."
    ],
    nutrition: { calories: 600, protein: "15g", carbs: "80g", fats: "25g", fiber: "10g" },
    servingSize: 2,
    tags: ["Vegetarian", "Punjabi", "Indulgent"]
  },
  {
    id: "r14",
    name: "Moong Dal Khichdi",
    youtubeId: "SYWtizV5oCI",
    mealType: ["Lunch", "Dinner"],
    prepTime: "30 mins",
    difficulty: "Easy",
    ingredients: [
      { name: "Rice", quantity: "1/2 cup" },
      { name: "Yellow Moong Dal", quantity: "1/2 cup" },
      { name: "Ghee", quantity: "1 tbsp" },
      { name: "Cumin Seeds", quantity: "1 tsp" },
      { name: "Asafoetida (Hing)", quantity: "A pinch" },
      { name: "Turmeric Powder", quantity: "1/2 tsp" },
      { name: "Mixed Veg (Carrot, Peas)", quantity: "1/2 cup" },
      { name: "Salt", quantity: "to taste" }
    ],
    instructions: [
      "Wash and soak rice and dal together for 15 mins.",
      "In a pressure cooker, heat ghee. Add cumin seeds and hing.",
      "Add mixed vegetables and sauté for a minute.",
      "Add drained rice and dal, turmeric, and salt.",
      "Add 3.5 cups of water. Pressure cook for 4 whistles until mushy.",
      "Serve hot with a dollop of ghee and pickle."
    ],
    nutrition: { calories: 280, protein: "10g", carbs: "45g", fats: "6g", fiber: "5g" },
    servingSize: 2,
    tags: ["Vegetarian", "Healthy", "Comfort Food", "Gluten-Free"]
  },
  {
    id: "r15",
    name: "Palak Paneer",
    youtubeId: "iRG6GSn8xOo",
    mealType: ["Lunch", "Dinner"],
    prepTime: "35 mins",
    difficulty: "Medium",
    ingredients: [
      { name: "Spinach (Palak)", quantity: "2 bunches (about 4 cups)" },
      { name: "Paneer", quantity: "200g, cubed" },
      { name: "Onion", quantity: "1, finely chopped" },
      { name: "Tomato", quantity: "1, chopped" },
      { name: "Ginger Garlic Paste", quantity: "1 tbsp" },
      { name: "Green Chili", quantity: "1-2" },
      { name: "Garam Masala", quantity: "1/2 tsp" },
      { name: "Cumin Powder", quantity: "1/2 tsp" },
      { name: "Fresh Cream", quantity: "2 tbsp" },
      { name: "Oil/Ghee", quantity: "2 tbsp" },
      { name: "Salt", quantity: "to taste" }
    ],
    instructions: [
      "Blanch spinach leaves in boiling water for 2 mins, then transfer to ice water. Puree with green chilies.",
      "Heat oil in a pan, sauté onions until golden.",
      "Add ginger garlic paste and tomatoes. Cook until soft.",
      "Add cumin powder, garam masala, and salt.",
      "Add the spinach puree and simmer for 5 minutes.",
      "Add paneer cubes and simmer for another 3 minutes.",
      "Stir in fresh cream and serve with roti or naan."
    ],
    nutrition: { calories: 320, protein: "16g", carbs: "12g", fats: "24g", fiber: "4g" },
    servingSize: 3,
    tags: ["Vegetarian", "North Indian", "High-Iron"]
  }
];

// Helper to extract unique core ingredient names for the onboarding UI
export const extractCategories = () => {
  return {
    "Vegetables": ["Leafy Greens", "Root Vegetables", "Gourds", "Cruciferous Vegetables", "Beans & Peas", "Nightshade Vegetables", "Mushrooms", "Other Vegetables"],
    "🫘 Pulses & Lentils": ["Lentils (Dal)", "Beans", "Chickpeas", "Peas", "Soybeans"],
    "🌾 Grains & Cereals": ["Rice", "Wheat", "Millets", "Oats", "Corn (Maize)", "Barley", "Quinoa"],
    "🍞 Flour & Bread": ["Wheat Flour", "Rice Flour", "Besan (Gram Flour)", "Maida", "Semolina (Sooji)", "Bread", "Traditional Indian Breads"],
    "🥛 Dairy": ["Milk", "Curd/Yogurt", "Paneer", "Cheese", "Butter", "Ghee", "Cream", "Buttermilk"],
    "🍗 Protein Sources": ["Paneer", "Tofu", "Soya Products", "Eggs", "Chicken", "Fish", "Seafood", "Mutton/Lamb"],
    "🥜 Nuts & Seeds": ["Nuts", "Seeds", "Peanuts"],
    "🌿 Herbs": ["Coriander", "Mint", "Curry Leaves", "Basil", "Dill", "Other Fresh Herbs"],
    "🧄 Aromatics": ["Onion", "Garlic", "Ginger", "Green Chillies", "Dry Red Chillies"],
    "🧂 Spices & Seasonings": ["Whole Spices", "Ground Spices", "Spice Blends (Masalas)", "Salt & Pepper"],
    "🛢️ Oils & Fats": ["Vegetable Oils", "Mustard Oil", "Coconut Oil", "Olive Oil", "Sesame Oil", "Ghee", "Butter"],
    "🍋 Fruits": ["Citrus Fruits", "Tropical Fruits", "Berries", "Apples & Pears", "Bananas", "Coconut"],
    "🥫 Pantry Essentials": ["Sugar", "Jaggery", "Honey", "Tamarind", "Coconut Milk", "Pickles", "Sauces & Chutneys", "Vinegar"],
    "🍝 Ready-to-Cook & Staples": ["Poha", "Vermicelli", "Sabudana", "Makhana", "Pasta", "Noodles", "Idli/Dosa Batter"],
    "🍄 Fermented Foods": ["Idli Batter", "Dosa Batter", "Appam Batter", "Pickles"]
  };
};

export const ingredientEmojis = {
  // Vegetables
  "Leafy Greens": "🥬", "Root Vegetables": "🥕", "Gourds": "🥒", "Cruciferous Vegetables": "🥦", "Beans & Peas": "🫛", "Nightshade Vegetables": "🍆", "Mushrooms": "🍄", "Other Vegetables": "🥗",
  // Pulses
  "Lentils (Dal)": "🫘", "Beans": "🫘", "Chickpeas": "🧆", "Peas": "🫛", "Soybeans": "🫘",
  // Grains
  "Rice": "🍚", "Wheat": "🌾", "Millets": "🌾", "Oats": "🥣", "Corn (Maize)": "🌽", "Barley": "🌾", "Quinoa": "🍚",
  // Flour
  "Wheat Flour": "🌾", "Rice Flour": "🍚", "Besan (Gram Flour)": "🥞", "Maida": "🍞", "Semolina (Sooji)": "🥣", "Bread": "🍞", "Traditional Indian Breads": "🫓",
  // Dairy
  "Milk": "🥛", "Curd/Yogurt": "🥣", "Paneer": "🧀", "Cheese": "🧀", "Butter": "🧈", "Ghee": "🧈", "Cream": "🥛", "Buttermilk": "🥛",
  // Protein
  "Tofu": "🧊", "Soya Products": "🧆", "Eggs": "🥚", "Chicken": "🍗", "Fish": "🐟", "Seafood": "🦐", "Mutton/Lamb": "🥩",
  // Nuts
  "Nuts": "🌰", "Seeds": "🌻", "Peanuts": "🥜",
  // Herbs
  "Coriander": "🌿", "Mint": "🌿", "Curry Leaves": "🍃", "Basil": "🌿", "Dill": "🌿", "Other Fresh Herbs": "🌿",
  // Aromatics
  "Onion": "🧅", "Garlic": "🧄", "Ginger": "🫚", "Green Chillies": "🌶️", "Dry Red Chillies": "🌶️",
  // Spices
  "Whole Spices": "🪵", "Ground Spices": "🌶️", "Spice Blends (Masalas)": "🍛", "Salt & Pepper": "🧂",
  // Oils
  "Vegetable Oils": "🛢️", "Mustard Oil": "🛢️", "Coconut Oil": "🥥", "Olive Oil": "🫒", "Sesame Oil": "🛢️",
  // Fruits
  "Citrus Fruits": "🍊", "Tropical Fruits": "🥭", "Berries": "🍓", "Apples & Pears": "🍎", "Bananas": "🍌", "Coconut": "🥥",
  // Pantry
  "Sugar": "🧊", "Jaggery": "🟤", "Honey": "🍯", "Tamarind": "🤎", "Coconut Milk": "🥥", "Pickles": "🥒", "Sauces & Chutneys": "🥣", "Vinegar": "🍾",
  // Staples
  "Poha": "🌾", "Vermicelli": "🍜", "Sabudana": "⚪", "Makhana": "🍿", "Pasta": "🍝", "Noodles": "🍜", "Idli/Dosa Batter": "🥣",
  // Fermented
  "Idli Batter": "🥣", "Dosa Batter": "🥣", "Appam Batter": "🥣"
};

export const categoryColors = {
  "Vegetables": "var(--veg-bg)",
  "🫘 Pulses & Lentils": "var(--pulse-bg)",
  "🌾 Grains & Cereals": "var(--grain-bg)",
  "🍞 Flour & Bread": "var(--grain-bg)",
  "🥛 Dairy": "var(--dairy-bg)",
  "🍗 Protein Sources": "var(--protein-bg)",
  "🥜 Nuts & Seeds": "var(--pantry-bg)",
  "🌿 Herbs": "var(--veg-bg)",
  "🧄 Aromatics": "var(--pantry-bg)",
  "🧂 Spices & Seasonings": "var(--saffron)",
  "🛢️ Oils & Fats": "var(--dairy-bg)",
  "🍋 Fruits": "var(--grain-bg)",
  "🥫 Pantry Essentials": "var(--pantry-bg)",
  "🍝 Ready-to-Cook & Staples": "var(--grain-bg)",
  "🍄 Fermented Foods": "var(--pulse-bg)"
};
