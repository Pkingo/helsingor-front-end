import React from "react";
import SwiperCore, { Navigation, A11y, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

SwiperCore.use([Navigation, A11y, Keyboard]);

const SlideshowStyles = styled.div`
  .swiper-button-prev,
  .swiper-button-next {
    color: var(--white);
  }
`;

export default function Slideshow() {
  const {
    images: { nodes: images },
  } = useStaticQuery(query);
  return (
    <SlideshowStyles>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        height={200}
        pagination={{ clickable: true }}
        autoplay
        loop
        keyboard
      >
        {images.map(({ image, id, title }) => (
          <SwiperSlide key={id}>
            <Img fluid={image.asset.fluid} alt={title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SlideshowStyles>
  );
}

const query = graphql`
  query {
    images: allSanitySlideshow {
      nodes {
        image {
          asset {
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid
            }
          }
        }
        title
        id
      }
    }
  }
`;
