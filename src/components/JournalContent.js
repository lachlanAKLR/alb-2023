import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import { PortableText } from '@portabletext/react';
import { Link } from 'gatsby';

const JournalContentStyles = styled.div`
  .content__wrapper {
    padding: 80px 30px;
  }

  .page__title {
    padding: 150px 0 90px 0;
  }

  .content__inner {
    grid-column-start: 4;
    grid-column-end: 10;
    color: var(--grey);
    p {
      padding-bottom: 20px;
    }
    ol li {
      list-style: decimal;
      padding-bottom: 10px;
    }
    ol {
      position: relative;
      left: 15px;
      width: calc(100% - 15px);
      padding-bottom: 60px;
    }
    h4 {
      padding-bottom: 10px;
    }
    h5 {
      padding-top: 40px;
      line-height: 42px;
    }
  }

  .content__title {
    text-align: center;
    padding: 30px 0 60px 0;
  }

  .gatsby-image-wrapper {
    border-radius: 30px;
  }

  .image__wrapper,
  .text__wrapper {
    padding-bottom: 60px;
  }

  .back__button {
    position: sticky;
    top: 80px;
    height: fit-content;
    padding-top: 30px;
    grid-column: span 3;
  }

  @media only screen and (max-width: 1100px) {
    .content__wrapper {
      padding: 40px 20px;
    }
    .page__title {
      padding: 60px 0 25px 0;
    }

    .site__grid {
      display: block;
    }

    .back__button {
      position: relative;
      top: 0;
      left: 0;
    }

    .content__inner {
      h5 {
        padding-top: 24px;
        line-height: 28px;
      }
    }
  }
`;

export default function JournalContent({ journal }) {
  return (
    <JournalContentStyles>
      <div className="content__wrapper site__grid">
        <div className="back__button">
          <Link to="/journal">
            <button type="button" className="btn">
              <span className="arrow-back">←</span> Go Back
            </button>
          </Link>
        </div>
        <div
          data-sal="slide-up"
          data-sal-duration="1000"
          data-sal-easing="ease"
          className="content__inner"
        >
          <div className="content__title">
            <h2>{journal.title}</h2>
          </div>
          <div className="image__wrapper">
            <GatsbyImage
              image={journal.image.asset.gatsbyImageData}
              alt={journal.imageTag}
            />
          </div>
          <div className="text__wrapper">
            <PortableText value={journal._rawJournalArticle} />
          </div>
          <Link to="/contact">
            <button type="button" className="btn-pill mist">
              Contact Us <span className="arrow">→</span>
            </button>
          </Link>
        </div>
      </div>
    </JournalContentStyles>
  );
}
