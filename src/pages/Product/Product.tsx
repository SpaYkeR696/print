import { useParams } from 'react-router-dom';
import './Product.css';

const Product = () => {
  const { id } = useParams<{ id: string }>();

  // В реальном приложении здесь был бы запрос к API
  const product = {
    id: Number(id),
    name: 'Футболка Classic Black',
    price: 1990,
    description: 'Классическая футболка из премиум хлопка с уникальным принтом. Идеально подходит для повседневной носки.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Чёрный', 'Белый', 'Серый'],
  };

  return (
    <div className="product-page">
      <div className="container">
        <div className="product-details">
          <div className="product-image-section">
            <div className="product-main-image">
              <div className="product-placeholder-large">
                <svg width="500" height="500" viewBox="0 0 500 500" fill="none">
                  <rect width="500" height="500" fill="#1a1a1a"/>
                  <rect x="150" y="100" width="200" height="300" rx="10" fill="#ff6b6b" opacity="0.3"/>
                  <circle cx="250" cy="200" r="40" fill="#ff6b6b" opacity="0.5"/>
                  <rect x="170" y="280" width="160" height="100" rx="5" fill="#ff6b6b" opacity="0.5"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="product-info-section">
            <h1 className="product-title">{product.name}</h1>
            <p className="product-price">{product.price.toLocaleString('ru-RU')} ₽</p>
            <p className="product-description">{product.description}</p>
            
            <div className="product-options">
              <div className="option-group">
                <label>Размер</label>
                <div className="size-selector">
                  {product.sizes.map((size) => (
                    <button key={size} className="size-btn">
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="option-group">
                <label>Цвет</label>
                <div className="color-selector">
                  {product.colors.map((color) => (
                    <button key={color} className="color-btn">
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button className="btn btn-primary btn-add-to-cart">
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
