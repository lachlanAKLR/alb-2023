import React from 'react';
import styled from 'styled-components';
import JournalThumb from './JournalThumb';

const JournalGridStyles = styled.div`
  .gatsby-image-wrapper {
    border-radius: 30px;
    min-height: 250px;
  }

  .large .gatsby-image-wrapper {
    height: 400px;
  }

  .journal-grid__inner {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;
  }

  .journal-item {
    width: calc(30% - 15px);
    text-align: center;
    padding-bottom: 120px;
  }

  .large {
    width: calc(50% - 15px);
  }

  .journal-item__text {
    padding-top: 40px;
  }
  h3 {
    padding: 0 15px 15px 15px;
    max-width: 500px;
    margin: auto;
  }

  .journal-grid__inner {
    grid-column-start: 2;
    grid-column-end: 12;
  }

  .journal-grid__wrapper {
    padding-top: 100px;
  }
  @media only screen and (max-width: 1100px) {
    .site__grid {
      display: flex;
    }
    .journal-grid__wrapper {
      padding-top: 40px;
    }

    .journal-item {
      width: 100%;
      padding-bottom: 60px;
    }

    .large .gatsby-image-wrapper,
    .gatsby-image-wrapper {
      height: 300px;
      border-radius: 10px;
    }
    .journal-item__text {
      padding-top: 30px;
    }
  }
`;

export default function JournalGrid({ journals }) {
  return (
    <JournalGridStyles>
      <div
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-easing="ease"
        className="journal-grid__wrapper site__grid"
      >
        <div className="journal-grid__inner">
          {journals.nodes.map((journal, index) => (
            <JournalThumb journal={journal} key={index} />
          ))}
        </div>
      </div>
    </JournalGridStyles>
  );
}
