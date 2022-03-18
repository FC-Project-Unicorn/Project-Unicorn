import HeadMenu from "../../components/Home/common/HeadMenu";
import AboutContentsUnicorn from "../../components/Home/About/AboutUnicorn";
import AboutContentsLTV from "../../components/Home/About/AboutLTV";
import AboutContentsFAQ from "../../components/Home/About/AboutFAQ";
import AboutContact from "../../components/Home/About/AboutContact";
import Footer from "../../components/Home/common/Footer";
import HomeScrollImageSlider from "../../components/Home/Main/HomeScrollComponents/HomeScrollImageSlider"

const AboutPage = () => {
  return (
    <>
      <HeadMenu />
      <AboutContentsUnicorn />
      <AboutContentsLTV />
      <HomeScrollImageSlider/>
      <AboutContentsFAQ />
      <AboutContact />
      <Footer />
    </>
  );
};

export default AboutPage;
