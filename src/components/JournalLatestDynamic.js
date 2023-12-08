import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import JournalThumb from './JournalThumb';
import Carousel, { CarouselItem } from './Carousel';

const JournalLatestStyles = styled.div`
  .latest__wrapper {
    background-color: var(--blue);
    border-radius: 30px;
    border: 1px solid var(--grey);
    padding: 140px 0;
    text-align: center;
  }

  h1 {
    padding-bottom: 30px;
  }

  h5 {
    grid-column-start: 4;
    grid-column-end: 10;
  }
  h5 {
    text-align: center;
    padding-bottom: 80px;
  }
  h3 {
    padding: 40px 0 30px 0;
  }

  .grid__wrapper {
    padding-top: 140px;
  }
  .grid__inner {
    grid-column-start: 2;
    grid-column-end: 12;
    display: flex;
    justify-content: center;
    gap: 60px;
  }
  .journal-item {
    width: 30%;
  }
  .gatsby-image-wrapper {
    border-radius: 30px;
    aspect-ratio: 5 / 4;
  }

  .mobile__carousel {
    display: none;
  }

  @media only screen and (max-width: 1100px) {
    .mobile__carousel {
      display: block;
    }
    .latest__wrapper {
      border-radius: 10px;
      padding: 50px 20px 20px 20px;
    }
    .grid__wrapper {
      padding-top: 50px;
    }

    .site__grid {
      display: block;
    }

    .grid__inner {
      flex-direction: column;
    }
    .journal-item {
      width: 100%;
      padding-bottom: 50px;
    }
    .gatsby-image-wrapper {
      border-radius: 10px;
    }

    h3 {
      padding: 30px 10px 20px 10px;
      white-space: normal;
    }

    .grid__inner {
      display: none;
    }
  }
`;

function MobileCarousel({ journals }) {
  return (
    <div className="mobile__carousel">
      <Carousel>
        {journals.map((journal, index) => (
          <CarouselItem>
            <JournalThumb key={index} journal={journal} />
          </CarouselItem>
        ))}
      </Carousel>
    </div>
  );
}

export default function JournalLatest({ journals }) {
  console.log(journals);
  return (
    <JournalLatestStyles>
      <div
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-easing="ease"
        className="latest__wrapper"
      >
        <div className="latest__inner">
          <div className="latest__title">
            <h1>Latest from the Journal</h1>
            <Link to="/journal">
              <button type="button" className="btn-pill blue">
                All Articles <span className="arrow">→</span>
              </button>
            </Link>
          </div>
          <div className="grid__wrapper site__grid">
            <div className="grid__inner">
              {journals.map((journal, index) => (
                <JournalThumb key={index} journal={journal} />
              ))}
            </div>
            <MobileCarousel journals={journals} />
          </div>
        </div>
      </div>
    </JournalLatestStyles>
  );
}
