// Header.tsx
import React, { useState } from 'react';
import './header.css';
import Modal from 'react-modal';
import Login from './Login';

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <div className="search-wrapper">
            <input type="search" placeholder="Recherche" className="search-input"/>
            <div className="search-icon"></div>
          </div>
          <a href="#" className="connexion-link" onClick={openModal}>CONNEXION</a>
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
      <div className="banner">
        <div className="banner-content">
        <div className="banner-text">
            <h1>Plongez dans l'univers de</h1>
            <h1>la Terre du Milieu</h1>
            <p>Découvrez des trésors légendaires et des objets enchanteurs</p>
            <p>issus de la Terre du Milieu, chacun soigneusement choisi</p>
            <p>pour raviver la magie en vous.</p>
        </div>
        <a href="/explorer" className="explore-button">EXPLORER</a>
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
