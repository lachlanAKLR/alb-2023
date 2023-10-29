import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import Logo from '../images/ALB_logo.svg';

const FooterStyles = styled.div`
  .footer__inner {
    padding: 100px 30px 40px 30px;
    height: 100vh;
    min-height: 800px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .footer__logo {
    width: 300px;
    padding-top: 100px;
  }

  .footer__info-top {
    height: 200px;
  }

  .footer__column {
    grid-column: span 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .footer__column:nth-child(3) {
    grid-column: span 4;
  }

  .footer__column:nth-child(4) {
    grid-column: span 2;
  }

  .gatsby-image-wrapper {
    width: 100px;
    margin-bottom: 15px;
  }

  .footer__tertiary {
    padding: 0 30px 15px 30px;
    display: flex;
  }

  .footer__tertiary h4 {
    opacity: 40%;
    font-size: 12px;
    margin-right: 20px;
  }

  @media only screen and (max-width: 1100px) {
    .footer__inner {
      height: auto;
      padding: 100px 20px 40px 20px;
      gap: 120px;
    }
    .footer__logo {
      width: 155px;
    }

    .footer__info {
      display: block;
    }

    .site__grid {
      display: flex;
      flex-direction: column;
    }
    .footer__info-top {
      height: auto;
      gap: 0;
    }

    .pad-bottom {
      padding-bottom: 40px;
    }

    .footer__logo-wrapper {
      width: 100%;
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
    }
    .gatsby-image-wrapper {
      width: 105px;
      height: 45px;
    }
    .footer__tertiary {
      padding: 0 20px 15px 20px;
    }

    .footer__column:nth-child(3) {
      padding-bottom: 20px;
    }
  }
`;

export default function Footer() {
  return (
    <footer>
      <FooterStyles>
        <div className="footer">
          <div className="footer__inner">
            <div className="footer__logo">
              <Logo />
            </div>
            <div className="footer__info">
              <div className="footer__info-top site__grid">
                <div className="footer__column">
                  <h4 className="pad-bottom">
                    a.l.b. accounting
                    <br />
                    Certified Practising
                    <br />
                    Accountant
                  </h4>
                  <h4>
                    435 Nepean Highway, <br />
                    Frankston, Vic, <br />
                    3199 abn 77 663 504 327
                    <br />
                  </h4>
                </div>
                <div className="footer__column">
                  <div className="pad-bottom">
                    <h4 className="underline">
                      <a href="/">+61 478 559 261</a>
                    </h4>
                    <br />
                    <h4 className="underline">
                      <a href="mailto:office@albaccounting.com.au">
                        office@albaccounting.com.au
                      </a>
                    </h4>
                    <br />
                    <h4 className="underline">
                      <a
                        target="blank"
                        href="https://www.instagram.com/alb__acc/"
                      >
                        @alb_ACC
                      </a>
                    </h4>
                  </div>
                  <h4 className="pad-bottom">
                    Liability limited by a scheme approved under Professional
                    Standards Legislation
                  </h4>
                </div>
                <div className="footer__column">
                  <h4 className="pad-bottom">© a.l.b. accounting, 2023</h4>
                  <h4>
                    design & build
                    <br /> by{' '}
                    <a
                      className="underline"
                      href="https://www.aklr.xyz/"
                      target="blank"
                    >
                      aklr
                    </a>
                  </h4>
                </div>
                <div className="footer__column">
                  <div className="footer__logo-wrapper">
                    <StaticImage src="../images/CPA_logo.png" alt="CPA logo" />
                    <h4 className="pad-bottom">
                      a.l.b. accounting <br />
                      is a cpa practice
                    </h4>
                  </div>
                  <h4>
                    <button
                      className="underline"
                      type="button"
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: 'smooth',
                        });
                      }}
                    >
                      Back to Top ↑
                    </button>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__tertiary">
            <h4>
              <Link to="/privacy">Privacy</Link>
            </h4>
            <h4>
              <Link to="/terms">Terms & Conditions</Link>
            </h4>
          </div>
        </div>
      </FooterStyles>
    </footer>
  );
}
