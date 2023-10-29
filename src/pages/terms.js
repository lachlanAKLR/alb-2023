import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { PortableText } from '@portabletext/react';
import GlobalStyles from '../styles/GlobalStyles';

import Footer from '../components/Footer';
import Nav from '../components/Nav';

const TermsStyles = styled.div`
  .generic__wrapper {
    padding: 80px 30px;
  }

  .page__title {
    text-align: center;
    padding: 150px 0 90px 0;
  }

  .generic__content {
    grid-column-start: 2;
    grid-column-end: 12;
    padding-top: 30px;
    max-width: 1000px;
    margin: auto;
  }

  p {
    padding-bottom: 20px;
  }

  strong {
    font-weight: normal;
    font-family: Lausanne-800;
  }

  @media only screen and (max-width: 1100px) {
    .generic__wrapper {
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

export default function Terms({ data }) {
  return (
    <TermsStyles>
      <GlobalStyles />
      <Nav />
      <div className="generic__wrapper">
        <h1 className="page__title ">{data.content.title}</h1>
        <div className="generic__content-wrapper site__grid">
          <div className="generic__content">
            <PortableText value={data.content._rawTerms} />
          </div>
        </div>
      </div>
      <Footer />
    </TermsStyles>
  );
}

export const query = graphql`
  query {
    content: sanityTerms {
      title
      _rawTerms
    }
  }
`;
