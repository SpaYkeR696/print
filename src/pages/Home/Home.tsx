import { Link } from "react-router-dom";
import catcherVideo from "../../assets/IMG_2745.MP4";
import "./Home.css";

const Home = () => {
  const services = [
    { id: 1, description: "Печать на текстиле", link: "/services/textile" },
    { id: 2, description: "Печать на ПВД пакетах", link: "/services/pvd" },
    { id: 3, description: "Печать на зиплоках", link: "/services/ziplock" },
  ];

  return (
    <div className="home">
      <section className="hero-gif-section">
        <div className="container">
          <video
            src={catcherVideo}
            className="hero-gif"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </section>
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
