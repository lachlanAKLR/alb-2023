import React from 'react';

export default function ServiceLink({
  services,
  index,
  activeService,
  handleClick,
}) {
  function renderItems() {
    return services.nodes.map((service) => {
      const activeClass =
        activeService === service.id ? 'navigation-list__item--active' : '';
      return (
        <button
          key={service.id}
          type="button"
          className={`service-link ${activeClass}`}
          onClick={() => handleClick(service.id)}
        >
          <h3>{service.service}</h3>
        </button>
      );
    });
  }
  return <ul>{renderItems()}</ul>;
}
