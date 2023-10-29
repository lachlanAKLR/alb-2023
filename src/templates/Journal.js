import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import JournalContent from '../components/JournalContent';
import JournalNavigation from '../components/JournalNavigation';

const JournalTemplateStyles = styled.div`
  background-color: var(--mist);

  .nav-inner,
  .mobile__nav {
    background-color: var(--mist);
  }
`;

export const Head = ({ data }) => (
  <>
    <title>{data.journal.titleTag}</title>
    <meta name="description" content={data.journal.metaText} />
    <meta property="og:title" content={data.journal.titleTag} />
    <meta property="og:type" content="article" />
    <meta property="og:description" content={data.journal.metaText} />
    <meta
      property="og:image"
      content="https://i.ibb.co/YTj1KXD/ALB-twitter-card.png"
    />
    <meta name="twitter:card" content="summary_large_image" />
  </>
);

export default function JournalTemplate({ data }) {
  const { journal } = data;
  const { journals } = data;
  return (
    <JournalTemplateStyles>
      <GlobalStyles />
      <Nav />
      <JournalContent journal={journal} />
      <JournalNavigation journals={journals} journalData={journal} />
      <Footer />
    </JournalTemplateStyles>
  );
}

export const query = graphql`
  query ($slug: String!) {
    journal: sanityJournal(slug: { current: { eq: $slug } }) {
      _id
      _key
      id
      image {
        asset {
          gatsbyImageData
        }
      }
      large
      title
      titleTag
      metaText
      imageTag
      _rawJournalArticle
      slug {
        current
      }
    }
    journals: allSanityJournal {
      nodes {
        image {
          asset {
            gatsbyImageData
          }
        }
        title
        id
        slug {
          current
        }
      }
    }
  }
`;
