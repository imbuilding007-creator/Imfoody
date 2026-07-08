import React, { useState, useEffect, useMemo } from 'react';
import { RefreshCw, ShoppingCart, Info, Edit3 } from 'lucide-react';
import { generateMealPlan, getShoppingList } from '../utils/planner';
import { recipesDB } from '../data/recipesDB';
import RecipeModal from './RecipeModal';

function MealPlanner({ preferences, onEditPreferences }) {
  const [plan, setPlan] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showShoppingList, setShowShoppingList] = useState(false);

  useEffect(() => {
    if (preferences) {
      const newPlan = generateMealPlan(preferences.ingredients, preferences.diets, recipesDB);
      setPlan(newPlan);
    }
  }, [preferences]);

  const shoppingList = useMemo(() => {
    return getShoppingList(plan, preferences.ingredients);
  }, [plan, preferences.ingredients]);

  const regenerateDay = (dayIndex) => {
    // Basic regeneration - recalculate whole plan for simplicity in MVP
    const newPlan = generateMealPlan(preferences.ingredients, preferences.diets, recipesDB);
    setPlan(newPlan);
  };

  const regenerateMeal = (dayIndex, mealType) => {
    const newPlan = [...plan];
    const currentMealId = newPlan[dayIndex].meals[mealType].id;
    
    // Find alternatives
    const alternatives = recipesDB.filter(r => 
      r.type === mealType && r.id !== currentMealId
    );
    
    if (alternatives.length > 0) {
      // Pick random for MVP
      const replacement = alternatives[Math.floor(Math.random() * alternatives.length)];
      newPlan[dayIndex].meals[mealType] = replacement;
      setPlan(newPlan);
    }
  };

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '4rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
        <div>
          <h2 style={{ fontSize: '2.5rem', margin: 0 }}>Your Weekly Plan</h2>
          <p className="text-muted" style={{ marginTop: '0.5rem' }}>
            Optimized for {preferences.diets.join(', ') || 'your diet'} using your pantry items.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn-secondary" onClick={onEditPreferences} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Edit3 size={18} /> Edit Pantry
          </button>
          <button className="btn-primary" onClick={() => setShowShoppingList(!showShoppingList)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShoppingCart size={18} /> {showShoppingList ? 'Hide List' : 'Shopping List'}
          </button>
        </div>
      </div>

      {showShoppingList && (
        <div className="glass-card animate-fade-in" style={{ marginBottom: '3rem', backgroundColor: 'var(--primary-light)' }}>
          <h3>Missing Ingredients to Buy</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
            {shoppingList.length > 0 ? shoppingList.map(item => (
              <span key={item} style={{ padding: '0.5rem 1rem', background: 'var(--surface)', borderRadius: '9999px', border: '1px solid var(--border)' }}>
                {item}
              </span>
            )) : <p>You have everything you need!</p>}
          </div>
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {plan.map((day, dIdx) => (
          <div key={day.day} className="glass-card" style={{ padding: '1.5rem 2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <h3 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--primary)' }}>Day {day.day}</h3>
              <button 
                onClick={() => regenerateDay(dIdx)} 
                style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
              >
                <RefreshCw size={16} /> Regenerate Day
              </button>
            </div>
            
            <div className="grid grid-cols-3">
              {['breakfast', 'lunch', 'dinner'].map((mealType) => (
                <div key={mealType} style={{ background: 'var(--bg-color)', padding: '1.5rem', borderRadius: 'var(--radius-md)', position: 'relative' }}>
                  <div style={{ textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                    {mealType}
                  </div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', height: '3rem' }}>
                    {day.meals[mealType]?.name || 'No recipe found'}
                  </h4>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button 
                      onClick={() => setSelectedRecipe(day.meals[mealType])}
                      className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
                    >
                      Recipe
                    </button>
                    <button 
                      onClick={() => regenerateMeal(dIdx, mealType)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--primary)' }}
                      title="Swap this meal"
                    >
                      <RefreshCw size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <RecipeModal 
        recipe={selectedRecipe} 
        userIngredients={preferences.ingredients} 
        onClose={() => setSelectedRecipe(null)} 
      />
    </div>
  );
}

export default MealPlanner;
