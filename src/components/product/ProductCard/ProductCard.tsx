import { Link } from 'react-router-dom';
import './ProductCard.css';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image?: string;
  category?: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`} className="product-card">
      <div className="product-image">
        {image ? (
          <img src={image} alt={name} />
        ) : (
          <div className="product-placeholder">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
              <rect width="200" height="200" fill="#1a1a1a"/>
              <rect x="50" y="50" width="100" height="120" rx="5" fill="#ff6b6b" opacity="0.3"/>
              <circle cx="100" cy="80" r="20" fill="#ff6b6b" opacity="0.5"/>
              <rect x="60" y="110" width="80" height="40" rx="5" fill="#ff6b6b" opacity="0.5"/>
            </svg>
          </div>
        )}
        {category && <span className="product-category">{category}</span>}
      </div>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">{price.toLocaleString('ru-RU')} ₽</p>
      </div>
    </Link>
  );
};

export default ProductCard;
