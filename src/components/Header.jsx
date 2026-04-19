import React from 'react';
import { Search, Bell, Menu } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="main-header glass">
      <div className="logo">
        <div className="logo-icon"></div>
        Juice<span>Gems</span>
      </div>
      
      <div className="search-bar glass">
        <Search size={18} className="search-icon" />
        <input type="text" placeholder="Search tokens, addresses, or pairs..." />
      </div>
      
      <div className="header-actions">
        <button className="icon-btn">
          <Bell size={20} />
          <span className="badge"></span>
        </button>
        <button className="connect-btn">
          Connect Wallet
        </button>
        <button className="mobile-menu icon-btn">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
