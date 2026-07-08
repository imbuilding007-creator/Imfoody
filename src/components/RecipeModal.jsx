import React from 'react';
import { X, Flame, Clock, Users } from 'lucide-react';

const RecipeModal = ({ recipe, onClose }) => {
  if (!recipe) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content animate-fade-in" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><X /></button>
        
        <div className="recipe-header">
          <h2>{recipe.name}</h2>
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Clock size={16} /> {recipe.prepTime}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Users size={16} /> Serves {recipe.servingSize}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Flame size={16} /> {recipe.nutrition.calories} kcal</span>
          </div>
        </div>

        <div className="recipe-body">
          <div style={{ marginBottom: '1.5rem' }}>
            {recipe.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>

          {recipe.youtubeId && (
            <div className="recipe-section video-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', marginBottom: '2rem' }}>
              <iframe 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                src={`https://www.youtube.com/embed/${recipe.youtubeId}`} 
                title={`${recipe.name} Recipe Video`}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            </div>
          )}

          <div className="recipe-section">
            <h3>Ingredients</h3>
            <ul className="ingredients-list">
              {recipe.ingredients.map((ing, idx) => (
                <li key={idx}>
                  <span style={{ fontWeight: 500 }}>{ing.name}</span>
                  <span style={{ color: 'var(--text-secondary)' }}>{ing.quantity}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="recipe-section">
            <h3>Instructions</h3>
            <ol className="instructions-list">
              {recipe.instructions.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="recipe-section">
            <h3>Nutrition (per serving)</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginTop: '1rem', textAlign: 'center' }}>
              <div style={{ padding: '1rem', background: 'var(--surface-color)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                <div style={{ fontWeight: 700, color: 'var(--saffron)' }}>{recipe.nutrition.protein}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Protein</div>
              </div>
              <div style={{ padding: '1rem', background: 'var(--surface-color)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                <div style={{ fontWeight: 700, color: 'var(--saffron)' }}>{recipe.nutrition.carbs}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Carbs</div>
              </div>
              <div style={{ padding: '1rem', background: 'var(--surface-color)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                <div style={{ fontWeight: 700, color: 'var(--saffron)' }}>{recipe.nutrition.fats}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Fats</div>
              </div>
              <div style={{ padding: '1rem', background: 'var(--surface-color)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                <div style={{ fontWeight: 700, color: 'var(--saffron)' }}>{recipe.nutrition.fiber}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Fiber</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
