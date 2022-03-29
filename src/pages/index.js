import React from "react";
import { graphql } from "gatsby";
import Slider from "../components/slider"

export default function Index({ data }) {

  const sliderData = {
    controlsData: {
      left: { label: '', name: '', arrowImg: { url: '', alt: '' } },
      right: { label: '', name: '', arrowImg: { url: '', alt: '' } }
    },
    breakPoints: [
      {
        width: 9999, gap: 25, showCount: 4, sidePadding: '0 100px', overflow: 'hidden',
        controlsStyle: `width: 48px; color: #fff; hoverAnimation: ''; transition: opacity 0.2s linear;`
      },
      {
        width: 1024, gap: 25, showCount: 3, sidePadding: '0 100px', overflow: 'hidden',
        controlsStyle: `width: 48px; color: #fff; hoverAnimation: ''; transition: opacity 0.2s linear;`
      },
      {
        width: 768, gap: 16, showCount: 2, sidePadding: '0 100px', overflow: 'hidden',
        controlsStyle: `width: 48px; color: #fff; hoverAnimation: ''; transition: opacity 0.2s linear;`
      },
      {
        width: 500, gap: 16, showCount: 1, sidePadding: '0 100px', overflow: 'hidden',
        controlsStyle: `width: 48px; color: #fff; hoverAnimation: ''; transition: opacity 0.2s linear;`
      }
    ]
  }

  return (
    <Slider data={sliderData}>
      <div>
        <p>text</p>
        <a href="#">text</a>
      </div>
      <div>
        <p>text</p>
        <a href="#">text</a>
      </div>
      <div>
        <p>text</p>
        <a href="#">text</a>
      </div>
    </Slider>
  );
}

export const query = graphql`
  {
    site: datoCmsSite {
      favicon: faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    blog: datoCmsBlog {
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    allPosts: allDatoCmsPost(sort: { fields: date, order: DESC }, limit: 20) {
      nodes {
        title
        slug
        excerpt
        date
        coverImage {
          large: gatsbyImageData(width: 1500)
          small: gatsbyImageData(width: 760)
        }
        author {
          name
          picture {
            gatsbyImageData(
              layout: FIXED
              width: 48
              height: 48
              imgixParams: { sat: -100 }
            )
          }
        }
      }
    }
  }
`;
