import React from 'react';
import { TrendingUp, Activity, ShieldAlert, ShieldCheck } from 'lucide-react';
import './GemCard.css';

const GemCard = ({ gem, index }) => {
  const isHighGrowth = gem.gemScore > 85;
  
  return (
    <div 
      className="gem-card glass" 
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="card-header">
        <div className="token-info">
          <div className="token-avatar">
            {gem.symbol.charAt(0)}
          </div>
          <div>
            <h3>{gem.name}</h3>
            <span className="token-symbol">{gem.symbol}</span>
          </div>
        </div>
        <div className={`score-badge ${isHighGrowth ? 'high' : 'medium'}`}>
          Score: {gem.gemScore}
        </div>
      </div>

      <div className="card-body">
        <div className="metric-row main-metric">
          <div>
            <span className="metric-label">Price</span>
            <div className="metric-value">{gem.price}</div>
          </div>
          <div className="text-right">
            <span className="metric-label">1h Change</span>
            <div className={`metric-value ${gem.change1h.startsWith('+') ? 'positive' : 'negative'}`}>
              {gem.change1h.startsWith('+') ? <TrendingUp size={16} /> : null}
              {gem.change1h}
            </div>
          </div>
        </div>

        <div className="metric-grid">
          <div className="metric-box glass">
            <span className="metric-label">Market Cap</span>
            <span className="metric-value-sm">{gem.marketCap}</span>
          </div>
          <div className="metric-box glass">
            <span className="metric-label">Vol (24h)</span>
            <span className="metric-value-sm">{gem.volume24h}</span>
          </div>
          <div className="metric-box glass">
            <span className="metric-label">Liquidity</span>
            <span className="metric-value-sm">{gem.liquidity}</span>
          </div>
          <div className="metric-box glass">
            <span className="metric-label">Age</span>
            <span className="metric-value-sm">{gem.ageCount}h</span>
          </div>
        </div>
      </div>

      <div className="card-footer">
        <div className="risk-indicator">
          {gem.riskLevel === 'Medium' ? (
            <><ShieldCheck size={16} className="text-primary" /> Med Risk</>
          ) : (
            <><ShieldAlert size={16} className="text-danger" /> High Risk</>
          )}
        </div>
        <button className="action-btn">
          <Activity size={16} /> Analyze
        </button>
      </div>
    </div>
  );
};

export default GemCard;
