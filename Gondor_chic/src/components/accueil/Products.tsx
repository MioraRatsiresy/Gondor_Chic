import React, { useState } from 'react';
import './products.css';
import productData from './../../data/productData'; // Assurez-vous d'avoir un fichier de données de produit
import Article from './Article';
import Modal from 'react-modal';


interface Product {
  id: number;
  name: string;
  price: string;
  stock: number;
  image: string;
  discount?: number;
}
const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };
  return (
    <>
    <div className="products-container">
      <h2 className="products-title">Nos produits</h2>
      <div className="products-grid">
        {productData.map((product) => (
          <div key={product.id} className="product-card" onClick={() => openModal(product)}>
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
    <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Détails du produit"
        className="modal"
        overlayClassName="overlay"
      >
        {selectedProduct && (
          <Article title={selectedProduct.name} price={selectedProduct.price} image={selectedProduct.image} />
        )}
      </Modal>
    </>
  );
};

export default Products;
