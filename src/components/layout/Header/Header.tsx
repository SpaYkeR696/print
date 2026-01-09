import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-text">MERCHFANATIX</span>
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Главная</Link>
          <Link to="/catalog" className="nav-link">Услуги</Link>
          <Link to="/contacts" className="nav-link">Контакты</Link>
        </nav>
        <div className="header-actions">
          <a href="tel:+79777090297" className="header-phone">+79777090297</a>
          <a 
            href="https://t.me/merchfanatix" 
            target="_blank" 
            rel="noopener noreferrer"
            className="telegram-link-header"
            aria-label="Telegram"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8L14.87 16.51C14.7 17.19 14.3 17.35 13.71 17.01L11.28 15.25L10.1 16.37C9.93 16.54 9.79 16.68 9.48 16.68L9.66 14.12L15.27 9.01C15.55 8.75 15.21 8.61 14.85 8.87L8.26 13.4L5.7 12.58C5.02 12.36 5.01 11.89 5.82 11.58L15.96 7.68C16.54 7.44 17.04 7.75 16.85 8.4L16.64 8.8Z" fill="#0088cc"/>
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
