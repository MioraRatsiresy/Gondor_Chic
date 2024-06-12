import React from 'react';
import './dayproduct.css';
import productImage from './../../assets/images/product.jpg'; 

const DayProduct : React.FC = () => {
  return (
    <>
      <h2 className="product-day" id='product-day'>Produit du jour</h2>
      <div className="product-container">
        <div className="product-content">
          <div className="product-image-wrapper">
            <img src={productImage} alt="Cape d'Invisibilité Hobbit" className="product-image" />
          </div>
          <div className="product-details-wrapper">
            <div className="product-details">
              <p className="new-product">NOUVEAUTÉ</p>
              <h3 className="product-name">Cape d'Invisibilité Hobbit</h3>
              <p className="product-stock">Stock: 8 | 350 $</p>
              <p className="product-description">
                Une cape confectionnée à partir des tissus magiques de la Lórien,
                utilisée par les hobbits pour se fondre dans leur environnement.
                Cette cape, imprégnée de la magie elfique, permet à son porteur
                de devenir presque invisible aux yeux des ennemis. Elle est légère,
                confortable et d'une teinte gris-argent qui se confond avec les
                paysages naturels.
              </p>
              <button className="see-more">VOIR PLUS</button>
            </div>
          </div>
          <div className='details-mobile'>
            <p>NOUVEAUTÉ</p>
            <h3 className='mobile-title'>Cape d'Invisibilité Hobbit</h3>
            <p>Stock: 8 | 350 $</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DayProduct;
