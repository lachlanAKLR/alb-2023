import React from 'react';
import styled from 'styled-components';
import JournalThumb from './JournalThumb';

const JournalNavigationStyles = styled.div`
  .navigation__wrapper {
    padding: 30px 0 120px 0;
  }
  .navigation__inner,
  h5 {
    grid-column-start: 4;
    grid-column-end: 10;
  }
  h5 {
    text-align: center;
    padding-bottom: 80px;
  }
  h3 {
    padding: 60px 0 30px 0;
  }

  .gatsby-image-wrapper {
    border-radius: 30px;
    aspect-ratio: 5 / 4;
  }

  .journal-item {
    width: calc(50% - 15px);
    text-align: center;
    min-height: 350px;
  }

  .navigation__inner {
    display: flex;
    justify-content: space-between;
  }
  @media only screen and (max-width: 1100px) {
    .navigation__wrapper {
      padding: 60px 0 80px 0;
    }
    h5 {
      text-align: center;
      padding-bottom: 30px;
    }
    h3 {
      padding: 30px 0 20px 0;
    }
    .site__grid {
      display: block;
    }
    .gatsby-image-wrapper {
      border-radius: 10px;
    }

    .navigation__inner {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .journal-item {
      width: 80%;
      text-align: center;
      min-height: 350px;
      padding-bottom: 40px;
    }
  }
`;

export default function JournalNavigation({ journals, journalData }) {
  const thisId = journalData.id;
  const filterJournals = journals.nodes.filter(
    (journal) => journal.id !== thisId
  );

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];

      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };
  const randJournals = shuffle(filterJournals);
  return (
    <JournalNavigationStyles>
      <div className="navigation__wrapper site__grid">
        <h5>Keep Reading</h5>
        <div className="navigation__inner">
          {randJournals.slice(0, 2).map((journal) => (
            <JournalThumb key={journal.id} journal={journal} />
          ))}
        </div>
      </div>
    </JournalNavigationStyles>
  );
}
