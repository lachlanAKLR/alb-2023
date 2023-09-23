import React, { useState, createRef, useEffect } from 'react';
import styled from 'styled-components';

import ServiceText from './ServiceText';
import ServiceLink from './ServiceLink';
import MobileScrollBox from './ServicesMobileScrollBox';

const ScrollBoxStyles = styled.div`
  .scrollbox__wrapper {
    padding: 60px 0;
  }

  .scrollbox__column:nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 6;
    padding: 0 30px;
    position: sticky;
    top: 100px;
    height: 100vh;
  }

  .scrollbox__column:nth-child(2) {
    grid-column-start: 7;
    grid-column-end: 13;
  }

  .description li {
    padding-top: 100px;
    height: 100vh;
  }

  h3 {
    border: 1px solid var(--grey);
    padding: 40px 50px;
    border-radius: 200px;
    text-align: center;
    transition: all 0.25s ease-in-out;
  }

  h3:hover {
    background-color: var(--cream);
    cursor: pointer;
  }

  .service-link {
    padding-bottom: 30px;
    text-transform: none;
    width: 100%;
  }

  h2 {
    padding-bottom: 30px;
  }

  .navigation-list__item--active h3 {
    background-color: var(--cream);
  }

  .mobile__scrollbox {
    display: none;
  }

  @media only screen and (max-width: 1100px) {
    .mobile__scrollbox {
      display: block;
      padding: 20px;
    }

    .service-btn {
      width: 100%;
      text-transform: none;
    }

    .scrollbox__inner {
      display: none;
    }

    .mobile__service-title {
      padding-bottom: 30px;
    }

    .mobile__service-content {
      padding-bottom: 40px;
      max-height: 400px;
      transition: max-height ease-in-out 0.5s, padding-bottom ease-in-out 0.5s,
        opacity ease-in-out 0.5s 0.5s;
    }

    .close {
      max-height: 0px;
      padding-bottom: 0px;
      opacity: 0;
      pointer-events: none;
      transition: max-height ease-in-out 0.5s 0.25s,
        padding-bottom ease-in-out 0.5s 0.25s, opacity ease-in-out 0.25s;
    }

    .service__button-open {
      background-color: var(--cream) !important;
    }

    h3 {
      padding: 20px 30px;
    }

    h3:hover {
      background-color: var(--sage);
    }
  }
`;

export default function ServicePageScrollBox({ services }) {
  const [activeService, setActiveService] = useState();
  const isBrowser = typeof window !== 'undefined';

  const refs = services.nodes.reduce((refsObj, service) => {
    refsObj[service.id] = createRef();
    return refsObj;
  }, {});

  const [pageHeight, setPageHeight] = useState();

  useEffect(() => {
    if (isBrowser) {
      setPageHeight(window.innerHeight);
      window.addEventListener('resize', (e) => {
        setTimeout(() => {
          setPageHeight(window.innerHeight);
        }, 300);
      });
    }
  }, [isBrowser]);

  const handleClick = (id) => {
    refs[id].current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };
  
  if (!isBrowser) {
    return null; // Return null if not in a browser environment
  }

  return (
    <ScrollBoxStyles>
      <div id="scrollbox" className="scrollbox__wrapper">
        <div className="scrollbox__inner site__grid">
          <div className="scrollbox__column">
            <div className="scrollbox__services">
              <ServiceLink
                services={services}
                activeService={activeService}
                handleClick={handleClick}
              />
            </div>
          </div>
          <div className="scrollbox__column">
            <div className="scrollbox__services description">
              {services.nodes.map((service, index) => (
                <ServiceText
                  service={service}
                  index={index}
                  activeService={activeService}
                  setActiveService={setActiveService}
                  key={index}
                  refs={refs}
                  pageHeight={pageHeight}
                />
              ))}
            </div>
          </div>
          <div />
        </div>
        <MobileScrollBox services={services} />
      </div>
    </ScrollBoxStyles>
  );
}
