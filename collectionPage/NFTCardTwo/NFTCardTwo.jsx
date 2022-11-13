import React, { useState } from "react";
import Image from "next/image";
import { BsImage } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "./NFTCardTwo.module.css";
import { LikeProfile } from "../../components/componentsindex";
import images from "../../img";

const NFTCardTwo = ({ NFTData }) => {
  const [like, setLike] = useState(false);
  const [likeInc, setLikeInc] = useState(21);

  const likeNFT = () => {
    if (!like) {
      setLike(true);
      setLikeInc(23);
    } else {
      setLike(false);
      setLikeInc(23 + 1);
    }
  };

  return (
    <div className={Style.NFTCardTwo}>
      {NFTData.map((el, i) => (
        <div key={i + 1} className={Style.NFTCardTwo_box}>
          <div className={Style.NFTCardTwo_box_like_box}>
            <div className={Style.NFTCardTwo_box_like_box}>
              <div className={Style.NFTCardTwo_box_like_box_box}>
                <BsImage className={Style.NFTCardTwo_box_like_box_box_icon} />
                <p onClick={() => likeNFT()}>
                  {like ? <AiOutlineHeart /> : <AiFillHeart />}
                  {""}
                  <span>{likeInc + 1}</span>
                </p>
              </div>
            </div>
          </div>
          <div className={Style.NFTCardTwo_box_img}>
            <Image
              src={el.image}
              alt="NFT"
              width={400}
              height={400}
              objectFit="cover"
              className={Style.NFTCardTwo_box_img_img}
            />
          </div>
          <div className={Style.NFTCardTwo_box_info}>
            <div className={Style.NFTCardTwo_box_info_left}>
               <LikeProfile /> 
              <p>clone #{i + 1}</p>
            </div>
            <small>4{i + 2}</small>
          </div>
          <div className={Style.NFTCardTwo_box_price}>
            <div className={Style.NFTCardTwo_box_price_box}>
              <small>Laufende Angebot</small>
              <p>1{el.price || i + 4}.000 ETH</p>
            </div>
            <p className={Style.NFTCardTwo_box_price_stock}>
              <MdTimer /> <span>{i ++} hours left</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTCardTwo;
