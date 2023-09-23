import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const ScrollBoxStyles = styled.div`
  .scrollbox__wrapper {
    padding: 60px 0;
  }

  .scrollbox__inner {
    display: flex;
    gap: 30px;
  }

  .scrollbox__column {
    width: 50%;
    border: 1px solid var(--grey);
    border-radius: 30px;
    background-color: var(--sage);
    padding: 30px;
  }

  .gatsby-image-wrapper {
    width: 50%;
    height: calc(100vh - 130px);
    position: sticky;
    top: 110px;
    border-radius: 30px;
  }

  .scrollbox__title {
    height: calc(100vh - 130px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    flex-direction: column;
  }

  .scrollbox__services {
    padding-top: 80px;
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

  li {
    padding-bottom: 30px;
  }

  h2 {
    text-align: center;
    padding-bottom: 50px;
  }

  @media only screen and (max-width: 1100px) {
    .scrollbox__inner {
      flex-direction: column-reverse;
    }

    .scrollbox__column {
      width: 100%;
      border-radius: 10px;
    }

    .scrollbox__title {
      height: auto;
      padding: 60px 0 50px 0;
      h2 {
        display: none;
      }
    }

    h3 {
      border: 1px solid var(--grey);
      padding: 20px 20px;
    }

    li {
      padding-bottom: 20px;
    }

    .scrollbox__services {
      padding-top: 25px;
    }

    .gatsby-image-wrapper {
      width: 100%;
      height: 450px;
      position: relative;
      top: 0;
      border-radius: 10px;
    }

    .scrollbox__wrapper {
      padding: 50px 0;
    }
  }
`;

export default function ServiceScrollBox({ services, serviceImage }) {
  return (
    <ScrollBoxStyles>
      <div
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-easing="ease"
        className="scrollbox__wrapper"
      >
        <div className="scrollbox__inner">
          <div className="scrollbox__column">
            <div className="scrollbox__title">
              <div />
              <h1>
                Our
                <br />
                Services
              </h1>
              <h2>↓</h2>
            </div>
            <div className="scrollbox__services">
              <ul>
                {services.nodes.map((service, index) => (
                  <li key={index}>
                    <AnchorLink to="/services/#scrollbox" className="service">
                      <h3>{service.service}</h3>
                    </AnchorLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <GatsbyImage
            image={serviceImage.gatsbyImageData}
            alt="service image"
          />
        </div>
      </div>
    </ScrollBoxStyles>
  );
}
