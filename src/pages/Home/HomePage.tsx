import React from "react";
import HeadMenu from "../../components/Home/common/HeadMenu";
import HomeContents from "../../components/Home/Main/HomeContents";
import Navigation from "../../components/Home/common/Navigation";
import HomeScrollWhy from "../../components/Home/Main/HomeScroll";
import HomeScrollHow from "../../components/Home/Main/HomeScrollComponents/HomeScrollHow";
import Footer from "../../components/Home/common/Footer";

const HomePage = () => {
  return (
    <>
      <HeadMenu></HeadMenu>
      <HomeContents></HomeContents>
      <Navigation></Navigation>
      <HomeScrollWhy/>
      <HomeScrollHow />
      <Footer />
    </>
  );
};

export default HomePage;
