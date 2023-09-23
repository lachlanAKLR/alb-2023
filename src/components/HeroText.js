import React from 'react';
import { PortableText } from '@portabletext/react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const HeroTextStyles = styled.div`
  text-align: center;

  .hero__text {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px 0;
  }
  .hero__text-inner {
    max-width: 600px;
  }

  h4 {
    padding-bottom: 20px;
  }

  .hero__text-content {
    padding-bottom: 60px;
  }

  @media only screen and (max-width: 1100px) {
    .hero__text {
      padding: 30px 0;
    }
    .hero__text-content {
      padding-bottom: 30px;
    }
  }
`;

export default function HeroText({ homeContent }) {
  return (
    <HeroTextStyles>
      <div
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-easing="ease"
        className="hero__text"
      >
        <div className="hero__text-inner">
          <h4>{homeContent.subhead}</h4>
          <div className="hero__text-content">
            <PortableText value={homeContent._rawContent} />
          </div>
          <Link to={homeContent.link}>
            <button type="button" className="btn-pill cream">
              {homeContent.linkText}
              <span className="arrow"> →</span>
            </button>
          </Link>
        </div>
      </div>
    </HeroTextStyles>
  );
}
