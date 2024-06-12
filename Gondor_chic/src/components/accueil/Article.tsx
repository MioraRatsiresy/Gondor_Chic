import './artcile.css';
import plus from './../../assets/icons/plus.png';
import { useState } from 'react';

interface ArticleProps {
    title: string,
    price: string,
    image: string    
}

const Article: React.FC<ArticleProps> = ({title,price,image}) => {
    const [quantity, setQuantity] = useState<number>(1);
    const handleDecrement = () => {
        setQuantity(prevQuantity => Math.max(0, prevQuantity - 1));
    };

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };
    return (
    <div className="article-container">
        <div className='image-container'>
            <img src={image} alt="" />
        </div>
        <div className='details-container'>
            <h1 className='gandalf'>{title}</h1>
            <div className='line'></div>
            <div className='price-container'>
                <div className='price'><b>{price}</b></div>
                <div className='price-subtitle'><b>Personalise</b></div>
            </div>
            <div className='line'></div>
            <div className='custom-container'>
                <img className='custom-icon' src={plus} alt="" />
                <div className='custom-text'>Ajouter une personalisation pour</div>
            </div>
            <div className='line'></div>
            <div>
                <div className='quantity'>Quantité</div>
                <div className='quantity-container'>
                    <button className='quantite-button'>
                        <span className='moins-icon' onClick={handleDecrement}>-</span>
                        <span className='one'><b>{quantity}</b></span>
                        <span className='add-icon' onClick={handleIncrement}>+</span>
                    </button>
                    <button className='add-button'>
                        <div className='span-container'><span className='add-text'>Ajouter au panier</span></div>
                    </button>
                </div>
            </div> 
        </div>
    </div>
)
}
export default Article;