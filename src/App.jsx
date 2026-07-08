import React, { useState, useEffect } from 'react';
import Onboarding from './components/Onboarding';
import WeeklyPlanner from './components/WeeklyPlanner';
import ShoppingList from './components/ShoppingList';
import Auth from './components/Auth';
import { generateMealPlan, generateShoppingList } from './utils/planner';
import { ChefHat, ShoppingCart, Calendar, LogOut } from 'lucide-react';
import { auth, db } from './services/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import './index.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  const [step, setStep] = useState('onboarding'); // 'onboarding', 'planner', 'shopping'
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [preferences, setPreferences] = useState({ diet: 'All', spiceLevel: 'Medium' });
  const [mealPlan, setMealPlan] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);

  // Listen to Auth State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      
      if (currentUser) {
        try {
          const docRef = doc(db, "users", currentUser.uid);
          const docSnap = await getDoc(docRef);
          
          if (docSnap.exists()) {
            const data = docSnap.data();
            if (data.mealPlan) {
              setMealPlan(data.mealPlan);
              setShoppingList(data.shoppingList);
              setSelectedIngredients(data.selectedIngredients || []);
              setPreferences(data.preferences || { diet: 'All' });
              setStep('planner');
            }
          }
        } catch (error) {
          console.error("Error fetching data from Firestore:", error);
        }
      }
      
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleCompleteOnboarding = async (ingredients, prefs) => {
    setSelectedIngredients(ingredients);
    setPreferences(prefs);
    
    const plan = generateMealPlan(ingredients, prefs);
    const list = generateShoppingList(plan, ingredients);
    
    setMealPlan(plan);
    setShoppingList(list);
    setStep('planner');

    if (user) {
      try {
        await setDoc(doc(db, "users", user.uid), {
          mealPlan: plan,
          shoppingList: list,
          selectedIngredients: ingredients,
          preferences: prefs,
          updatedAt: new Date().toISOString()
        });
      } catch (error) {
        console.error("Error saving data to Firestore:", error);
      }
    }
  };

  const handleRegeneratePlan = async () => {
    const plan = generateMealPlan(selectedIngredients, preferences);
    const list = generateShoppingList(plan, selectedIngredients);
    setMealPlan(plan);
    setShoppingList(list);

    if (user) {
      try {
        await setDoc(doc(db, "users", user.uid), {
          mealPlan: plan,
          shoppingList: list,
          selectedIngredients,
          preferences,
          updatedAt: new Date().toISOString()
        });
      } catch (error) {
        console.error("Error saving regenerated data to Firestore:", error);
      }
    }
  };

  const handleRegenerateMeal = async (dayIndex, mealType) => {
    const tempPlan = generateMealPlan(selectedIngredients, preferences);
    const newMeal = tempPlan[dayIndex].meals[mealType];
    
    setMealPlan(prev => {
      const updated = [...prev];
      updated[dayIndex].meals[mealType] = newMeal;
      
      // Also update shopping list and Firestore asynchronously
      const list = generateShoppingList(updated, selectedIngredients);
      setShoppingList(list);

      if (user) {
        setDoc(doc(db, "users", user.uid), {
          mealPlan: updated,
          shoppingList: list,
          selectedIngredients,
          preferences,
          updatedAt: new Date().toISOString()
        }).catch(error => console.error("Error saving specific meal:", error));
      }
      
      return updated;
    });
  };

  const handleLogout = async () => {
    setStep('onboarding');
    setSelectedIngredients([]);
    setPreferences({ diet: 'All', spiceLevel: 'Medium' });
    setMealPlan([]);
    setShoppingList([]);
    await signOut(auth);
  };

  if (authLoading) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: 'var(--saffron)' }}>Loading...</div>;
  }

  if (!user) {
    return (
      <div className="app-container">
        <header className="header" style={{ justifyContent: 'center' }}>
          <div className="header-logo">
            <ChefHat size={32} />
            <h1>ImFoody</h1>
          </div>
        </header>
        <main className="main-content">
          <Auth />
        </main>
      </div>
    );
  }

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-logo" onClick={() => setStep('planner')} style={{cursor: 'pointer'}}>
          <ChefHat size={32} />
          <span>ImFoody</span>
        </div>
        
        <div className="header-actions">
          <button 
            className={`btn ${step === 'planner' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setStep('planner')}
            disabled={mealPlan.length === 0}
          >
            <Calendar size={18} /> Plan
          </button>
          <button 
            className={`btn ${step === 'shopping' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setStep('shopping')}
            disabled={mealPlan.length === 0}
          >
            <ShoppingCart size={18} /> Grocery
          </button>
          <button 
            className="btn btn-outline"
            onClick={() => setStep('onboarding')}
          >
            Settings
          </button>
          <button 
            className="btn btn-outline"
            onClick={handleLogout}
            style={{ color: '#d32f2f' }}
          >
            <LogOut size={18} />
          </button>
        </div>
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
                Regenerate
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
