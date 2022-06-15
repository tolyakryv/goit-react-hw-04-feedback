import React from 'react';
import propTypes from 'prop-types';
const Section = ({ title, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};
Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.element,
};
export default Section;
