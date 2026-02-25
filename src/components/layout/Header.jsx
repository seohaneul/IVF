import React from 'react';
import { Menu, Bell } from 'lucide-react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-logo">IVF Club</div>
            <div className="header-actions">
                <button className="icon-btn"><Bell size={20} /></button>
                <button className="icon-btn"><Menu size={24} /></button>
            </div>
        </header>
    );
};

export default Header;
