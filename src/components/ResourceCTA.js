import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const ResourceCtaStyles = styled.div`
  .resource__wrapper {
    padding: 60px 0;
  }
  .gatsby-image-wrapper {
    border-radius: 30px;
    height: calc(100vh - 130px);
  }
  .resource__image {
    position: relative;
  }
  .resource__text {
    width: 70%;
    max-width: 700px;
    height: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -48%);
    background-color: var(--cream);
    border-radius: 30px;
    border: 1px solid var(--grey);
    padding: 40px 120px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      max-width: 360px;
      padding-bottom: 30px;
    }
  }

  @media only screen and (max-width: 1100px) {
    .resource__wrapper {
      padding: 50px 0;
    }
    .resource__text {
      width: calc(100% - 40px);
      padding: 20px 20px;
      border-radius: 10px;
      height: 250px;
    }

    .resource__text h2 {
      padding: 0 30px 30px 30px;
    }

    .gatsby-image-wrapper {
      border-radius: 10px;
      height: 450px;
    }
  }
`;

export default function ResourceCTA() {
  const data = useStaticQuery(graphql`
    query resourceCtaQuery {
      resourceCTA: sanityResourceCta {
        image {
          asset {
            gatsbyImageData
          }
        }
        title
        linkText
        link
      }
    }
  `);

  const { resourceCTA } = data;

  return (
    <ResourceCtaStyles>
      <div
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-easing="ease"
        className="resource__wrapper"
      >
        <div className="resource__inner">
          <div className="resource__image">
            <GatsbyImage
              image={resourceCTA.image.asset.gatsbyImageData}
              alt="CTA Resource Image"
            />
            <div className="resource__text">
              <h2>{resourceCTA.title}</h2>
              <Link to={resourceCTA.link}>
                <button type="button" className="btn-pill cream">
                  {resourceCTA.linkText} <span className="arrow">→</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ResourceCtaStyles>
  );
}
