import React, { useState, useEffect, useContext } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import axios from "axios";
import { create as ipfsHttpClient } from "ipfs-http-client";

//----------------------------------------------------------------INTERNAL
//INTERNAL  IMPORT
 import { NFTMarketplaceAddress, NFTMarketplaceABI } from "./constants";

//---FETCHING SMART CONTRACT
const fetchContract = (signerOrProvider) =>
  new ethers.Contract(
    NFTMarketplaceAddress,
    NFTMarketplaceABI,
    signerOrProvider
  );
  
export const NFTMarketplaceContext = React.createContext();
export const NFTMarketplaceProvider = (({ children }) => {

  const titleData = "NFTs entdecken, sammeln und verkaufen";
  return (
  
    <NFTMarketplaceContext.Provider value ={{titleData}}>
      {
     children
      }
  </NFTMarketplaceContext.Provider>
    )

})