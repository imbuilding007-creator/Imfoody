import { recipes } from '../data/recipes';

// Helper to check if a recipe can be made with user's selected ingredients
const canMakeRecipe = (recipe, selectedIngredients) => {
  // If user has no ingredients selected, allow everything for demo
  if (!selectedIngredients || selectedIngredients.length === 0) return true;

  // For this prototype, we'll do a simple match: if at least 50% of the core ingredients match, allow it.
  const coreIngredients = recipe.ingredients.map(i => i.name.split(' (')[0].trim().toLowerCase());
  
  let matchCount = 0;
  for (let i of coreIngredients) {
    if (selectedIngredients.includes(i) || 
        ['salt', 'water', 'oil', 'oil/ghee', 'mustard seeds', 'turmeric powder'].includes(i)) {
      matchCount++;
    }
  }
  
  return (matchCount / coreIngredients.length) >= 0.5; // at least 50% match
};

export const generateMealPlan = (selectedIngredients, preferences) => {
  const plan = [];
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const mealTypes = ['Breakfast', 'Lunch', 'Dinner'];
  
  // Track usage for constraints
  const recipeUsageCount = {};
  const lastServedIndex = {};

  // Filter recipes based on ingredients and preferences
  let availableRecipes = recipes;
  if (selectedIngredients && selectedIngredients.length > 0) {
     availableRecipes = availableRecipes.filter(r => canMakeRecipe(r, selectedIngredients));
  }

  // Filter by diet
  if (preferences?.diet === 'Vegetarian') {
    availableRecipes = availableRecipes.filter(r => !r.tags.includes('Non-Vegetarian'));
  } else if (preferences?.diet === 'Vegan') {
    availableRecipes = availableRecipes.filter(r => r.tags.includes('Vegan'));
  }

  // If we filtered down to zero, fallback to all
  if (availableRecipes.length === 0) {
    availableRecipes = recipes;
  }

  let totalMealIndex = 0;

  for (let d = 0; d < 7; d++) {
    const dailyPlan = { day: days[d], meals: {} };

    for (let m = 0; m < mealTypes.length; m++) {
      const type = mealTypes[m];
      
      let candidates = availableRecipes.filter(r => r.mealType.includes(type));
      
      // Apply constraints
      candidates = candidates.filter(r => {
        const count = recipeUsageCount[r.id] || 0;
        // No dish should be repeated in a week (max 1 occurrence)
        if (count >= 1) return false; 
        
        const lastIndex = lastServedIndex[r.id];
        if (lastIndex !== undefined) {
          const mealsApart = totalMealIndex - lastIndex;
          // Difference between the meal would be 6
          if (mealsApart < 6) return false; 
        }
        return true;
      });

      // If strict constraints fail, relax them (fallback)
      if (candidates.length === 0) {
        candidates = availableRecipes.filter(r => r.mealType.includes(type));
        // Fallback: at least try to prevent immediate back-to-back repeats
        candidates = candidates.filter(r => {
          const lastIndex = lastServedIndex[r.id];
          return lastIndex === undefined || (totalMealIndex - lastIndex > 2);
        });
        // Ultimate fallback
        if (candidates.length === 0) {
          candidates = availableRecipes.filter(r => r.mealType.includes(type));
        }
      }

      // Pick random
      const selected = candidates[Math.floor(Math.random() * candidates.length)];
      
      dailyPlan.meals[type] = selected;
      
      if (selected) {
        recipeUsageCount[selected.id] = (recipeUsageCount[selected.id] || 0) + 1;
        lastServedIndex[selected.id] = totalMealIndex;
      }
      totalMealIndex++;
    }
    plan.push(dailyPlan);
  }

  return plan;
};

export const generateShoppingList = (mealPlan, selectedIngredients) => {
  const list = {};
  const selectedLower = (selectedIngredients || []).map(i => i.toLowerCase());
  
  mealPlan.forEach(day => {
    Object.values(day.meals).forEach(recipe => {
      if (!recipe) return;
      recipe.ingredients.forEach(ing => {
        const name = ing.name.split(' (')[0].trim().toLowerCase();
        // Ignore pantry staples or already selected items
        if (selectedLower.includes(name) || ['salt', 'water', 'oil', 'oil/ghee'].includes(name)) return;
        
        if (list[ing.name]) {
          list[ing.name].count += 1;
        } else {
          list[ing.name] = { name: ing.name, quantity: ing.quantity, count: 1 };
        }
      });
    });
  });

  return Object.values(list);
};
