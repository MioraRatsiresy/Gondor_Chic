// Header.tsx
import React, { useEffect, useState } from 'react';
import './header.css';
import Modal from 'react-modal';
import Login from './Login';
import menu from './../../assets/icons/menu.svg'; 
import closeIcon from './../../assets/icons/close.svg';

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-top">
          <img src={menu} alt="" className='menu' onClick={openSidebar}/>
          <div className='nav-top-right'>
            <div className="search-wrapper">
              <input type="search" placeholder="Recherche" className="search-input"/>
              <div className="search-icon"></div>
            </div>
            <a href="#" className="connexion-link" onClick={openModal}>CONNEXION</a>
          </div>
        </div>
        <div className="nav-bottom">
          <ul className="nav-links-left">
            <li><a href="/nos-produits">NOS PRODUITS</a></li>
            <li><a href="/produits-du-jour">PRODUITS DU JOUR</a></li>
          </ul>
          <h1 className="site-title">GONDOR CHIC</h1>
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
      <div className="banner">
        <div className="banner-content">
        <div className="banner-text">
            <h1 className='banner-title'>Plongez dans l'univers de</h1>
            <h1 className='banner-title'>la Terre du Milieu</h1>
            <p>Découvrez des trésors légendaires et des objets enchanteurs</p>
            <p>issus de la Terre du Milieu, chacun soigneusement choisi</p>
            <p>pour raviver la magie en vous.</p>
        </div>
        <a href="#products-container" className="explore-button">EXPLORER</a>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Détails du produit"
        className="modal"
        overlayClassName="overlay"
      >
        <Login/>
      </Modal>
    </header>
  );
};

export default Header;
