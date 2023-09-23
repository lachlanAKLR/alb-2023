import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { PortableText } from '@portabletext/react';
import styled from 'styled-components';
import { Link, graphql, useStaticQuery } from 'gatsby';

const CtaStyles = styled.div`
  .cta__wrapper {
    padding: 60px 0;
  }

  .cta__inner {
    display: flex;
  }

  .column {
    width: 50%;
    height: 60vh;
    min-height: 600px;
    object-fit: fill;
  }

  .column:nth-child(2) {
    background-color: var(--mist);
    border: 1px solid var(--grey);
    border-radius: 0 30px 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .column__inner {
    height: 100%;
    max-width: 650px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 100px 40px 90px 40px;
    h4 {
      padding-bottom: 20px;
    }
  }

  .gatsby-image-wrapper {
    height: 60vh;
    min-height: 600px;
    border-radius: 30px 0 0 30px;
    border: 1px solid var(--grey);
    border-right: 0px;
  }

  @media only screen and (max-width: 1100px) {
    .cta__inner {
      flex-direction: column;
    }

    .column {
      width: 100%;
      height: auto;
      min-height: auto;
    }

    .gatsby-image-wrapper {
      height: 350px;
      min-height: auto;
      border-radius: 10px 10px 0 0;
      border: 1px solid var(--grey);
      border-right: 1px solid var(--grey);
      border-bottom: 0px;
    }

    .column:nth-child(2) {
      border-radius: 0px 0px 10px 10px;
    }

    .column__inner {
      padding: 50px 20px;
      h2 {
        padding-bottom: 30px;
      }
    }
  }
`;

export default function GlobalCTA() {
  const data = useStaticQuery(graphql`
    query globalCtaQuery {
      globalCTA: sanityGlobalCta {
        _rawCtaContent
        title
        image {
          asset {
            gatsbyImageData
          }
        }
        link
        linkText
      }
    }
  `);

  const { globalCTA } = data;

  return (
    <CtaStyles>
      <div
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-easing="ease"
        className="cta__wrapper"
      >
        <div className="cta__inner">
          <div className="column">
            <GatsbyImage
              image={globalCTA.image.asset.gatsbyImageData}
              alt="CTA Image"
            />
          </div>
          <div className="column">
            <div className="column__inner">
              <div>
                <h4>{globalCTA.title}</h4>
                <PortableText value={globalCTA._rawCtaContent} />
              </div>
              <Link to={globalCTA.link}>
                <button type="button" className="btn-pill mist">
                  {globalCTA.linkText} <span className="arrow">→</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </CtaStyles>
  );
}
