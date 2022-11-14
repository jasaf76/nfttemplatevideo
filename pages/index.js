import React,{useState} from "react";
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
  Video,
  Loader
} from "../components/componentsindex";
import { getTopCreators } from "../TopCreators/TopCreators";
const Home = () => {
  const [nfts, setNfts] = useState([]);
  const creators = getTopCreators(nfts);
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
      {/* {creators.length == 0 ? (
        <Loader />
      ) : (
        <FollowerTab TopCreator={creators} />
      )} */}
      <Slider />

      <Collection />
      <FollowerTab />
      <Title
        heading=" Endecken Sie die besten NFTs Audio"
        paragraph="Erforschen Sie die NFTs in der meistbesuchten audio Kategorie"
      />

      <Filter />
      {/* {nfts.length == 0 ? <Loader /> : <NFTCard NFTData={nfts} />} */}
      <NFTCard />
      <Title
        heading="Nach Kategorien suchen"
        paragraph="Erforschen Sie die NFTs in der meistbesuchten Kategorie"
      />
      <Category />
      <Subscribe />
      <Brand />
      <Video />
    </div>
  );
};

export default Home;
