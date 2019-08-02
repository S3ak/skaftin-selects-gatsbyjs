import React from 'react';
import PropTypes from 'prop-types';

import './index.sass';

const HeroImage = ({ image }) => (
  <figure className="c-HeroWrapper">
    <img src={image.childImageSharp.fluid.src} width="40%" alt="Hero" />
  </figure>
);

HeroImage.propTypes = {
  image: PropTypes.shape({
    childImageSharp: PropTypes.object
  })
};

export default HeroImage;
