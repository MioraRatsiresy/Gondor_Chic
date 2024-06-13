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
        <div className="product-container">
            <img src={imageUrl} alt={productName} className="product-image" />
            <div className="product-details">
                <h2 className="product-title">{productName}</h2>
                <p>Bonjour, <strong className="product-greeting">{user.first_name} {user.last_name}</strong></p>
                <p className="product-description">{description}</p>
                <p className="product-stock"><strong>Stock:</strong> {stock} | <strong>{price} $</strong></p>
                <div className="quantity-and-button">
                    <input 
                        type="number" 
                        value={quantity} 
                        min="1" 
                        max={stock} 
                        onChange={handleQuantityChange} 
                        className="quantity-input"
                    />
                    <button onClick={handleAddToCart} className="add-to-cart-button">
                        AJOUTER AU PANIER
                    </button>
                </div>
                {quantity > stock && <p className="stock-warning">Le stock est limité, veuillez vérifier la quantité</p>}
            </div>
        </div>
    );
};

export default CustomHome;
