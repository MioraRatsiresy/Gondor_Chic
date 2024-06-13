import React, { useState } from 'react';
import './customHome.css';

type User = {
    first_name: string;
    last_name: string;
};

type ProductProps = {
    productName: string;
    description: string;
    stock: number;
    price: number;
    imageUrl: string;
    user: User;
};

const CustomHome: React.FC<ProductProps> = ({ productName, description, stock, price, imageUrl, user }) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(Number(e.target.value));
    };

    const handleAddToCart = () => {
        if (quantity > stock) {
            alert('Le stock est limité, veuillez vérifier la quantité');
        } else {
            alert(`${quantity} ${productName} ajouté(s) au panier.`);
            // Logic for adding to cart
            console.log(`${quantity} ${productName} added to cart.`);
        }
    };

    return (
        <div className="custom-home-product-container">
            <img src={imageUrl} alt={productName} className="custom-home-product-image" />
            <div className="custom-home-product-details">
                <h2 className="custom-home-product-title">{productName}</h2>
                <p>Bonjour, <strong className="custom-home-product-greeting">{user.first_name} {user.last_name}</strong></p>
                <p className="custom-home-product-description">{description}</p>
                <br />
                <p className="custom-home-product-stock"><strong>Stock:</strong> {stock} | <strong>{price} $</strong></p>
                <div className="custom-home-quantity-and-button">
                    <input 
                        type="number" 
                        value={quantity} 
                        min="1" 
                        max={stock} 
                        onChange={handleQuantityChange} 
                        className="custom-home-quantity-input"
                    />
                    <button onClick={handleAddToCart} className="custom-home-add-to-cart-button">
                        AJOUTER AU PANIER
                    </button>
                </div>
                {quantity > stock && <p className="custom-home-stock-warning">Le stock est limité, veuillez vérifier la quantité</p>}
            </div>
        </div>
    );
};

export default CustomHome;
