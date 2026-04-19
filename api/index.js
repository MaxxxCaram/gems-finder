const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const generateGems = () => {
  const names = ["JuiceCoin", "NovaToken", "Aether", "QuantumRise", "StellarGem", "MoonDust", "PulseGem", "Orbit", "Neon", "Zephyr"];
  const tickers = ["JUICE", "NOVA", "ATH", "QRZ", "SGEM", "DUST", "PULSE", "ORB", "NEO", "ZEPH"];
  
  return Array.from({ length: 15 }).map((_, index) => {
    const isHighGrowth = Math.random() > 0.3; 
    const price = (Math.random() * 0.05).toFixed(6);
    const mc = Math.floor(Math.random() * 5000000) + 100000;
    const vol = Math.floor(Math.random() * (mc * 0.4));
    const hourChange = (Math.random() * 50 - 5).toFixed(2);
    
    let score = Math.floor(Math.random() * 40) + 60;
    if (isHighGrowth) score += 15;
    if (score > 99) score = 99;

    return {
      id: `gem-${index}-${Date.now()}`,
      name: names[index % names.length] + (index >= names.length ? ` ${index}` : ""),
      symbol: tickers[index % tickers.length],
      price: `$${price}`,
      marketCap: `$${(mc / 1000000).toFixed(2)}M`,
      volume24h: `$${(vol / 1000).toFixed(1)}K`,
      change1h: `${hourChange > 0 ? '+' : ''}${hourChange}%`,
      gemScore: score,
      liquidity: `$${(mc * (0.05 + Math.random() * 0.1)).toLocaleString(undefined, { maximumFractionDigits: 0 })}`,
      ageCount: Math.floor(Math.random() * 48) + 1,
      riskLevel: score > 85 ? "Medium" : "High"
    };
  }).sort((a, b) => b.gemScore - a.gemScore);
};

app.get('/api/gems', (req, res) => {
  // Simulate database delay
  setTimeout(() => {
    res.json({
      success: true,
      data: generateGems()
    });
  }, 800);
});

// IMPORTANT FOR VERCEL
// We do not call app.listen() here, instead we export the Express app for Vercel's serverless environment.
module.exports = app;
