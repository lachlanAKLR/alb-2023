import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

const ServicesLandingStyles = styled.div`
  .landing__wrapper {
    padding: 105px 30px;
  }

  .landing__inner {
    display: flex;
    gap: 30px;
  }

  .column {
    width: 50%;
  }

  .column:nth-child(1) {
    border: 1px solid var(--grey);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      width: 320px;
      text-align: center;
    }
  }

  .column:nth-child(1),
  .gatsby-image-wrapper {
    border-radius: 30px;
    height: calc(100vh - 130px);
  }
  @media only screen and (max-width: 1100px) {
    .landing__wrapper {
      padding: 60px 20px;
    }
    .column {
      width: 100%;
    }

    .column:nth-child(1),
    .gatsby-image-wrapper {
      border-radius: 10px;
      height: 350px;
    }

    .landing__inner {
      flex-direction: column;
    }
  }
`;

export default function ServicesLanding({ content }) {
  return (
    <ServicesLandingStyles>
      <div
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-easing="ease"
        className="landing__wrapper"
      >
        <div className="landing__inner">
          <div className="column">
            <h1>{content.title}</h1>
          </div>
          <div className="column">
            <GatsbyImage
              image={content.image.asset.gatsbyImageData}
              alt={content.imageTag}
            />
          </div>
        </div>
      </div>
    </ServicesLandingStyles>
  );
}
