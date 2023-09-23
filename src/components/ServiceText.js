import React, { useEffect, useRef } from 'react';
import { PortableText } from '@portabletext/react';
import { Link } from 'gatsby';

export default function ServiceText({
  service,
  index,
  refs,
  activeService,
  setActiveService,
  pageHeight = 100,
}) {
  const serviceRef = useRef(null);
  const activeClass = activeService === service.id ? 'active' : '';

  const observerMargin = Math.floor(pageHeight / 2);

  useEffect(() => {
    const observerConfig = {
      rootMargin: `-${
        pageHeight % 2 === 0 ? observerMargin - 1 : observerMargin
      }px 0px -${observerMargin}px 0px`,
    };

    const handleIntersection = function (entries) {
      entries.forEach((entry) => {
        if (entry.target.id !== activeService && entry.isIntersecting) {
          setActiveService(entry.target.id);
        }
      });
    };
    const observer = new IntersectionObserver(
      handleIntersection,
      observerConfig
    );
    observer.observe(refs[service.id].current);
    return () => observer.disconnect(); // Clenaup the observer if component unmount.
  }, [activeService, setActiveService, service, refs, serviceRef]);

  return (
    <li
      key={index}
      id={service.id}
      ref={refs[service.id]}
      className={`service-block ${activeClass}`}
    >
      <PortableText value={service._rawServiceDescription} />
      <Link to="/contact">
        <button type="button" className="btn">
          Contact Us <span className="arrow">→</span>
        </button>
      </Link>
    </li>
  );
}
