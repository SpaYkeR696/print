import "./Contacts.css";

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="container">
        <h1 className="page-title">Контакты</h1>
        <div className="contacts-content">
          <div className="contact-info-panel">
            <div className="contact-item">
              <span className="contact-label">Адрес:</span>
              <p className="contact-address">
                г. Санкт-Петербург, пр. Королева, 48/6
              </p>
            </div>
            <div className="contact-item">
              <span className="contact-label">Email:</span>
              <p className="contact-email">med1184@mail.ru</p>
            </div>
            <div className="contact-item">
              <span className="contact-label">Телефон:</span>
              <div className="contact-phone-wrapper">
                <p className="contact-phone">+79777090297</p>
                <a
                  href="https://t.me/medvedev1184"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="telegram-link"
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
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-label">График работы:</span>
              <p className="schedule-time">Ежедневно с 09:00 до 21:00</p>
            </div>
          </div>
          <div className="map-panel">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A4f8b8c8c8c8c8c8c8c8c8c8c8c8c8c8c&amp;source=constructor&amp;ll=30.217594%2C59.849095&amp;z=16.78&amp;pt=30.217594%2C59.849095%2Cpm2rdm"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Yandex Map"
              className="yandex-map"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
