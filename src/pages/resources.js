import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';

import Nav from '../components/Nav';
import GlobalCTA from '../components/GlobalCTA';
import Footer from '../components/Footer';

const ResourcesStyles = styled.div`
  .resources__wrapper {
    padding: 80px 30px;
  }

  .page__title {
    text-align: center;
    padding: 150px 0 90px 0;
  }

  .resource__title {
    grid-column-start: 1;
    grid-column-end: 5;
  }

  .resource__link {
    text-align: right;
    grid-column-start: 7;
    grid-column-end: 11;
  }

  .resource {
    width: 100%;
    border-top: 1px solid var(--grey);
    padding-top: 30px;
    grid-column-start: 2;
    grid-column-end: 12;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 30px 0px;
    max-width: 1000px;
    align-items: center;
    margin: auto;
  }

  .resource:last-of-type {
    border-bottom: 1px solid var(--grey);
    padding-bottom: 30px;
  }

  .resources__list {
    padding-bottom: 120px;
  }

  @media only screen and (max-width: 1100px) {
    .resources__wrapper {
      padding: 40px 20px;
    }
    .page__title {
      text-align: center;
      padding: 60px 0 25px 0;
    }
    .site__grid {
      display: block;
    }

    .resource {
      display: flex;
      flex-direction: column;
      justify-content: left;
      align-items: flex-start;
      text-align: left;
      padding-bottom: 30px;
      gap: 20px;
    }
  }
`;

export const Head = () => (
  <>
    <title>A.L.B Accounting — Resources</title>
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

function Resource({ resource }) {
  return (
    <div
      data-sal="slide-up"
      data-sal-duration="1000"
      data-sal-easing="ease"
      className="resource"
    >
      <div className="resource__title">
        <h3>{resource.title}</h3>
      </div>
      <div className="resource__link">
        <a href={resource.resources.asset.url} target="blank">
          <button type="button" className="btn-pill cream">
            Download <span className="arrow-down">↓</span>
          </button>
        </a>
      </div>
    </div>
  );
}

export default function ResourcesPage({ data }) {
  const { resources } = data;

  return (
    <ResourcesStyles>
      <GlobalStyles />
      <Nav />
      <div className="resources__wrapper">
        <h1
          data-sal="slide-up"
          data-sal-duration="1000"
          data-sal-easing="ease"
          className="page__title"
        >
          Resources
        </h1>
        <div className="resources__list site__grid">
          {resources.nodes.map((resource, index) => (
            <Resource resource={resource} />
          ))}
        </div>
        <GlobalCTA />
      </div>
      <Footer />
    </ResourcesStyles>
  );
}

export const query = graphql`
  query {
    resources: allSanityResource(sort: [{ order: ASC }]) {
      nodes {
        title
        resources {
          asset {
            url
          }
        }
      }
    }
  }
`;
