import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

export default function JournalThumb({ journal }) {
  const isLarge = journal.large === true;

  return (
    <div className={isLarge ? `journal-item large` : `journal-item`}>
      <div className="journal-item__inner">
        <Link to={`/journal/${journal.slug.current}`}>
          <GatsbyImage
            image={journal.image.asset.gatsbyImageData}
            alt={`image of ${journal.title}`}
          />
        </Link>
        <div className="journal-item__text">
          <h3>{journal.title}</h3>
          <Link to={`/journal/${journal.slug.current}`}>
            <button type="button" className="btn">
              Read More <span className="arrow">→</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
