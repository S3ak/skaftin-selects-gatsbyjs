import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import './landing-page/index.sass';

import Layout from '../components/Layout';
import logo from '../img/ss-logo-text.svg';

export const IndexPageTemplate = ({ heading, image, mainpitch }) => (
  <article className="l-landing-page">
    <section className="l-landing-page_first-col">
      <figure className="c-logo">
        <img src={logo} alt="skaftin selects logo" />
      </figure>

      <div className="l-landing-page_hero"></div>
    </section>

    <section className="l-landing-page_second-col">
      <div className="c-overlap">
        <div className="c-VLine" />
        <div className="c-subtext">Curating the culture collectively</div>

        <div className="c-block">
          <h1 className="c-title">
            <span className="c-title_tiny-block">Website</span>
            <span className="c-title_big-block">Coming</span>
            <span className="c-title_huge-block">Soon</span>
          </h1>
        </div>
        <div className="c-social-bar"></div>
      </div>
    </section>

    <section className="l-landing-page_last-col"></section>
  </article>
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
        heading
        mainpitch {
          description
        }
      }
    }
  }
`;
