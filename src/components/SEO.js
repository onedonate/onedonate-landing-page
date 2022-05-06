import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import favicon from "../images/favicon.ico";

function SEO({ description, lang, image, meta, keywords, title, pathname }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        const metaImage = image;
        const metaUrl = `${data.site.siteMetadata.siteUrl}${pathname}`;
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:url`,
                content: metaUrl,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:creator`,
                content: `@${data.site.siteMetadata.social.twitter}`,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                name: "google-site-verification",
                content: "QlRmuLQWttdkbKlZ0ZwIBX3xv0M8ouqTW3wE2Eg_jKI",
              },
            ]
              .concat(
                metaImage
                  ? [
                      {
                        property: `og:image`,
                        content: metaImage,
                      },
                      {
                        property: `og:image:alt`,
                        content: title,
                      },
                      {
                        property: "og:image:width",
                        content: image.width,
                      },
                      {
                        property: "og:image:height",
                        content: image.height,
                      },
                      {
                        name: `twitter:card`,
                        content: `summary_large_image`,
                      },
                    ]
                  : [
                      {
                        name: `twitter:card`,
                        content: `summary`,
                      },
                    ]
              )
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          >
            <link rel="icon" href={favicon} />
          </Helmet>
        );
      }}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  pathname: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  image: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  pathname: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        siteUrl
        description
        author
        social {
          twitter
        }
      }
    }
  }
`;
