import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Info, Users, Image } from 'lucide-react';
import './BottomNav.css';

const BottomNav = () => {
    return (
        <nav className="bottom-nav">
            <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                <Home size={24} />
                <span>홈</span>
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                <Info size={24} />
                <span>소개</span>
            </NavLink>
            <NavLink to="/recruitment" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                <Users size={24} />
                <span>모집</span>
            </NavLink>
            <NavLink to="/gallery" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                <Image size={24} />
                <span>갤러리</span>
            </NavLink>
        </nav>
    );
};

export default BottomNav;
