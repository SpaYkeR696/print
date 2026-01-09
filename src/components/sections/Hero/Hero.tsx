import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Создаём <span className="highlight">уникальный мерч</span> для вашего бренда
        </h1>
        <p className="hero-subtitle">
          Футболки, худи, аксессуары с принтом на любой вкус
        </p>
        <div className="hero-buttons">
          <Link to="/catalog" className="btn btn-primary">
            Смотреть каталог
          </Link>
          <Link to="/about" className="btn btn-secondary">
            Узнать больше
          </Link>
        </div>
      </div>
      <div className="hero-image">
        <div className="hero-placeholder">
          <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
            <rect width="400" height="400" fill="#1a1a1a"/>
            <path d="M200 100L250 200H150L200 100Z" fill="#ff6b6b" opacity="0.3"/>
            <circle cx="200" cy="200" r="80" stroke="#ff6b6b" strokeWidth="4" fill="none"/>
            <rect x="120" y="280" width="160" height="80" rx="10" fill="#ff6b6b" opacity="0.2"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
