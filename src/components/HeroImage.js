import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const HeroImageStyles = styled.div`
  .gatsby-image-wrapper {
    border-radius: 30px;
    height: 60vh;
  }

  .hero__image {
    padding: 0 0 60px 0;
  }

  @media only screen and (max-width: 1100px) {
    .gatsby-image-wrapper {
      height: 300px;
      border-radius: 10px;
    }
    .hero__image {
      padding: 0 0 30px 0;
    }
  }
`;

export default function HeroImage({ heroImage }) {
  return (
    <HeroImageStyles>
      <div
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-easing="ease"
        className="hero__image"
      >
        <div className="hero__image-inner">
          <GatsbyImage
            image={heroImage.asset.gatsbyImageData}
            alt="home image"
          />
        </div>
      </div>
    </HeroImageStyles>
  );
}
