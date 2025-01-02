import React from "react";
import DiscoverTopVideos from "./discover-to-videos";
import Videos from "./videos";
import AboutUs from "./about-us";
import Professional from "../../components/professional";
import Header from "../../components/header";
import Footer from "../../components/footer";

const Home: React.FC = () => {

  return (
    <>
      <Header />

      <DiscoverTopVideos />
      
      <Videos />

      <AboutUs />

      <Professional />

      <Footer />
    </>
  );
};

export default Home;