import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import GemList from './components/GemList';
import './App.css';

function App() {
  const [gems, setGems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGems = async () => {
      try {
        const response = await fetch('/api/gems');
        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();
        setGems(result.data);
      } catch (err) {
        setError('Failed to load gem data. Ensure backend is running.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchGems();
    
    // Simulate real-time updates every 30 seconds
    const interval = setInterval(fetchGems, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-container">
      <Header />
      
      <main className="main-content">
        <div className="hero-section glass">
          <h1>Discover the Next <span>100x Gem</span></h1>
          <p>Our advanced algorithmic pipeline scans low-cap tokens to find high-probability exponential growth opportunities for JuiceEverything.</p>
        </div>
        
        <div className="dashboard-controls">
          <div className="control-group">
            <button className="active">All Gems</button>
            <button>High Growth</button>
            <button>Safe List</button>
          </div>
          <div className="status-indicator">
            <span className="pulse"></span> Live Tracking Active
          </div>
        </div>

        {loading ? (
          <div className="loading-state">
            <div className="loader"></div>
            <p>Scanning markets...</p>
          </div>
        ) : error ? (
          <div className="error-state">
            <p>{error}</p>
          </div>
        ) : (
          <GemList gems={gems} />
        )}
      </main>
    </div>
  );
}

export default App;
