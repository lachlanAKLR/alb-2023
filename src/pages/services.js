import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import GlobalStyles from '../styles/GlobalStyles';

import GlobalCTA from '../components/GlobalCTA';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ServicesLanding from '../components/ServicesLanding';
import ServicePageScrollBox from '../components/ServicesPageScrollBox';

const ServicesStyles = styled.div`
  background-color: var(--sage);

  .nav-inner,
  .mobile__nav {
    background-color: var(--sage);
  }

  .cta__wrapper {
    padding: 0 30px;
  }
  @media only screen and (max-width: 1100px) {
    .cta__wrapper {
      padding: 0 20px;
    }
  }
`;

export const Head = ({ data }) => (
  <>
    <title>{data.content.titleTag}</title>
    <meta name="description" content={data.content.metaText} />
    <meta property="og:title" content={data.content.titleTag} />
    <meta property="og:type" content="article" />
    <meta property="og:description" content={data.content.metaText} />
    <meta
      property="og:image"
      content="https://i.ibb.co/YTj1KXD/ALB-twitter-card.png"
    />
    <meta name="twitter:card" content="summary_large_image" />
  </>
);

export default function ServicesPage({ data }) {
  const { content } = data;
  const { services } = data;

  return (
    <ServicesStyles>
      <GlobalStyles />
      <Nav />
      <ServicesLanding content={content} />
      <ServicePageScrollBox services={services} />
      <GlobalCTA />
      <Footer />
    </ServicesStyles>
  );
}

export const query = graphql`
  query {
    content: sanityServicesPage {
      image {
        asset {
          gatsbyImageData
        }
      }
      title
      metaText
      titleTag
      imageTag
    }
    services: allSanityServices {
      nodes {
        service
        id
        slug {
          current
        }
        _rawServiceDescription
      }
    }
  }
`;
