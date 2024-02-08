import React from "react";
import Banner from "../banner";
import CoverImg from "../CoverImg";
import Content from "../Content";
import Promotion from "../Promotion";
import PromotionBannerCta from "../PromotionBannerCta";

const rgxBlogRoute = /^\/blog\/?$/;

const CustomLayout = (props) => {
  const {
    headerComp: Header,
    sidepanelComp: Sidepanel,
    footerComp: Footer,
  } = props;
  const isBlogRoute = rgxBlogRoute.test(window.location.pathname);

  const bannerDetails = {
    title: props.frontmatter.bannerTitle || props.frontmatter.bannerSubtitle,
    subtitle: props.frontmatter.bannerSubtitle || props.frontmatter.subtitle,
    date: props.frontmatter.bannerDate || props.frontmatter.date,
    image: props.frontmatter.bannerImg || props.frontmatter.ogImg,
  };

  const promotionDetails = {
    title:
      props.frontmatter.promotionTitle || props.frontmatter.promotionSubtitle,
    subtitle: props.frontmatter.promotionSubtitle,
    link: props.frontmatter.promotionLink,
    ctaText: props.frontmatter.promotionCTA,
  };

  return (
    <>
      <Header />
      <Sidepanel />
      {Boolean(bannerDetails.title) && (
        <Banner config={props.config} height={isBlogRoute && "60vh"}>
          <div
            style={
              isBlogRoute
                ? { maxWidth: "546px", padding: "0 16px" }
                : { maxWidth: "768px" }
            }
          >
            {bannerDetails.date}
            <h1 id="banner-title">{bannerDetails.title}</h1>
            {bannerDetails.subtitle}
          </div>
          {bannerDetails.image && <CoverImg src={bannerDetails.image} />}
        </Banner>
      )}
      <Content toc={props.toc.length && props.toc}>{props.children}</Content>
      {promotionDetails.title && (
        <Promotion config={props.config}>
          <h2>{promotionDetails.title}</h2>
          <p>{promotionDetails.subtitle}</p>
          {(promotionDetails.link || promotionDetails.ctaText) && (
            <PromotionBannerCta
              href={promotionDetails.link}
              cta={promotionDetails.ctaText}
            />
          )}
        </Promotion>
      )}
      <Footer />
    </>
  );
};

export default CustomLayout;
