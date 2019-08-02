import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import './landing-page/index.sass';

import Layout from '../components/Layout';
import HeroImage from '../components/HeroImage/index';

export const IndexPageTemplate = ({ heading, image, mainpitch }) => (
  <section className="l-landing-page">
    <div className="l-landing-page_hero">
      <HeroImage image={image} />
    </div>

    <h1 className="l-landing-page_title">{heading}</h1>
    <p className="l-landing-page_description">{mainpitch.description}</p>
  </section>
);

IndexPageTemplate.propTypes = {
  heading: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  mainpitch: PropTypes.shape({
    description: PropTypes.string
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate {...frontmatter} />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        mainpitch {
          description
        }
      }
    }
  }
`;
