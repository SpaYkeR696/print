import { Link } from "react-router-dom";
import { useTheme } from "../../../contexts/ThemeContext";
import "./Footer.css";

const Footer = () => {
  const { theme, setTheme } = useTheme();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-title">
            <div>MERCH</div>
            <div>FANATIX</div>
          </div>
          <div className="theme-switcher">
            <span className="theme-label">Тема:</span>
            <button
              className={`theme-btn theme-auto ${
                theme === "auto" ? "active" : ""
              }`}
              onClick={() => setTheme("auto")}
            >
              авто
            </button>
            <button
              className={`theme-btn theme-light ${
                theme === "light" ? "active" : ""
              }`}
              onClick={() => setTheme("light")}
            >
              светлая
            </button>
            <button
              className={`theme-btn theme-dark ${
                theme === "dark" ? "active" : ""
              }`}
              onClick={() => setTheme("dark")}
            >
              темная
            </button>
          </div>
        </div>
        <div className="footer-section">
          <h4 className="footer-subtitle">Наши услуги</h4>
          <Link to="/services/textile" className="footer-text footer-link">
            Печать на текстиле
          </Link>
          <Link to="/services/pvd" className="footer-text footer-link">
            Печать на ПВД пакетах
          </Link>
          <Link to="/services/ziplock" className="footer-text footer-link">
            Печать на зиплоках
          </Link>
        </div>
        <div className="footer-section">
          <h4 className="footer-subtitle">Контакты</h4>
          <p className="footer-text">med1184@mail.ru</p>
          <a
            href="https://t.me/medvedev1184"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-telegram-link"
            aria-label="Telegram"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8L14.87 16.51C14.7 17.19 14.3 17.35 13.71 17.01L11.28 15.25L10.1 16.37C9.93 16.54 9.79 16.68 9.48 16.68L9.66 14.12L15.27 9.01C15.55 8.75 15.21 8.61 14.85 8.87L8.26 13.4L5.7 12.58C5.02 12.36 5.01 11.89 5.82 11.58L15.96 7.68C16.54 7.44 17.04 7.75 16.85 8.4L16.64 8.8Z"
                fill="#0088cc"
              />
            </svg>
          </a>
          <p className="footer-address">
            г. Санкт-Петербург, пр. Королева, 48/6
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">&copy; Merchfanatix 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
