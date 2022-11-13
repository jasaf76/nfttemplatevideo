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
} from "../components/componentsindex";
const Home = () => {
  return (
    <div className={Style.HomePage}>
      <HeroSection />
      <Service />
      <BigNFTSilder />

      <AudioLive />
      <FollowerTab />
      <Collection />
      <Filter />
      <NFTCard />
      <Title
        heading="Nach Kategorien suchen"
        paragraph="Erforschen Sie die NFTs in der meistbesuchten Kategorie"
      />
      <Category />
      <Subscribe />
    </div>
  );
};

export default Home;
