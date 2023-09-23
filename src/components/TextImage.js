import React from 'react';
import styled, { css } from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import { PortableText } from '@portabletext/react';

const TextImageStyles = styled.div`
  .gatsby-image-wrapper {
    border-radius: 30px;
    max-height: calc(90vh - 130px);
  }

  .text-image__wrapper {
    padding: 60px 0;
  }

  .column__image {
    ${(props) =>
      props.isRight
        ? css`
            grid-column-start: 8;
            grid-column-end: 13;
            padding-right: 60px;
          `
        : css`
            grid-column-start: 1;
            grid-column-end: 6;
            padding-left: 60px;
          `};
  }

  .column__text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-bottom: 40px;
    max-width: 500px;
    margin: auto;
    ${(props) =>
      props.isRight
        ? css`
            grid-row-start: 1;
            grid-column-start: 1;
            grid-column-end: 7;
            padding-left: 60px;
          `
        : css`
            grid-column-start: 7;
            grid-column-end: 13;
          `};
    h4 {
      padding-bottom: 30px;
    }
  }

  @media only screen and (max-width: 1100px) {
    .site__grid {
      grid-template-columns: repeat(6, 1fr);
      gap: 30px 10px;
    }
    .column__text,
    .column__image {
      padding: 0;
    }

    .column__image {
      grid-column-start: 2;
      grid-column-end: 6;
      grid-row-start: 1;
      text-align: center;
    }

    .column__text {
      grid-column-start: 1;
      grid-column-end: 7;
      grid-row-start: 2;
    }

    .column__text h4 {
      padding-bottom: 20px;
    }

    .gatsby-image-wrapper {
      height: 300px;
      max-height: 450px;
      max-width: 300px;
    }

    .text-image__wrapper {
      padding: 25px 0px 75px 0px;
    }
  }
`;

export default function TextImage({ block, raw }) {
  const isRight = block.position === true;
  return (
    <TextImageStyles isRight={isRight}>
      <div
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-easing="ease"
        className="text-image__wrapper"
      >
        <div className="text-image__inner site__grid">
          <div className="column__image">
            <GatsbyImage
              image={block.image.asset.gatsbyImageData}
              alt="Image"
            />
          </div>
          <div className="column__text">
            <PortableText value={raw.content} />
          </div>
        </div>
      </div>
    </TextImageStyles>
  );
}
