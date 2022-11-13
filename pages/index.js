import React from "react";
//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import {
  HeroSection,
  Service,
  BigNFTSilder,
  Subscribe,
  Title,
  Filter,
  NFTCard,
  Category,
  Collection,
  FollowerTab,
  AudioLive,
  Slider,
  Brand,
  Video
} from "../components/componentsindex";
const Home = () => {
  return (
    <div className={Style.HomePage}>
      <HeroSection />
      <Service />
      <BigNFTSilder />
      <Title
        heading="Audio Kollektion"
        paragraph="Erforschen Sie die NFTs die für Sie wie Mozart für mich klingen"
      />
      <AudioLive />
      <FollowerTab />
      <Title
        heading=" Endecken Sie die besten NFTs Audio"
        paragraph="Erforschen Sie die NFTs in der meistbesuchten audio Kategorie"
      />
      <Slider />
      <Collection />
      <Filter />
      <NFTCard />
      <Title
        heading="Nach Kategorien suchen"
        paragraph="Erforschen Sie die NFTs in der meistbesuchten Kategorie"
      />
      <Category />
      <Subscribe />
      <Brand />
      <Video/>
    </div>
  );
};

export default Home;
