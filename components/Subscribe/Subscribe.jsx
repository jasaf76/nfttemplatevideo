import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./Subscribe.module.css";
import images from "../../img";

const Subscribe = () => {
  return (
    <div className={Style.subscribe}>
      <div className={Style.subscribe_box}>
        <div className={Style.subscribe_box_left}>
          <h2>Nicht verpassen</h2>
          <p>
            Abonnieren Sie unsere super-exklusive Droplist und erfahren Sie als
            Erster über anstehende Drops
          </p>
          <div className={Style.subscribe_box_left_box}>
            <span>01</span>
            <small>Mehr Rabatt erhalten</small>
          </div>

          <div className={Style.subscribe_box_left_box}>
            <span>02</span>
            <small>Premium-Magazine erhalten</small>
          </div>

          <div className={Style.subscribe_box_left_input}>
            <input type="email" placeholder="Ihre E-mail adresse" />
            <RiSendPlaneFill className={Style.subscribe_box_left_input_icon} />
          </div>
        </div>

        <div className={Style.subscribe_box_right}>
          <Image
            src={images.update}
            alt="get update"
            height={600}
            width={800}
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
