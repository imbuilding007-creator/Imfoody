import React, { useState } from 'react';
import RecipeModal from './RecipeModal';
import { RefreshCw, Clock, ChefHat } from 'lucide-react';

const WeeklyPlanner = ({ plan, onRegenerateMeal }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  if (!plan || plan.length === 0) return <div>No plan generated.</div>;

  return (
    <div>
      <div className="planner-grid">
        {plan.map((dayData, dayIndex) => (
          <div key={dayData.day} className="day-column">
            <div className="day-header">{dayData.day}</div>
            
            {['Breakfast', 'Lunch', 'Dinner'].map(mealType => {
              const recipe = dayData.meals[mealType];
              return (
                <div key={mealType} className="meal-slot animate-fade-in" style={{ animationDelay: `${dayIndex * 0.1}s` }}>
                  <div className="meal-type-label">{mealType}</div>
                  
                  {recipe ? (
                    <>
                      <div 
                        className="meal-title" 
                        onClick={() => setSelectedRecipe(recipe)}
                        style={{ cursor: 'pointer' }}
                      >
                        {recipe.name}
                      </div>
                      <div className="meal-meta">
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Clock size={12} /> {recipe.prepTime}</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><ChefHat size={12} /> {recipe.difficulty}</span>
                      </div>
                      
                      <div className="meal-actions">
                        <button 
                          className="btn-icon" 
                          onClick={(e) => { e.stopPropagation(); onRegenerateMeal(dayIndex, mealType); }}
                          title="Regenerate this meal"
                        >
                          <RefreshCw size={14} />
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="meal-title" style={{ color: 'var(--text-secondary)' }}>No recipe match</div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {selectedRecipe && (
        <RecipeModal recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
      )}
    </div>
  );
};

export default WeeklyPlanner;
