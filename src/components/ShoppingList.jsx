import React from 'react';
import { ShoppingBag } from 'lucide-react';

const ShoppingList = ({ items }) => {
  if (!items || items.length === 0) {
    return (
      <div className="glass-card animate-fade-in" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <ShoppingBag size={48} color="var(--saffron)" style={{ marginBottom: '1rem' }} />
        <h2>Your Shopping List is Empty</h2>
        <p>Generate a meal plan first or you already have everything!</p>
      </div>
    );
  }

  return (
    <div className="glass-card animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <ShoppingBag size={32} color="var(--saffron)" />
        <h2>Shopping List</h2>
      </div>
      
      <p style={{ marginBottom: '1.5rem' }}>
        Here are the missing ingredients you need to buy for your generated meal plan.
      </p>

      <ul className="ingredients-list">
        {items.sort((a, b) => a.name.localeCompare(b.name)).map((item, idx) => (
          <li key={idx} style={{ padding: '1rem 0', display: 'flex', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>{item.name}</span>
              {item.count > 1 && (
                <span style={{ marginLeft: '0.5rem', color: 'var(--saffron)', fontSize: '0.9rem', fontWeight: 700 }}>
                  (Needed for {item.count} recipes)
                </span>
              )}
            </div>
            <div style={{ color: 'var(--text-secondary)', background: 'var(--surface-color)', padding: '0.5rem 1rem', borderRadius: '50px', border: '1px solid var(--glass-border)' }}>
              {item.quantity}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
