import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { PortableText } from '@portabletext/react';
import GlobalStyles from '../styles/GlobalStyles';

import Footer from '../components/Footer';
import Nav from '../components/Nav';

const ContactStyles = styled.div`
  background-color: var(--mist);

  .nav-inner,
  .mobile__nav {
    background-color: var(--mist);
  }

  .contact__wrapper {
    padding: 80px 30px;
    min-height: 100vh;
  }

  .page__title {
    text-align: center;
    padding: 150px 0 90px 0;
  }

  .detail {
    text-align: center;
  }

  .text__wrapper {
    width: 60%;
    max-width: 700px;
    margin: auto;
    text-align: center;
    padding-bottom: 200px;
  }

  .detail {
    grid-column: span 4;
    h4 {
      padding-bottom: 20px;
    }
  }

  .contact__details {
    max-width: 1200px;
    margin: auto;
    padding-bottom: 120px;
  }

  @media only screen and (max-width: 1100px) {
    .contact__wrapper {
      padding: 40px 20px;
    }
    .page__title {
      padding: 60px 0 25px 0;
    }

    .text__wrapper {
      padding-top: 25px;
      width: 90%;
      padding-bottom: 50px;
    }

    .site__grid {
      display: flex;
      flex-direction: column;
    }

    .detail h4 {
      padding-bottom: 10px;
    }
  }
`;

export const Head = () => (
  <>
    <title>A.L.B Accounting — Contact Us</title>
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

export default function ContactTemplate({ data }) {
  const { content } = data;
  return (
    <ContactStyles>
      <GlobalStyles />
      <Nav />
      <div className="contact__wrapper">
        <h1
          data-sal="slide-up"
          data-sal-duration="1000"
          data-sal-easing="ease"
          className="page__title"
        >
          {content.title}
        </h1>
        <div
          data-sal="slide-up"
          data-sal-duration="1000"
          data-sal-easing="ease"
          className="text__wrapper"
        >
          <PortableText value={content._rawContactText} />
        </div>
        <div
          data-sal="slide-up"
          data-sal-duration="1000"
          data-sal-easing="ease"
          className="contact__details site__grid"
        >
          <div className="detail">
            <h4>Email</h4>
            <a href={`mailto:${content.email}`}>
              <h5>{content.email}</h5>
            </a>
          </div>
          <div className="detail">
            <h4>Phone</h4>
            <a href={`tel:${content.phone}`}>
              <h5>{content.phone}</h5>
            </a>
          </div>
          <div className="detail">
            <h4>social</h4>
            <a href={content.instagram}>
              <h5>Instagram</h5>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </ContactStyles>
  );
}

export const query = graphql`
  query {
    content: sanityContact {
      title
      _rawContactText
      email
      phone
      instagram
    }
  }
`;
