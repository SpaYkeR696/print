import { Link } from "react-router-dom";
import textileImage from "../../assets/spec275-1-07-04-2020-13-21-58.jpg";
import pvdImage from "../../assets/pvdpng.png";
import ziplockImage from "../../assets/41iBq5hHKiL._AC_UF8941000_QL80_-416x339.jpg";
import "./Catalog.css";

const Catalog = () => {
  const services = [
    {
      id: 1,
      title: "Печать на текстиле",
      illustration: "print",
      link: "/services/print",
    },
    {
      id: 2,
      title: "Печать на ПВД пакетах",
      illustration: "sell",
      link: "/services/sell",
    },
    {
      id: 3,
      title: "Печать на зиплоках",
      illustration: "sew",
      link: "/services/sew",
    },
  ];

  return (
    <div className="services-page">
      <div className="container">
        {services.map((service) => (
          <div key={service.id} className="service-section">
            <div className="service-left">
              <div className="service-illustration">
                {service.illustration === "print" ? (
                  <img
                    src={textileImage}
                    alt="Печать на текстиле"
                    className="service-image"
                  />
                ) : service.illustration === "sell" ? (
                  <img
                    src={pvdImage}
                    alt="Печать на ПВД пакетах"
                    className="service-image"
                  />
                ) : (
                  <img
                    src={ziplockImage}
                    alt="Печать на зиплоках"
                    className="service-image"
                  />
                )}
              </div>
              <h2 className="service-title-left">{service.title}</h2>
            </div>
            <div className="service-right">
              <div className="service-divider"></div>
              <Link to={service.link} className="service-details-btn">
                Подробнее
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
