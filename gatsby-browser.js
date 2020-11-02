import React from "react";
import Layout from "./src/components/Layout";
import "normalize.css";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
