import * as React from 'react';
import { Link } from 'gatsby';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <GlobalStyles />
      <Nav />
      <div className="container">
        <h1>H1 Desktop</h1>
        <h2>H2 Desktop</h2>
        <h3>H3 Desktop</h3>
        <h4>H4 Desktop</h4>
        <h5>H5 Desktop</h5>
        <p>P Desktop</p>
      </div>
      <div className="container">
        <Link to="/">
          <button type="button" className="btn">
            Read More <span className="arrow">→</span>
          </button>
        </Link>
        <Link to="/">
          <button type="button" className="btn-pill cream">
            More About Us <span className="arrow">→</span>
          </button>
        </Link>
        <Link to="/">
          <button type="button" className="btn-pill mist">
            More About Us <span className="arrow">→</span>
          </button>
        </Link>
        <Link to="/">
          <button type="button" className="btn-pill blue">
            More About Us <span className="arrow">→</span>
          </button>
        </Link>
        <Link to="/">
          <button type="button" className="btn-pill sage">
            More About Us <span className="arrow">→</span>
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
}
