import React, { useEffect, useState } from "react";
import './customHeader.css';
import menu from './../../assets/icons/menu.svg'; 
import closeIcon from './../../assets/icons/close.svg';
import logo from './../../assets/images/logo.png';

const CustomHeader: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (isSidebarOpen) {
                setIsSidebarOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isSidebarOpen]);
    const openSidebar = () => {
        setIsSidebarOpen(true);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <header className="header">
            <nav className="navbar">
                <div className="nav-top">
                    <img src={menu} alt="" className='menu' onClick={openSidebar} />
                    <div className='nav-top-right'>
                        <div className="search-wrapper">
                            <input type="search" placeholder="Recherche" className="search-input" />
                            <div className="search-icon"></div>
                        </div>
                    </div>
                </div>
                <div className="nav-bottom">
                    <ul className="nav-links-left">
                        <li><a href="/nos-produits">NOS PRODUITS</a></li>
                        <li><a href="/produits-du-jour">PRODUITS DU JOUR</a></li>
                    </ul>
                    <img src={logo} alt="Gondor Chic Logo" className="site-logo"/>
                    <ul className="nav-links-right">
                        <li><a href="/contact">CONTACT</a></li>
                        <li><a href="/panier">MON PANIER</a></li>
                    </ul>
                </div>
            </nav>
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <img src={closeIcon} alt="Close" className="close-icon" onClick={closeSidebar} />
                <ul className="sidebar-links">
                    <li><a href="/nos-produits">NOS PRODUITS</a></li>
                    <li><a href="/produits-du-jour">PRODUITS DU JOUR</a></li>
                    <li><a href="/contact">CONTACT</a></li>
                    <li><a href="/panier">MON PANIER</a></li>
                </ul>
            </div>
        </header >
    );
};

export default CustomHeader;