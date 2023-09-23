import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import GlobalStyles from '../styles/GlobalStyles';
import Layouts from '../components/Layouts';
import GlobalCTA from '../components/GlobalCTA';

const AboutStyles = styled.div`
  .about__wrapper {
    padding: 80px 30px;
  }

  .page__title {
    text-align: center;
    padding: 150px 0 90px 0;
  }

  @media only screen and (max-width: 1100px) {
    .about__wrapper {
      padding: 20px 20px;
    }

    .page__title {
      padding: 60px 0 25px 0;
    }
  }
`;

export const Head = () => (
  <>
    <title>A.L.B Accounting — About Us</title>
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

export default function About({ data }) {
  const { layouts } = data.content;
  const { _rawLayouts } = data.content;

  return (
    <>
      <GlobalStyles />
      <Nav />
      <AboutStyles>
        <div className="about__wrapper">
          <h1
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-easing="ease"
            className="page__title"
          >
            {data.content.title}
          </h1>
          <Layouts layouts={layouts} _rawLayouts={_rawLayouts} />
          <GlobalCTA />
        </div>
      </AboutStyles>
      <Footer />
    </>
  );
}

export const query = graphql`
  query {
    content: sanityAbout {
      title
      layouts {
        ... on SanityTextImage {
          _key
          _type
          position
          image {
            asset {
              gatsbyImageData
            }
          }
        }
      }
      _rawLayouts
    }
  }
`;
