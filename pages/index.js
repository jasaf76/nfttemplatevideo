import React from "react";
//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import { HeroSection, Service,BigNFTSilder,Subscribe, Title, Filter, NFTCard, Category } from "../components/componentsindex";
const Home = () => {
  return (
    <div className={Style.HomePage}>
      <HeroSection />
      <Service />
      <BigNFTSilder />
      <Subscribe />
      <Title
        heading="Nach Kategorien suchen"
        paragraph="Erforschen Sie die NFTs in der meistbesuchten Kategorie"
      />
      <Category />  
      
       <NFTCard/>
      <Filter />
   
    </div>
  );
};

export default Home;
