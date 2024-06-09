import React from 'react';
import './products.css';
import productData from './../../data/productData'; // Assurez-vous d'avoir un fichier de données de produit

const Products: React.FC = () => {
  return (
    <div className="products-container">
      <h2 className="products-title">Nos produits</h2>
      <div className="products-grid">
        {productData.map((product) => (
          <div key={product.id} className="product-card">
            <div
              className="product-image-container"
              style={{ backgroundImage: `url(${product.image})` }}
            >
              {product.discount && <span className="product-discount">-{product.discount}%</span>}
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">Stock: {product.stock} | {product.price} $</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
