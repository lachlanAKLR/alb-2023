import React, { useState } from 'react';
import { PortableText } from '@portabletext/react';
import { Link } from 'gatsby';

function ScrollboxService({ service }) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = (event) => {
    setIsActive((current) => !current);
  };
  return (
    <div className="mobile__service">
      <div className="mobile__service-title">
        <button className="service-btn" onClick={handleClick} type="button">
          <h3
            className={
              isActive ? 'service__button-open' : 'service__button-close'
            }
          >
            {service.service}
          </h3>
        </button>
      </div>
      <div
        className={
          isActive
            ? 'mobile__service-content open'
            : 'mobile__service-content close'
        }
      >
        <PortableText value={service._rawServiceDescription} />
        <Link to="/contact">
          <button type="button" className="btn">
            Contact Us <span className="arrow">→</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default function MobileScrollBox({ services }) {
  return (
    <div className="mobile__scrollbox">
      <div className="mobile__scrollbox-inner">
        {services.nodes.map((service, index) => (
          <ScrollboxService service={service} />
        ))}
      </div>
    </div>
  );
}
