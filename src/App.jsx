import React, { useState } from 'react';
import Onboarding from './components/Onboarding';
import WeeklyPlanner from './components/WeeklyPlanner';
import ShoppingList from './components/ShoppingList';
import { generateMealPlan, generateShoppingList } from './utils/planner';
import { ChefHat, ShoppingCart, Calendar } from 'lucide-react';
import './index.css';

function App() {
  const [step, setStep] = useState('onboarding'); // 'onboarding', 'planner', 'shopping'
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [preferences, setPreferences] = useState({ diet: 'All', spiceLevel: 'Medium' });
  const [mealPlan, setMealPlan] = useState([]);

  const handleCompleteOnboarding = (ingredients, prefs) => {
    setSelectedIngredients(ingredients);
    setPreferences(prefs);
    const plan = generateMealPlan(ingredients, prefs);
    setMealPlan(plan);
    setStep('planner');
  };

  const handleRegeneratePlan = () => {
    const plan = generateMealPlan(selectedIngredients, preferences);
    setMealPlan(plan);
  };

  const handleRegenerateMeal = (dayIndex, mealType) => {
    // Regenerates a single meal for a specific day while keeping the rest
    // In a real app, we'd pass the current plan to avoid reusing meals incorrectly
    const tempPlan = generateMealPlan(selectedIngredients, preferences);
    const newMeal = tempPlan[dayIndex].meals[mealType];
    
    setMealPlan(prev => {
      const updated = [...prev];
      updated[dayIndex].meals[mealType] = newMeal;
      return updated;
    });
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-logo" onClick={() => setStep('planner')} style={{cursor: 'pointer'}}>
          <ChefHat size={32} />
          <span>Spice & Plan</span>
        </div>
        
        {step !== 'onboarding' && (
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button 
              className={`btn ${step === 'planner' ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setStep('planner')}
            >
              <Calendar size={18} /> Plan
            </button>
            <button 
              className={`btn ${step === 'shopping' ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setStep('shopping')}
            >
              <ShoppingCart size={18} /> Grocery
            </button>
            <button 
              className="btn btn-outline"
              onClick={() => setStep('onboarding')}
            >
              Settings
            </button>
          </div>
        )}
      </header>

      <main className="main-content">
        {step === 'onboarding' && (
          <Onboarding onComplete={handleCompleteOnboarding} initialIngredients={selectedIngredients} initialPrefs={preferences} />
        )}
        
        {step === 'planner' && (
          <div className="animate-fade-in">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h2>Your Weekly Meal Plan</h2>
              <button className="btn btn-outline" onClick={handleRegeneratePlan}>
                Regenerate Whole Week
              </button>
            </div>
            <WeeklyPlanner plan={mealPlan} onRegenerateMeal={handleRegenerateMeal} />
          </div>
        )}

        {step === 'shopping' && (
          <ShoppingList 
            items={generateShoppingList(mealPlan, selectedIngredients)} 
          />
        )}
      </main>
    </div>
  );
}

export default App;
