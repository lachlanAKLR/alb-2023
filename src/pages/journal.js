import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import GlobalStyles from '../styles/GlobalStyles';

import Nav from '../components/Nav';
import GlobalCTA from '../components/GlobalCTA';
import Footer from '../components/Footer';
import JournalGrid from '../components/JournalGrid';

const JournalStyles = styled.div`
  .journal__wrapper {
    padding: 80px 30px;
  }

  .page__title {
    text-align: center;
    padding: 150px 0 90px 0;
  }

  background-color: var(--blue);

  .nav-inner,
  .mobile__nav {
    background-color: var(--blue);
  }

  @media only screen and (max-width: 1100px) {
    .journal__wrapper {
      padding: 40px 20px;
    }
    .page__title {
      padding: 60px 0 25px 0;
    }
    .site__grid {
      display: block;
    }
  }
`;

export const Head = () => (
  <>
    <title>A.L.B Accounting — Journal</title>
    <meta name="description" content="Clarity in the Numbers" />
    <meta property="og:title" content="A.L.B Accounting" />
    <meta property="og:type" content="article" />
    <meta property="og:description" content="Clarity in the Numbers" />
    <meta
      property="og:image"
      content="https://i.ibb.co/YTj1KXD/ALB-twitter-card.png"
    />
    <meta name="twitter:card" content="summary_large_image" />
  </>
);

export default function Journal({ data }) {
  const { journals } = data;
  return (
    <JournalStyles>
      <GlobalStyles />
      <Nav />
      <div className="journal__wrapper">
        <h1
          data-sal="slide-up"
          data-sal-duration="1000"
          data-sal-easing="ease"
          className="page__title"
        >
          Journal
        </h1>
        <JournalGrid journals={journals} />
        <GlobalCTA />
      </div>
      <Footer />
    </JournalStyles>
  );
}

export const query = graphql`
  query {
    journals: allSanityJournal(sort: [{ order: ASC }]) {
      nodes {
        _id
        _key
        image {
          asset {
            gatsbyImageData
          }
        }
        large
        title
        imageTag
        metaText
        titleTag
        _rawJournalArticle
        slug {
          current
        }
      }
    }
  }
`;
