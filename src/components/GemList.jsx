import React from 'react';
import GemCard from './GemCard';
import './GemList.css';

const GemList = ({ gems }) => {
  if (!gems || gems.length === 0) {
    return (
      <div className="empty-state">
        <p>No gems found currently. The algorithm is still scanning.</p>
      </div>
    );
  }

  return (
    <div className="gem-grid">
      {gems.map((gem, index) => (
        <GemCard key={gem.id} gem={gem} index={index} />
      ))}
    </div>
  );
};

export default GemList;
