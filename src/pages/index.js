import * as React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import GlobalStyles from '../styles/GlobalStyles';

import Logo from '../images/ALB_logo.svg';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import HeroText from '../components/HeroText';
import ServiceScrollBox from '../components/ServiceScrollBox';
import GlobalCTA from '../components/GlobalCTA';
import ResourceCTA from '../components/ResourceCTA';
import JournalLatest from '../components/JournalLatest';

const HomeStyles = styled.div`
  .home__wrapper {
    padding: 80px 30px;
  }
  .home__logo-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 150px 0;
  }
  .home__logo {
    width: 300px;
  }

  @media only screen and (max-width: 1100px) {
    .home__logo {
      width: 155px;
    }
    .home__logo-wrapper {
      padding: 45px 0;
    }

    .home__wrapper {
      padding: 30px 20px;
    }
  }
`;

export const Head = ({ data }) => (
  <>
    <title>{data.homeContent.titleTag}</title>
    <meta name="description" content={data.homeContent.metaText} />
    <meta property="og:title" content={data.homeContent.titleTag} />
    <meta property="og:type" content="article" />
    <meta property="og:description" content={data.homeContent.metaText} />
    <meta
      property="og:image"
      content="https://i.ibb.co/YTj1KXD/ALB-twitter-card.png"
    />
    <meta name="twitter:card" content="summary_large_image" />
  </>
);

export default function HomePage({ data }) {
  const { homeContent } = data;
  const { heroImage } = homeContent;
  const { heroImageTag } = homeContent;
  const { services } = data;
  const { journals } = data;
  const serviceImage = data.sanityServicesPage.image.asset;

  console.log(homeContent.metaText);

  return (
    <>
      <GlobalStyles />
      <Nav />
      <HomeStyles>
        <div className="home__wrapper">
          <div className="home__inner">
            <div className="home__logo-wrapper">
              <div
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-easing="ease"
                className="home__logo"
              >
                <Logo />
              </div>
            </div>
            <HeroImage heroImage={heroImage} heroImageTag={heroImageTag} />
            <HeroText homeContent={homeContent} />
            <ServiceScrollBox services={services} serviceImage={serviceImage} />
            <ResourceCTA />
            <JournalLatest journals={journals} />
            <GlobalCTA />
          </div>
        </div>
      </HomeStyles>
      <Footer />
    </>
  );
}

export const query = graphql`
  query {
    homeContent: sanityHome {
      heroImage {
        asset {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      _rawContent
      subhead
      link
      linkText
      metaText
      titleTag
      heroImageTag
    }
    services: allSanityServices {
      nodes {
        id
        service
        slug {
          current
        }
        _rawServiceDescription
      }
    }
    sanityServicesPage {
      image {
        asset {
          gatsbyImageData
        }
      }
    }
    journals: allSanityJournal(sort: { _createdAt: ASC }) {
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
        _rawJournalArticle
        slug {
          current
        }
      }
    }
  }
`;
