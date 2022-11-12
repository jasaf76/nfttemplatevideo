import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "./NFTCard.module.css";
import images from "../../img";

const NFTCard = ({ NFTData }) => {
   const CardArray = [
   images.nft_image_1,
    images.nft_image_2,
     images.nft_image_3,
     images.nft_image_1,
     images.nft_image_2,
     images.nft_image_3,
     images.nft_image_1,
     images.nft_image_2,
   images.nft_image_3,
   ];

  const [like, setLike] = useState(true);

  const likeNft = () => {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  // console.log(NFTData);
  return (
    <div className={Style.NFTCard}>
    NFTCard
    </div>
  );
};

export default NFTCard;
