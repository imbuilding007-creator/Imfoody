import React, { useState } from 'react';
import { extractCategories, ingredientEmojis, categoryColors } from '../data/recipes';
import { ArrowRight, Check } from 'lucide-react';

const Onboarding = ({ onComplete, initialIngredients, initialPrefs }) => {
  const categories = extractCategories();
  const categoryNames = Object.keys(categories);

  const [currentStep, setCurrentStep] = useState(0);
  const [selected, setSelected] = useState(initialIngredients || []);
  const [diet, setDiet] = useState(initialPrefs?.diet || 'All');
  
  const isFinalStep = currentStep === categoryNames.length;
  const currentCatName = categoryNames[currentStep];

  const toggleIngredient = (ingName) => {
    const lower = ingName.toLowerCase();
    setSelected(prev => 
      prev.includes(lower) ? prev.filter(i => i !== lower) : [...prev, lower]
    );
  };

  const handleNext = () => {
    if (currentStep < categoryNames.length) {
      setCurrentStep(prev => prev + 1);
    } else {
      onComplete(selected, { diet });
    }
  };

  return (
    <div className="glass-card animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2>{isFinalStep ? "Dietary Preferences" : `What's in your pantry?`}</h2>
        <p>
          {isFinalStep 
            ? "Any specific dietary requirements?" 
            : `Select the ${currentCatName} you have available.`}
        </p>
        
        {/* Progress Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
          {[...categoryNames, 'Prefs'].map((_, idx) => (
            <div 
              key={idx}
              style={{
                width: '10px', height: '10px', borderRadius: '50%',
                background: idx === currentStep ? 'var(--saffron)' : 'var(--glass-border)',
                transition: 'var(--transition)'
              }}
            />
          ))}
        </div>
      </div>

      {!isFinalStep ? (
        <div className="ingredients-grid animate-fade-in" key={currentStep}>
          {(categories[currentCatName] || []).map(ingName => {
            const isSelected = selected.includes(ingName.toLowerCase());
            const bgColor = categoryColors[currentCatName] || 'var(--surface-color)';
            const emoji = ingredientEmojis[ingName] || "🍲";
            
            return (
              <div 
                key={ingName} 
                className={`ingredient-chip ${isSelected ? 'selected' : ''}`}
                onClick={() => toggleIngredient(ingName)}
                style={{ 
                  background: isSelected ? 'var(--cardamom)' : bgColor,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '1rem',
                  fontSize: '0.9rem',
                  textAlign: 'center'
                }}
              >
                <span style={{ fontSize: '2.5rem' }}>{emoji}</span>
                <span style={{ fontWeight: 500 }}>{ingName}</span>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="animate-fade-in" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          {['All', 'Vegetarian', 'Vegan', 'High-Protein'].map(d => (
            <div 
              key={d} 
              className={`ingredient-chip ${diet === d ? 'selected' : ''}`}
              onClick={() => setDiet(d)}
              style={{ padding: '1.5rem', fontSize: '1.1rem', flex: 1, maxWidth: '150px' }}
            >
              {d}
            </div>
          ))}
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3rem' }}>
        <button 
          className="btn btn-outline" 
          onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
          style={{ visibility: currentStep === 0 ? 'hidden' : 'visible' }}
        >
          Back
        </button>

        <button className="btn btn-primary" onClick={handleNext}>
          {isFinalStep ? 'Generate Plan' : 'Next Category'} 
          {isFinalStep ? <Check size={18} /> : <ArrowRight size={18} />}
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
