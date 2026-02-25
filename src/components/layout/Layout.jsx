import React from 'react';
import Header from './Header';
import BottomNav from './BottomNav';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className="safe-area-spacing">
                {children}
            </main>
            <BottomNav />
        </>
    );
};

export default Layout;
