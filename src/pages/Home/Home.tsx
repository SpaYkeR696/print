import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const services = [
    { id: 1, description: 'Печать на текстиле', link: '/catalog' },
    { id: 2, description: 'Печать на ПВД пакетах', link: '/catalog' },
    { id: 3, description: 'Печать на зиплоках', link: '/catalog' },
  ];

  return (
    <div className="home">
      <section className="services-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <p className="service-description">{service.description}</p>
                <Link to={service.link} className="service-btn">
                  Подробнее
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
